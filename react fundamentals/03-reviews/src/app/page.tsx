import Image from 'next/image';
import styles from './page.module.css';
import Review from './review/Review';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Review />
    </Box>
  );
}
