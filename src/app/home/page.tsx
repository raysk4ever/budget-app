import { FaRupeeSign } from 'react-icons/fa'

const Home = () => {
  const stats = [
    { title: 'Income', amount: 10000, color: '#F9E9B0' },
    { title: 'Spendings', amount: 10000, color: '#D0F5D6' },
    { title: 'Budget', amount: 10000, color: '#DDECEC' }
  ]
  return (
    <article className="card-stats-wrapper">
      {stats.map((item, i) => (
        <section key={i} className="card-stats-item" style={{ backgroundColor: item.color }}>
          <p>{item.title}</p>
          <div className='amount-wrapper'>
            <FaRupeeSign size={25} />
            <p className="amount">{item.amount}</p>
          </div>
        </section>
      ))}
    </article>
  )
};

export default Home;
