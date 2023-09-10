import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

interface DataProps {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

interface JobInfoProps {
  jobs: DataProps[];
  currentItem: number;
}

export default function JobInfo({ jobs, currentItem }: JobInfoProps) {
  const { title, company, dates, duties } = jobs[currentItem];

  return (
    <Container>
      <Typography variant="h6">{title}</Typography>
      <Typography
        variant="overline"
        sx={{ backgroundColor: '#CBD5E1', padding: '5px 10px' }}
      >
        {company}
      </Typography>
      <Typography variant="body2">{dates}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {duties.map((duty, index) => (
          <div key={index}>
            <Typography
              sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}
            >
              <DoubleArrowIcon />
              {duty}
            </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
