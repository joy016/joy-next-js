import { Box, Typography } from '@mui/material';

export default function LoremParagraph({
  loremParag,
}: {
  loremParag: string[];
}) {
  return (
    <Box sx={{ width: '70%' }}>
      <Typography>{loremParag}</Typography>;
    </Box>
  );
}
