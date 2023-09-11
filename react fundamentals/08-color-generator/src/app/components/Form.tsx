'use client';

import { Box, Button, TextField, Typography } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import { FormEvent, useState } from 'react';

interface FormPageProps {
  handleAddColors: () => void;
}

export default function FormPage({ handleAddColors }: FormPageProps) {
  const [color, setColor] = useState('#BC7AF9');

  const handleChange = (newColor: string) => {
    setColor(newColor);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddColors();
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
      <MuiColorInput value={color} onChange={handleChange} />
      <Button
        size="large"
        variant="outlined"
        sx={{
          padding: '15px 20px',
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
