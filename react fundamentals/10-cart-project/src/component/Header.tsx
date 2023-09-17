import { Badge, Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: '#645CFF',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: '#ffffff',
      }}
    >
      <Typography variant="h6">Use Reducer</Typography>
      <Badge badgeContent={4}>
        <ShoppingCartIcon sx={{ color: '#ffffff' }} />
      </Badge>
    </Box>
  );
}
