
import { MOCK_EXPENSES } from "@/MOCK/expenses"
import { useState } from "react"

export default function ExpenseList() {
  const list = MOCK_EXPENSES
  return (
    <article>
      <h1>List</h1>
      {!list.length && (<p>No Expense Added so far. please add a expense to view here</p>)}
      {list.map((item) => (
        <ExpenseItem key={item.id} {...item}/>
      ))}
    </article>
  )
}

function ExpenseItem ({ id, title,  }: any) {
  return (
    <section className="expense-item">
      <p>{title}</p>
    </section>
  )
}