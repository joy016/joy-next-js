'use client';

import FormPage from './components/Form';
import { Box } from '@mui/material';
import Values from 'values.js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ColorList from './components/ColorList';

export default function Home() {
  const [colors, setColors] = useState<Values[]>([]);

  const handleAddColors = () => {
    try {
      const newColors = new Values('#f15025').all(10);
      setColors(newColors);
    } catch (error) {}
    toast.error('Something went wrong');
  };

  return (
    <Box
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}
    >
      <FormPage handleAddColors={handleAddColors} />
      <ColorList colors={colors} />
    </Box>
  );
}
