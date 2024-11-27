import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ViewProduct() {
    const [products,setProducts] =useState([]);
    const getData= ()=>{
        axios.get('http://localhost:5000/products')
             .then((res)=>setProducts(res.data))
    }
    useEffect(getData,[])

    function deleteProduct(id)
    {
        axios.delete(`http://localhost:5000/products/${id}`)
        .then(res=>{
            if(res.status===201)
            {
                alert("Product remove")
                window.location.reload();
            }
        })
        .catch(error=>console.log(error))
    }
    
  return (
    <div className='text-white text-center fs-1'>view Product 
    <table className='table table-hover table-dark'>
        <thead>
            <tr>
                <th>id</th>
                <th>product Name</th>
                <th>description</th>
                <th>price</th>
                <th>quantity</th>
                <th>Supplier</th>
                <th>instock</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            
            {
                products.map((product)=>
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.supplier}</td>
                        <td >
                            <input type='checkbox' checked={product.instock}></input>
                    
                     </td>   
                     <td>
                            <button className='btn btn-outline-danger me-4'
                             onClick={()=>deleteProduct(product.id)}>
                                <i class="bi bi-trash3-fill"></i>
                            </button>

                            <Link className='btn btn-outline-primary' to={`/edit/${product.id}`}>
                                <i class="bi bi-pencil-square"></i>
                            </Link>
                        </td>
                        </tr>
                )
      }
        </tbody>
    </table>
    </div>

  )
}

export default ViewProduct