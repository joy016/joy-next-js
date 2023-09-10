import { Box, Button } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface DataProps {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

interface TabPageProps {
  jobs: DataProps[];
  currentItem: number;
  setCurrentItem: Dispatch<SetStateAction<number>>;
}
export default function TabPage({
  jobs,
  currentItem,
  setCurrentItem,
}: TabPageProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'pink',
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {jobs.map((item, index) => (
        <Button key={item.id} onClick={() => setCurrentItem(index)}>
          {item.company}
        </Button>
      ))}
    </Box>
  );
}
