import { Connection, PublicKey } from "@solana/web3.js";
import { VotingClient } from "../voting.client";
import * as idl from "../data/voting.json";
import { Wallet } from "@project-serum/anchor";

//From contract
const PROG_ID = new PublicKey("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

const conn: Connection = new Connection("https://api.devnet.solana.com");

export async function initVotingClient(wallet?: Wallet) {
  if (wallet) {
    return new VotingClient(conn, wallet, idl as any, PROG_ID);
  } else {
    return null;
  }
}
