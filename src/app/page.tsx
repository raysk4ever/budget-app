"use client";

import AddExpense from "./components/add-expense";
import ExpenseList from "./components/expense-list";
import Row from "./components/row";
import "../styles/common.css";
import Navbar from "./component-ui/navbar";
import Sidebar from "./component-ui/sidebar";
import Content from "./component-ui/content";

import styles from "../styles/page.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <main className="main-container">
      {/* <Navbar />
      <section className="sub-container">
        <Sidebar />
        <Content />
      </section> */}
    </main>
  );
}
