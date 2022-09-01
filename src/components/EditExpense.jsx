import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { editExpense } from '../Redux/rootSlice';


function EditExpense() {

 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams();
  const  expenses = useSelector(state => state.expenses)
console.log(expenses);
const existingExpense = expenses.filter(expense => params.id ==  expense.id)
console.log(existingExpense);
const {merchant, total, date, comment} = existingExpense[0]

const { register, formState: { errors }, formState, handleSubmit } = useForm(
  {
    defaultValues: {
     merchant ,
    total ,
    date,
    comment,
    }
  }
);

const { isSubmitSuccessful } = formState

  const onSubmit = (data) => {
    let expenseData = {
      id: params.id,
      merchant: data.merchant,
      total: data.total,
      date: data.date,
      status: 'New',
      comment: data.comment,
    };
    dispatch(editExpense(expenseData))

  }

  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };

  return (
    <div>EditExpense

      {isSubmitSuccessful ? `${navigate('/dashboard')}` :   <div className='w-[46rem] h-[40rem] bg-white flex justify-between z-20 p-5'>
        <form onSubmit={handleSubmit(onSubmit)} action="">


          <div className="add w-[21rem] mt-5">
            <p> AddExpenses</p>



            <div className="my-4">
              <label htmlFor="merchant">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Merchant
                </span>
              </label>

              <select style={{ border: errors.merchant ? '1px solid #e03434' : '' }}
                id='merchant'
                type=""
                placeholder=""
                className=" focus-visible:no-underline w-full border-none rounded-lg h-[46px] px-5 bg-[#f9f8f8] "
                {...register("merchant", {
                  required: {
                    value: true,
                    message: 'Can not be blank'
                  },
                })}
              >
                <option defaultValue></option>
                <option >Taxi</option>
                <option value="Fast Food">Fast Food</option>
                <option >Breakfast</option>
                <option >Office Supplies</option>
                <option >Electronics</option>
                <option >Ride Sharing</option>
                <option >Shuttle</option>
                <option >Hotel</option>
                <option >Airline</option>
                <option >Rental Car</option>
                <option >Restaurant</option>
                <option >Parking</option>



              </select>
              {errors.merchant && (
                <p className="text-[#e03434] text-sm">{errors.merchant.message}</p>
              )}
            </div>

            <div className="my-4">
              <label>Total</label>

              <input style={{ border: errors.total ? '1px solid #e03434' : '' }}
                type="text"
                placeholder="$"
                className="outline-none w-full  rounded-lg h-[46px] px-5 border-none bg-[#f9f8f8] "
                {...register("total", {
                  required: {
                    value: true,
                    message: 'Can not be blank'
                  },
                })}
              />
              {errors.total && (
                <p className="text-[#e03434] text-sm">{errors.total.message}</p>
              )}
            </div>

            <div className="my-4">
              <label>Date</label>

              <input style={{ border: errors.date ? '1px solid #e03434' : '' }}
                type="date"
                placeholder="none"
                className="outline-none w-full  rounded-lg h-[46px] px-5 bg-[#f9f8f8] border-none "
                {...register("date", {
                  required: {
                    value: true,
                    message: 'Can not be blank'
                  },
                })}
              />
              {errors.date && (
                <p className="text-[#e03434] text-sm">{errors.date.message}</p>
              )}
            </div>

            <div className="my-4">
              <label>Comment</label>

              <textarea style={{ border: errors.coment ? '1px solid #e03434' : '' }}
                type="text"
                placeholder=""
                className="outline-none w-full  rounded-lg  px-5 bg-[#f9f8f8] h-[5rem] border-none "
                {...register("comment", {
                  required: {
                    value: true,
                    message: 'Can not be blank'
                  },
                })}
              />
              {errors.comment && (
                <p className="text-[#e03434] text-sm">{errors.comment.message}</p>
              )}
            </div>

            <div className="w-[11rem] flex justify-between">
              <input className='w-[5rem] bg-[#2135a6] text-white h-[2.3rem] rounded-md ' type="submit" value="Save" />

            </div>

          </div>

        </form>


        <div className="w-[21rem] mt-4 border-dashed border-[2px] ">
        <input className='m-5' type="file" onChange={onImageChange} />
          <img src={img} alt="" />

        </div>
      </div>}
    


    </div>
  )
}

export default EditExpense