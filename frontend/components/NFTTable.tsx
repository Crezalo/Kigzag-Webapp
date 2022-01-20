import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(firstName, lastName, age) {
  return { firstName, lastName, age };
}

const rows = [
  createData("james", "smith", 20),
  createData("mary", "jones", 30),
  createData("may", "wong", 30),
];

const NFTTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>first name</TableCell>
            <TableCell>last name</TableCell>
            <TableCell align="right">age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.firstName}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NFTTable;
