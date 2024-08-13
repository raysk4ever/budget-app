"use client";
import { DEFAULT_CATEGORIES_ICONS } from "@/config/settings";
import Image from "next/image";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPaymentThunk,
  changeCategory,
  updatePaymentForm,
} from "../../../redux/slices/addDataSlice";

const AddTransaction = () => {
  // const [selected, setSelected] = useState("");
  // const [transaction, setTransaction] = useState({
  //   amount: "",
  //   description: "",
  //   date: "",
  // });
  const payment = useSelector((state) => state.payment);
  console.log("satte");
  const dispatch = useDispatch();
  const category = [
    {
      name: "Food",
      img: DEFAULT_CATEGORIES_ICONS.FOOD[1],
    },
    {
      name: "Travel",
      img: DEFAULT_CATEGORIES_ICONS.TRAVEL[1],
    },
    {
      name: "Home",
      img: DEFAULT_CATEGORIES_ICONS.HOME[1],
    },
    {
      name: "Restaurant",
      img: DEFAULT_CATEGORIES_ICONS.FOOD[0],
    },
    {
      name: "Cab",
      img: DEFAULT_CATEGORIES_ICONS.TRAVEL[0],
    },
    {
      name: "Rent",
      img: DEFAULT_CATEGORIES_ICONS.HOME[0],
    },
  ];

  const handleOnCashIn = () => {
    // fetch("/api/payments", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // body: JSON.stringify({
    //   ...transaction,
    //   category: selected,
    // }),
    // }).then((res));

    dispatch(createPaymentThunk(payment.form));
  };

  const handleOnTransaction: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(updatePaymentForm({ name, value }));
    // setTransaction((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <div className="card add-transaction-container">
      <p>Add new Payment</p>
      <input
        className="amount-input"
        placeholder="₹ 2000"
        name="amount"
        required
        value={payment.form.amount}
        // type="number"
        onChange={handleOnTransaction}
        min={0}
      ></input>
      <input
        placeholder="Description"
        name="description"
        required
        value={payment.form.description}
        onChange={handleOnTransaction}
      ></input>
      <input
        type="date"
        name="date"
        required
        value={payment.form.date}
        onChange={handleOnTransaction}
      />
      <menu className="category-menu">
        {category.map((item, i) => (
          <div
            className={`add-item-container ${
              item.name === payment.form.category ? "active" : ""
            }  `}
            key={i}
            onClick={() =>
              dispatch(
                updatePaymentForm({ name: "category", value: item.name })
              )
            }
          >
            <Image src={item.img} width={60} height={60} alt="no image" />
            <span>{item.name}</span>
          </div>
        ))}
      </menu>
      <div className="dfg">
        <button
          disabled={payment.isLoading}
          className="success"
          onClick={handleOnCashIn}
        >
          {payment.isLoading ? "Loading" : "Cash IN"}
        </button>
        <button className="">Clear</button>
      </div>
    </div>
  );
};

export default AddTransaction;
