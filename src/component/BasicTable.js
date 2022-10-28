import * as React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { useScrollTrigger } from '@mui/material';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
  
  export default function BasicTable({users}) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Users</TableCell>
              <TableCell align="right">First Name </TableCell>
              <TableCell align="right">Last Name </TableCell>
              <TableCell align="right">City </TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Photo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.login.uuid}  //how you are accessing the values of the key
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{user.name.title}</TableCell>
                <TableCell >
                  {user.name.first}
                </TableCell>
                <TableCell align="right">{user.name.last}</TableCell>
                <TableCell align="right">{user.location.city}</TableCell>
                <TableCell align="right">{user.location.state}</TableCell>
                <TableCell align="right">
                  <img alt = {user.name.first}src={user.picture.thumbnail}/>
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }