import { createSlice } from "@reduxjs/toolkit";

export const rootSlice = createSlice({
    name:'expenses',
    initialState:[
            {id:1, merchant: 'Rent', total:'50', date:'22-4-3', status:'In Progress', comment:''},
            {id:2, merchant: 'Food', total:'100', date:'22-4-5', status:'Reimbursed', comment:''},
            { id:3, merchant: 'Water Bill', total:'5', date:'20-4-5', status:'In Progress', comment:''}
        ]

    ,


    reducers:{
       addExpense:(state, action) => {
        // const newExpense = {
        //     id: Date.now(),
        //      merchant: action.payload.merchant,
        //     total:action.payload.total, 
        //     date: action.payload.date,
        //     status:'New',
        //     comment: action.payload.comment
        // }    
        //    state.push(newExpense)
            state.push(action.payload)
              },
              editExpense: (state, action )=> {
                const {id, merchant, date, total, comment} = action.payload;
                const existingExpense = state.find(expense => expense.id === id)
                if(existingExpense){
                    existingExpense.merchant= merchant;
                    existingExpense.total = total;
                    existingExpense.date = date;
                    existingExpense.comment = comment
                }
            } },
              deleteExpense:(state, action)  => {
                return state.filter((expense) => expense.id !== action.payload.id)
              },
              expenseTotal: (state) => {
                let expenseTotal = 0;
                state.forEach(expense => {
                    expenseTotal += expense.total
                });
                
              }
})


export default rootSlice.reducer

export const {inputMerchant, inputTotal, inputDate,inputComment, addExpense, deleteExpense, editExpense} = rootSlice.actions