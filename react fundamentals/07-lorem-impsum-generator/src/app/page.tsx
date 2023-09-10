'use client';

import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';

import LoremParagraph from './lorem/LoremParag';
import text from '@/constant/data';

export default function Home() {
  const [loremParag, setLoremParag] = useState<string[]>([]);
  const [count, setCount] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputVal = +e.target.value;
    setCount(inputVal);
  };

  const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoremParag(text.slice(0, count));
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
      <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
        tired of boring lorem ipsum?
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
      >
        <Typography>Paragraphs: </Typography>
        <TextField
          onChange={handleChange}
          value={count}
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: {
              min: 1,
              max: 8,
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ padding: '15px' }}
        >
          Generate
        </Button>
      </Box>
      <LoremParagraph loremParag={loremParag} />
    </Box>
  );
}
