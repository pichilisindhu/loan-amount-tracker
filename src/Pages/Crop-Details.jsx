import React, { useState } from 'react';
import '../CSS/crop-details.css';
import {Link} from 'react-router-dom';

// import HomePage from './Home'; // ✅ Import HomePage

function LoanDetailsForm(){
  const [formData, setFormData] = useState({
    email: '',
    loan_amount: '',
    interest_rate: '',
    compensation: '',
    remaining_amount: '',
    amount_paid: '',
    due_amount: '',
  });

  const [submitted, setSubmitted] = useState(false); // ✅ Track submission

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (['loan_amount', 'interest_rate', 'compensation'].includes(name)) {
      calculateRemainingAmount({ ...formData, [name]: value });
    }

    if (['amount_paid', 'loan_amount', 'interest_rate', 'compensation'].includes(name)) {
      calculateDueAmount({ ...formData, [name]: value });
    }
  };

  const calculateRemainingAmount = (data) => {
    const loan = parseFloat(data.loan_amount) || 0;
    const rate = parseFloat(data.interest_rate) || 0;
    const comp = parseFloat(data.compensation) || 0;
    const interest = (loan * rate) / 100;
    const remaining = loan + interest - comp;

    setFormData((prev) => ({
      ...prev,
      remaining_amount: remaining > 0 ? remaining.toFixed(2) : '0',
    }));
  };

  const calculateDueAmount = (data) => {
    const remaining = parseFloat(data.remaining_amount) || 0;
    const paid = parseFloat(data.amount_paid) || 0;
    const due = remaining - paid;

    setFormData((prev) => ({
      ...prev,
      due_amount: due > 0 ? due.toFixed(2) : '0',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setSubmitted(true); // ✅ Trigger home page render
  };

  if (submitted) {
    return <HomePage />;
  }

  return (
    <div className="loan-form-box">

      <h2>Loan Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="loan_amount">Loan Amount</label>
        <input type="text" id="loan_amount" name="loan_amount" value={formData.loan_amount} onChange={handleChange} required />

        <label htmlFor="interest_rate">Interest Rate (%)</label>
        <input type="text" id="interest_rate" name="interest_rate" value={formData.interest_rate} onChange={handleChange} required />

        <label htmlFor="compensation">Compensation Paid by Government</label>
        <input type="text" id="compensation" name="compensation" value={formData.compensation} onChange={handleChange} required />

        <label htmlFor="remaining_amount">Remaining Amount</label>
        <input type="text" id="remaining_amount" name="remaining_amount" value={formData.remaining_amount} readOnly />

        <label htmlFor="amount_paid">Amount Paid by Farmer</label>
        <input type="text" id="amount_paid" name="amount_paid" value={formData.amount_paid} onChange={handleChange} required />

        <label htmlFor="due_amount">Due Amount</label>
        <input type="text" id="due_amount" name="due_amount" value={formData.due_amount} readOnly />

        <button className="crop-btn" type="submit"><Link to='/'>Submit</Link></button>
      </form>
    </div>
  );
};

export default LoanDetailsForm;
