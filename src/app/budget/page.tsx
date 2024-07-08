"use client"

import useAlert from "@/hooks/use-alerts";
import useBudget from "@/hooks/use-budget";
import { FormEventHandler, MouseEventHandler, useEffect, useState } from "react";

const Budget = () => {
  const {budget, saveBudget} = useBudget()
  const {setShow} = useAlert()
  const handleSaveBudget: FormEventHandler<HTMLFormElement>  = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    await saveBudget(Object.fromEntries(formData.entries()) as any)
    setShow('Budget Updated Successfully!')
  }

  return (
    <>
      <h1>Manage your finance!</h1>
      <form className="budget-form" onSubmit={handleSaveBudget}>
          <div className="form-item">
            <label htmlFor="income">Enter your Income</label>
            <input name="income" defaultValue={budget.income} type="number" id="income" placeholder="Enter your Income" />
          </div>
          <div className="form-item">
            <label htmlFor="budget">Enter your Budget</label>
            <input name="budget" id="budget" defaultValue={budget.budget} type="number" placeholder="Enter your Budget" />
          </div>
          <input type="submit" className="form-action-button" />
      </form>
    </>
  );
};

export default Budget;
