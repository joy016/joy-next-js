'use client';

import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';



export default function GroceryBudForm({
  addItem,
}: {
  addItem: (itemName: string) => void;
}) {
  const [item, setItem] = useState('');

  const handleInput = () => {
    if (!item) return;
    addItem(item);
    setItem('');
  };



  return (
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <TextField
        sx={{ width: '80%' }}
        onChange={(event) => setItem(event.target.value)}
        value={item}
      />
      <Button variant="contained" onClick={handleInput}>
        Add Item
      </Button>
    </Box>
  );
}
