import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

export const createPaymentThunk = createAsyncThunk(
  "addData/createPayment",
  async (postData) => {
    return fetch("/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then((r) => r.json());
  }
);

export const addDataSlice = createSlice({
  name: "addData",
  initialState: {
    form: {
      amount: "",
      description: "",
      date: "",
      category: "",
    },
    isLoading: false,
  },
  reducers: {
    updatePaymentForm: (state, action) => {
      const { name, value } = action.payload;
      state.form[name] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentThunk.pending, (state) => {
        console.log("request pending");
        state.isLoading = true;
      })
      .addCase(createPaymentThunk.fulfilled, (state, action) => {
        console.log("success");
        state.isLoading = false;
        toast.success(action.payload.message, {
          style: {
            backgroundColor: "white",
            color: "lightpink",
            padding: "12px",
            borderRadius: "8px",
          },
          progressStyle: {
            backgroundColor: "lightpink",
          },
          icon: <FaCheckCircle style={{ color: "hotpink" }} />,
        });
        state.form = {
          amount: "",
          description: "",
          date: "",
          category: "",
        };
        console.log("payload action async return value", action);
      })
      .addCase(createPaymentThunk.rejected, (state) => {
        console.log("rejected");
        state.isLoading = false;
      });
  },
});

export default addDataSlice.reducer;
export const { updatePaymentForm } = addDataSlice.actions;
