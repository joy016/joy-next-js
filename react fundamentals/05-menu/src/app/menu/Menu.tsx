'use client';

import data from '@/constant/data';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

interface DataProps {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

interface MenuProps {
  menuData: DataProps[];
}

export default function Menu({ menuData }: MenuProps) {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      sx={{ maxWidth: { xs: '100%', md: '80%' } }}
    >
      {menuData.map((item) => (
        <Grid item xs={8} sm={6} md={4} key={item.id}>
          <Card sx={{ width: { xs: '380px', sm: '380px', md: '367px' } }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={item.img}
            />
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    backgroundColor: ' #F59E0B',
                    padding: '2px 15px',
                    color: '#ffffff',
                    borderRadius: '4px',
                  }}
                >
                  ${item.price}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary">
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
