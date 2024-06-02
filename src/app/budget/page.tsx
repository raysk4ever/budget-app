const Budget = () => {
  return (
    <>
      <h1>Manage your finance!</h1>
      <form className="budget-form">
          <div className="form-item">
            <label htmlFor="income">Enter your Income</label>
            <input type="number" id="income" placeholder="Enter your Income" />
          </div>
          <div className="form-item">
            <label htmlFor="budget">Enter your Budget</label>
            <input type="number" placeholder="Enter your Budget" />
          </div>
          <button className="form-action-button">Update</button>
      </form>
    </>
  );
};

export default Budget;
