"use client"
import SendsLineChart from '@/components/SendsLineChart';
import Filters from '@/components/filters';
import Stats from '@/components/stats';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = () => {
  const {prefetch} = useRouter()

  useEffect(() => {
    prefetch('/payment')
  }, [prefetch])

  return (
   <>
    <Filters />
    <Stats />
    <SendsLineChart />
   </>
  )
};

export default Home;
