import * as anchor from "@project-serum/anchor";
import { Idl, AnchorProvider } from "@project-serum/anchor";
import { Connection, PublicKey } from "@solana/web3.js";
import { AccountUtils } from "./common";
import { BonkVote } from "./data/voting";

export class VotingClient extends AccountUtils {
  wallet: anchor.Wallet;
  provider!: anchor.Provider;
  bonkProgram!: anchor.Program<BonkVote>;

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
      this.bonkProgram = new anchor.Program<BonkVote>(
        idl as any,
        programId,
        this.provider
      );
    }
  }

  //vote

  getGlobalCounter = () => {
    const [globalState, _globalStateBump] = PublicKey.findProgramAddressSync(
      [Buffer.from(anchor.utils.bytes.utf8.encode("global"))],
      this.bonkProgram.programId
    );
    return globalState;
  };

  getPair = async (A_NAME: string, B_NAME: string) => {
    const [pair, _pairBump] = PublicKey.findProgramAddressSync(
      [
        Buffer.from(anchor.utils.bytes.utf8.encode("pair")),
        Buffer.from(anchor.utils.bytes.utf8.encode(A_NAME)),
        Buffer.from(anchor.utils.bytes.utf8.encode(B_NAME)),
      ],
      this.bonkProgram.programId
    );
    const current = await this.bonkProgram.account.pair.fetch(pair);
    return current;
  };

  async vote(
    globalState: PublicKey,
    pair: PublicKey,
    aName: string,
    bName: string,
    voteA: boolean
  ) {
    const voteIx = await this.bonkProgram.methods
      .vote(aName, bName, voteA)
      .accounts({
        globalState: this.getGlobalCounter(),
        pair, //account that stores both PDA. 2 name 2 link
        voter, // wallet key
        voterBonk, // get token account
        developerBonk, //hard code developer pubkey
        mintAddress, //hard code developer pubkey
      })
      .instruction();

    return voteIx;
  }
}
