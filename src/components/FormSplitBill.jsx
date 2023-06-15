import React from 'react';
import Button from './Button';

const FormSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with --- friend --</h2>
      <label>💵 Bill Value</label>
      <input type="text" />

      <label>👯‍♀️ Your Expense</label>
      <input type="text" />

      <label>👴 friend expense</label>
      <input type="text" disabled />

      <label>💲 Who is paying the bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">friend</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
