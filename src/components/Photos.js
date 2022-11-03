import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem
} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPhoto } from '../Services/Api/Request';

const Photos = () => {
  const [data, setData] = useState();
  const params = useParams();

  console.log(params)
  useEffect(() => {
    getPhoto(params.id).then((res) => setData(res))
  }, [])

  return (
    <Container
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center'
      }}
    >
      <Box>
        <Button variant='contained' color='secondary' sx={{mr:2}}>
          <Link to={`/album/${params.id}`} style={{color:'white', textDecoration:"none"}}>Back to album</Link>
        </Button>
        <Button variant='contained' color='secondary'>
          <Link to={'/'} style={{color:'white', textDecoration:"none"}}>Back to home [User List]</Link>
        </Button>
     
      <ImageList sx={{ width: 1000, height: 800, mt:3}} cols={3}>
        {data && data.length > 0 ? data.map((item, i) => {
          return (
            <ImageListItem key={item.id}>
              <img src={`${item.url}`} />
            </ImageListItem>
          )
        }) : null}
      </ImageList>
      </Box>
    </Container>
  )
}

export default Photos