import CategoryChart from "@/components/CategoryChart";
import Table from "@/components/Table";
import Stats from "@/components/stats";

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
