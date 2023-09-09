'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { Box, Button, Stack, Typography, styled } from '@mui/material';
import Menu from './menu/Menu';
import { useEffect, useState } from 'react';
import data from '@/constant/data';

interface DataProps {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

export default function Home() {
  const [menuData, setMenuData] = useState<DataProps[]>(data);

  const handleFiltered = (category: string) => {
    const newItem = data.filter((categ) => categ.category === category);
    setMenuData(newItem);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '2rem',
        gap: '1.5rem',
      }}
    >
      <Typography variant="h4">Our Menu</Typography>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
        <Button
          variant="contained"
          size="small"
          onClick={() => setMenuData(data)}
        >
          All
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleFiltered('breakfast')}
        >
          Breakfast
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleFiltered('lunch')}
        >
          Lunch
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleFiltered('shakes')}
        >
          Shakes
        </Button>
      </Stack>
      <Menu menuData={menuData} />
    </Box>
  );
}
