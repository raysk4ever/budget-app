"use client"

import AddExpense from "./components/add-expense";
import ExpenseList from "./components/expense-list";
import Row from "./components/row";

import styles from "../styles/page.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <main className={styles.main}>
     <section className={styles.rowContainer}>
        <ExpenseList />
        <AddExpense/>
     </section>
    </main>
  );
}
