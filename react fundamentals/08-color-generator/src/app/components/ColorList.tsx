import { Alert, Box, Button, Grid, Snackbar } from '@mui/material';
import Values from 'values.js';
import copy from 'copy-to-clipboard';
import { useState } from 'react';

interface ColorlistProps {
  colors: Values[];
}

export default function ColorList({ colors }: ColorlistProps) {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const copyToClipboard = (color: any) => {
    const singleColor = `#${color}`;
    const copiedColor = singleColor.toUpperCase();
    copy(copiedColor);
    setOpen(true);
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Copied Successfully
        </Alert>
      </Snackbar>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2} width="85%">
          {colors.map((color, index) => (
            <Grid item md={2} key={index}>
              <Button
                onClick={() => copyToClipboard(color.hex)}
                sx={{
                  width: '100%',
                  height: '10rem',
                  backgroundColor: `#${color.hex}`,
                  boxShadow: '0px 1px 13px rgba(0,0,0,0.1)',
                  color: '#000000',
                }}
              >
                #{color.hex}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
