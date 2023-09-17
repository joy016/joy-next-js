import Header from '@/component/Header';
import Items from '@/component/Items';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Items />
      </Box>
    </>
  );
}
