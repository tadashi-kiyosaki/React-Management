import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})


const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Li Guang',
  'birthday': '98126',
  'gender': 'Male',
  'job': 'Developer'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'Li Jin',
    'birthday': '9012',
    'gender': 'Male',
    'job': 'Engineer'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': 'Indiago',
    'birthday': '8912',
    'gender': 'Male',
    'job': 'Manager'
    }
]

function App(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {customers.map(c => { return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
        } 
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
