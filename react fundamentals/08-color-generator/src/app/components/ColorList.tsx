import { Box, Grid, Typography } from '@mui/material';
import Values from 'values.js';

interface ColorlistProps {
  colors: Values[];
}

export default function ColorList({ colors }: ColorlistProps) {
  return (
    <Box>
      <Grid container spacing={2}>
        {colors.map((color, index) => (
          <Grid item md={3} key={index}>
            <Box
              sx={{
                width: '3rem',
                height: '3rem',
                backgroundColor: `${color.rgb}`,
              }}
            >
              {color.rgb}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
