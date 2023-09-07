import Image from 'next/image';
import styles from './page.module.css';

import { Box } from '@mui/material';
import Quiz from './quiz/Quiz';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#CFFAFE',
      }}
    >
      <Quiz />
    </Box>
  );
}
