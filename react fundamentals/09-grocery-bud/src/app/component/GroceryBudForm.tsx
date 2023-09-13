'use client';

import { Box, Button, Container, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import CheckboxList from './GroceryList';
import { ChangeEvent, useState } from 'react';

export default function GroceryBudForm() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setItem(newValue);
  };

  const handleAddItem = () => {
    setItems((prevValue) => [...prevValue, item]);
    setItem('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '30rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
        }}
      >
        <Typography sx={{ textAlign: 'center' }}>Grocery Bud</Typography>
        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <TextField
            sx={{ width: '80%' }}
            onChange={handleInput}
            value={item}
          />
          <Button variant="contained" onClick={handleAddItem}>
            Add Item
          </Button>
        </Box>
        <CheckboxList items={items} />
      </Paper>
    </Box>
  );
}
