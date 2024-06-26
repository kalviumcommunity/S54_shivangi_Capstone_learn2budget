const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    budgetId: { type: Schema.Types.ObjectId, ref: 'Budget', required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    description: { type: String }
  });
  
  module.exports = mongoose.model('Expense', expenseSchema);
  