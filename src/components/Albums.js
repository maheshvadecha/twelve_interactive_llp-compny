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
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAlbums } from '../Services/Api/Request'

const Albums = () => {
  const [data, setData] = useState();
  const params = useParams();
  const heading = ['Album Id', 'Title', 'Action'];

  useEffect(() => {
    getAlbums(params.userId).then((res) => setData(res));
  }, [])

  return (
    <Container
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          boxShadow: 4,
          p: 5,
          borderRadius: 3
        }}
      ><Button variant='contained' color='secondary'><Link to={'/'} style={{color:'white', textDecoration:'none'}}>Back to User List</Link></Button>
        <Typography textAlign={'center'} variant='h4'>Album List</Typography>
        <Table>
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
          <TableBody>
            {
              data && data.length > 0 ? data.map((item, i) => {
                return (
                  <TableRow>
                    <TableCell>{item.userId}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <Box sx={{ mt: 1 }}>
                      <Button
                        type='button'
                        variant='contained'
                        color='secondary'
                      >
                        <Link to={`/photo/${item.userId}`} style={{ color: 'white ', textDecoration: 'none' }}>Show Photos</Link>
                      </Button>
                    </Box>
                  </TableRow>
                )
              }) : null
            }
          </TableBody>
        </Table>
      </Box>
    </Container>
  )
}

export default Albums 