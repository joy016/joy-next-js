'use client';

import { Box, Button, Typography } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';

interface FormPageProps {
  handleAddColors: (color: string) => void;
}

export default function FormPage({ handleAddColors }: FormPageProps) {
  const [color, setColor] = useState('#BC7AF9');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddColors(color);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="button">Color Generator</Typography>

      <input
        type="color"
        value={color}
        onChange={handleChange}
        style={{
          border: 'none',
          backgroundColor: `${color}`,
          borderRadius: '5px',
          padding: '0.5rem 1rem',
          outline: 'none',
        }}
      />
      <input placeholder={color} style={{ padding: '0.3rem 1rem' }} />

      <Button
        size="large"
        variant="outlined"
        sx={{
          padding: '0.1rem 1rem',
          color: `${color}`,
          fontWeight: 'bold',
          borderColor: `${color}`,
        }}
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
}
