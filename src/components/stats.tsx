"use client"
import { FaRupeeSign } from 'react-icons/fa'
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
//   ssr: false,
// });

const Stats = () => {
  const income = 150000
  const spending = 122200
  const budget = 30000
  const stats = [
    { title: 'Income', amount: income, color: '#F9E9B0' },
    { title: 'Budget', amount: budget, color: '#DDECEC' },
    { title: 'Spendings', amount: spending, color: '#D0F5D6' },
    { title: 'Savings', amount: income - spending, color: '#e3ddec' }
  ]
  return (
    <article className="card-stats-wrapper">
      {stats.map((item, i) => (
        <section key={i} className="card-stats-item" style={{ backgroundColor: item.color }}>
          <p>{item.title}</p>
          <div className='amount-wrapper'>
            <FaRupeeSign size={25} />
            <p className="amount">{Intl.NumberFormat().format(item.amount)}</p>
          </div>
        </section>
      ))}
    </article>
  )
};

export default Stats;
