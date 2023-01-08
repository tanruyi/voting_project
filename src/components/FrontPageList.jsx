import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";

const FrontPageList = () => {
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 1024, bgcolor: "background.paper", align: "center" }}>
      <TableContainer component={Paper}>
      <Table sx={{ align: "center" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Do Kwon</TableCell>
            <p>vs</p>
            <TableCell align="left">Sam Bankman-Fried</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
    </>
  );
};

export default FrontPageList;
