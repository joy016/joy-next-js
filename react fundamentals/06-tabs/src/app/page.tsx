'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { Box, Button, Stack, Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import data from '@/constant/data';
import TabPage from './components/Tab';
import DetailsPage from './components/Details';
import axios from 'axios';
import JobInfo from './components/JobInfo';

const url = 'https://course-api.com/react-tabs-project';

export interface DataProps {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

export default function Home() {
  const [jobData, setJobData] = useState<DataProps[]>([]);
  const [currentItem, setCurrentItem] = useState(0);
  const [loading, setLoading] = useState(true);

  async function getUser() {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setJobData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      {!loading && (
        <>
          <TabPage
            jobs={jobData}
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
          <JobInfo jobs={jobData} currentItem={currentItem} />
        </>
      )}
    </Box>
  );
}
