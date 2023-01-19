import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { VotingClient } from "../client/voting.client";
import { useState, useEffect } from "react";
import { Wallet } from "@project-serum/anchor";

const FrontPageList = () => {
  const [pair, setPair] = useState({} as any);

  //wallet.pubkey is the pubkey of connected wallet
  const wallet = useWallet();

  //must use connection
  const { connection } = useConnection();

  useEffect(() => {
    (async () => {
      const program = new VotingClient(connection, wallet as unknown as Wallet);
      const currentpair = await program.getPair("Do Kwon", "Sam Bankman-Fried");
      setPair(currentpair);
    })();
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1024,
          bgcolor: "background.paper",
          align: "center",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ align: "center" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">{pair}</TableCell>
                <p>vs</p>
                <TableCell align="left">{pair}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default FrontPageList;
