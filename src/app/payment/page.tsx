import dynamic from 'next/dynamic'

const Stats = dynamic(() => import('@/components/stats'))
const Table = dynamic(() => import('@/components/Table'))
const CategoryChart = dynamic(() => import('@/components/CategoryChart'))

const Payment = () => {
  return (
    <>
      <Stats />
      <div className="payment-overview-container">
        <Table />
        <CategoryChart />
      </div>

    </>
  );
};

export default Payment;
