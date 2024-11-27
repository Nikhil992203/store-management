import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';

function AddProduct() {
  const {register,handleSubmit,setValue,reset}=useForm();
const {id}=useParams();
const saveData= product=>{
  if(!id){
  axios.post('http://localhost:5000/products',product)
 .then(res=> {
                   if(res.status===201){
          alert('product detail save')
                reset();
          }
       })
       .catch(error=>console.log(error));
      }else{
        axios.put(`http://localhost:5000/products/${id}` ,product )
        .then(res=>{
            if(res.status===200){
               alert("Product update done")
            }
        })
        .catch(error=>console.log(error));
}

}
const getEditData=()=>{
 if(id)
 {
   axios.get(`http://localhost:5000/products/${id}`)
        .then(res=>{for(let prop in res.data)
     {
               setValue(prop,res.data[prop])
    }
        })

 }      
}

useEffect(getEditData,[]);
  return (
     <div className='d-flex justify-content-center'>
       <div className='bg-white w-50 mt-3 p-3'>
        <h1>{id}</h1>
                 <h1 className='text-center fs-3 text-primary'>Add Product Details</h1>
                 
    <form onSubmit={handleSubmit(saveData)}>
      <div>
           <label className='form-label' >enter product id</label>
            <input type='text'{...register('id')} disabled={id} className='form-control border border-dark'></input>
      </div>
      <div>
           <label className='form-label'>enter product Name</label>
            <input type='text'{...register('productName')} className='form-control border border-dark'></input>
      </div>
      <div>
           <label className='form-label'>enter product description</label>
            <input type='text'{...register('description')} className='form-control border border-dark'></input>
      </div>
      <div>
           <label className='form-label'>enter product price</label>
            <input type='text'{...register('price')} className='form-control border border-dark'></input>
      </div>
      <div>
           <label className='form-label'>enter product quantity</label>
            <input type='text'{...register('quantity')} className='form-control border border-dark'></input>
      </div>
      <div>
           <label className='form-label'>enter product supplier</label>
            <input type='text' {...register('supplier')} className='form-control border border-dark'></input>
      </div>
      <div className='mt-3'>
                  <label className='form-check-label me-4'>Is product in stock?</label>
                  <input type='checkbox' {...register('inStock')} className='form-check-input border border-dark'/>
               </div>

                <button className='btn btn-success mt-3'>Submit</button>





    </form>
    
    </div>
    
    </div>
    
  )
}

export default AddProduct