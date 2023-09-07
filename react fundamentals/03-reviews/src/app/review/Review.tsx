'use client';

import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import people from '../../constant/data';

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * +people.length);
    setIndex(randomNumber);
  };

  const handlePrev = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (currentIndex === 0) {
        return currentIndex;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (currentIndex === people.length - 1) {
        return currentIndex;
      }
      return newIndex;
    });
  };

  return (
    <Container
      component={Paper}
      maxWidth="sm"
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '4rem 0',
        gap: '5px',
        width: { xs: '90%' },
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src={image}
        sx={{ width: 100, height: 100, margin: '0 auto' }}
      />
      <Typography variant="h6">{name}</Typography>
      <Typography variant="caption">{job}</Typography>
      <Typography variant="body2" sx={{ margin: { xs: '10px 0' } }}>
        {text}
      </Typography>
      <Box>
        <IconButton size="small" onClick={handlePrev}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" onClick={handleNext}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
      <Button onClick={handleRandom}>Surprise Me</Button>
    </Container>
  );
}
