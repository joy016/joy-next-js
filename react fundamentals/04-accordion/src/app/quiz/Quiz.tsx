'use client';

import { Box, Container, IconButton, Paper, Typography } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import { useState } from 'react';
import questions from '../../constant/data';

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [showQuizInfo, setShowQuizInfo] = useState(
    Array(questions.length).fill(false)
  );

  const handleShowQuizInfo = (index: number) => {
    const updatedQuizInfo = [...showQuizInfo];
    updatedQuizInfo[index] = !updatedQuizInfo[index];
    setShowQuizInfo(updatedQuizInfo);
  };
  return (
    <Container
      component={Paper}
      maxWidth="sm"
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '4rem 0',
        gap: '5px',
        width: { xs: '90%' },
        overflow: 'hidden',
        height: '80vh',
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Questions
      </Typography>
      <Box
        sx={{
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '0 1rem',
        }}
      >
        {questions.map((question, index) => (
          <Paper
            key={question.id}
            elevation={3}
            sx={{ padding: '1.5rem 1rem' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography sx={{ fontSize: '15px', fontWeight: 'bold' }}>
                {question.title}
              </Typography>

              <IconButton onClick={() => handleShowQuizInfo(index)}>
                {showQuizInfo[index] ? (
                  <RemoveCircleRoundedIcon sx={{ color: '#164E63' }} />
                ) : (
                  <AddCircleRoundedIcon sx={{ color: '#164E63' }} />
                )}
              </IconButton>
            </Box>
            {showQuizInfo[index] && <Typography>{question.info}</Typography>}
          </Paper>
        ))}
      </Box>
    </Container>
  );
}
