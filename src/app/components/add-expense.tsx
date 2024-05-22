import styled from 'styled-components'
import styles from './add-expense.module.css'
import Col from './col'
import Row from './row'

export default function AddExpense() {
    return (
      <Col>
        <h1>Add Expense</h1>
        <form action="" className={styles.addForm}>
          <input className={styles.amountInput} placeholder='Amount' type='number' />
          <input placeholder="Expense Name" type="text" />
          {/* <textarea name="Description" id="" placeholder="Add Descption for this expense"/> */}
          <select name="" id="">
            <option value="Food">Food</option>
            <option value="Grocery">Grocery</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>
          <Row>
            <input className='cash-in' type="button" value="Cash IN" />
            <input type="button" value="Cash OUT" />
          </Row>
        </form>
      </Col>
    )
}
