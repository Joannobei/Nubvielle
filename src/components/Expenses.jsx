import React, {useState} from 'react'
import AddExpenses from './AddExpenses'
import { useDispatch, useSelector } from 'react-redux';
import {deleteExpense } from '../Redux/rootSlice';
import { Link } from 'react-router-dom';



function Expenses() {
  const dispatch = useDispatch();
  const [showMyPopUp, setShowMyPopUp] = useState(false);
  const handleOnClosePopUp = () => setShowMyPopUp(false);
  const  expenses = useSelector(state => state.expenses)



console.log(expenses);
// const handleDeleteClick = () =>{
//   dispatch(deleteExpense({id: expenses[0].id}))
// }




  return (
   <div>

{/* <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        data={expenses}
        callback={(record) => console.log(record)}
      /> */}

<table className='w-full'>
             <tr>
                  <th className='w-1/5 text-start' >Date</th>
                  <th className='w-1/5 text-start'>Merchant</th>
                  <th className='w-1/5 text-start'>Total</th>
                  <th className='w-1/5 text-start'>Status</th> 
                  <th className='w-1/5 text-start'>Comment</th> 

                  </tr>
               {
                 expenses.map((expense, id) => (
                  
                      < tr key={id} className='h-[40px] odd:bg-white even:bg-slate-50'>
                  <td className='w-1/5 '>  {expense.date}</td>
                  <td className='w-1/5 ' >{expense.merchant}</td>
                  <td className='w-1/5 '>${expense.total}</td>
                  <td className='w-1/5 '>{expense.status}</td>
                  <td className='w-1/5 '>{expense.comment}</td>
                  {/* <td className='' onClick={handleDeleteClick}>Delete</td> */}
                  <Link to={`edit-expense/${expense.id}`}> <td className='w-1/5 '>edit</td>  </Link>


                  </tr> 
                 ) )
               }
      </table>

<button onClick={()=> setShowMyPopUp(true)} >show</button>
<AddExpenses visiblePopUp={showMyPopUp} onClosePopUp={handleOnClosePopUp}  />
    </div>
  )
}

export default Expenses