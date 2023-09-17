import { Box, Button, Typography } from '@mui/material';
import cartItems from '../data';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Items() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 0',
        width: '40%',
      }}
    >
      <Typography
        variant="h4"
        sx={{ letterSpacing: '5px', textAlign: 'center', padding: '2rem 0' }}
      >
        YOUR BAG
      </Typography>
      {cartItems.map((cartItem) => (
        <Box
          key={cartItem.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <img
              src={cartItem.img}
              style={{ width: '80px', height: '80px' }}
              alt=""
            />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ display: 'flex', flexDirection: 'column' }}>
                {cartItem.title} <span>${cartItem.price}</span>
              </Typography>
              <Button>remove</Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <AddIcon />
            <Typography>2</Typography>
            <RemoveIcon />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
