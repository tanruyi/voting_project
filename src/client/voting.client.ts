import * as anchor from "@project-serum/anchor";
import { Idl, AnchorProvider } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { AccountUtils } from "./common";
import { Voting } from "./data/voting";

export class VotingClient extends AccountUtils {
  wallet: anchor.Wallet;
  provider!: anchor.Provider;
  coinProgram!: anchor.Program<Voting>;

  //initialising
  constructor(
    conn: Connection,
    wallet: anchor.Wallet,
    idl?: Idl,
    programId?: PublicKey
  ) {
    super(conn);
    this.wallet = wallet;
    this.setProvider();
    this.setVotingProgram(idl, programId);
  }

  setProvider() {
    this.provider = new AnchorProvider(
      this.conn,
      this.wallet,
      AnchorProvider.defaultOptions()
    );
    anchor.setProvider(this.provider);
  }

  setVotingProgram(idl?: Idl, programId?: PublicKey) {
    //instantiating program depends on the environment
    if (idl && programId) {
      //means running in prod
      this.coinProgram = new anchor.Program<Voting>(
        idl as any,
        programId,
        this.provider
      );
    }
  }

  //vote
  setVote() {
    //Passing in String A, String B, Vote A Boolean
  }
}
