'use client';

import { useState } from 'react';
import GroceryBudForm from './component/GroceryBudForm';
import { nanoid } from 'nanoid';
import CheckboxList from './component/GroceryList';
import { Items } from './types/items';
import { Box, Paper, Typography } from '@mui/material';

export default function Home() {
  const [items, setItems] = useState<Items[]>([]);

  const handleAddItem = (itemName: string) => {
    const newItem = {
      name: itemName,
      isCompleted: false,
      id: nanoid(),
    };
    setItems([...items, newItem]);
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.id != itemId);
    setItems(newItems);
  };

  return (
    <>
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
          <GroceryBudForm addItem={handleAddItem} />
          <CheckboxList items={items} removeItem={removeItem} />
        </Paper>
      </Box>
    </>
  );
}
