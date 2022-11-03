import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../Services/Api/Request';

const Home = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser().then((res) => setUser(res))
  }, [])

  const heading = ['ID', 'Name', 'Username', 'Email', 'Phone', 'Actions']
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          boxShadow: 5,
          borderRadius: 3,
          padding: 4,
        }}
      >
        <Typography variant='h4' textAlign='center'> User List</Typography>
        <Table >
          <TableHead>
            <TableRow>
              {
                heading && heading.length > 0 ? heading.map((item, i) =>
                  <TableCell key={i}
                    sx={{
                      fontSize: 20,
                      fontWeight: 'bold'
                    }}>{item}</TableCell>) : null
              }
            </TableRow>
          </TableHead>
          {user && user.length > 0 ? user.map((item, i) => {
            return (
              <TableBody>
                <TableRow>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.username}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <Box sx={{ mt: 1, pl: 1 }}>
                    <Button
                      type='button'
                      variant='contained'
                      color='secondary'
                    ><Link to={`/album/${item.id}`} style={{ textDecoration: 'none', color: '#ffff' }}>Show Albums</Link>
                    </Button>
                  </Box>
                </TableRow>
              </TableBody>
            )
          }) : null
          }
        </Table>
      </Box>
    </Container>
  )
}

export default Home;