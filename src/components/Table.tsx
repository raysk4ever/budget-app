import {} from 'react'
import { BiRupee } from 'react-icons/bi'

export default function Table() {
    const heading = [
        {title: 'Amount'},
        {title: 'Category'},
        {title: 'Desc'},
        {title: 'Date'}
    ]
    const data = [
        { id: '9dfd4f8c-3dc8-50e0-a199-6a90523132ce', amount: 431, desc: 'Momos in sector 18', date: '4/5/2105', category: 'rise', isCredit: true },
        { id: '61c70eaf-2205-5b18-b1ba-b1a3af253187', amount: 307, desc: 'Momos in sector 18', date: '10/26/2079', category: 'hurt', isCredit: false },
        { id: '5d324300-6408-500d-ae8c-e8c56d3cb879', amount: 591, desc: 'Momos in sector 18', date: '12/29/2043', category: 'society', isCredit: false },
        { id: '27dea993-836f-539f-bcb9-91bca48dabf7', amount: 220, desc: 'Momos in sector 18', date: '12/8/2105', category: 'fifty', isCredit: true },
        { id: 'a97c61d6-ef06-55b7-be50-328951ef62e7', amount: 912, desc: 'Momos in sector 18', date: '10/15/2113', category: 'battle', isCredit: true },
        { id: '2c9acb17-85a7-569f-8e60-5696bea5010c', amount: 882, desc: 'Momos in sector 18', date: '11/3/2083', category: 'exist', isCredit: true },
        { id: 'ffbfba1a-5bef-535f-b0d4-82a93fd3c24f', amount: 336, desc: 'Momos in sector 18', date: '12/30/2039', category: 'die', isCredit: true },
        { id: '91d8038c-194f-5730-8b53-2f5cdd665923', amount: 238, desc: 'Momos in sector 18', date: '9/3/2099', category: 'rice', isCredit: false },
        { id: 'ce96c811-0868-52cc-9275-16a7ffb02fdb', amount: 772, desc: 'Momos in sector 18', date: '4/18/2119', category: 'hand', isCredit: true },
        { id: '1bed8b33-dac1-5b7c-aae3-0955187868fc', amount: 733, desc: 'Momos in sector 18', date: '4/23/2096', category: 'planet', isCredit: true },
    ]
    return (
        <div className='card table-payment'>
            <div className='table-title-container'>
                <p>Payments</p>
                <p>Add new payment</p>
            </div>
            <table className='table-container'>
                <thead>
                    <tr className='table-item'>
                        {heading.map(h => <th key={h.title}>{h.title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr className={`table-item ${item.isCredit && 'credit'}`} key={item.id}>
                            <td className='amount-cell'><BiRupee /><p>{item.amount}</p></td>
                            <td><p>{item.category}</p></td>
                            <td><p>{item.desc}</p></td>
                            <td><p>{item.date}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}