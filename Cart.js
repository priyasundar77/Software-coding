import React from 'react'
import { useCart } from 'react-use-cart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
   cartTotal,
   updateItemQuantity,
   removeItem,
   emptyCart,
   
  }=useCart();
  
  if (isEmpty) return <h5 className='text-center'>
    <ShoppingCartIcon/>Your Cart is Empty</h5>

  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <h5>Cart ({totalUniqueItems}) total items:({totalItems})</h5>
          <table className='table table-light table-hover m-0'>
            <tbody>
            {items.map((item,index)=>{
              return(
            
              <tr key={index}>
                <td>
                   <img src={item.img} style={{height:'6rem'}}/>
                   </td>
              
              <td>{item.title}
              </td>
              <td>{item.price}</td>
              <td>Quantity({item.quantity})</td>
              <td>
                <button  className='btn btn-info ms-2'
                onClick={()=>updateItemQuantity(item.id,item.quantity -1)}
                >-</button>

                <button  className='btn btn-info ms-2'
                onClick={()=>updateItemQuantity(item.id,item.quantity +1)}
                >+</button>

                <button  className='btn btn-danger ms-2'
                onClick={()=>removeItem(item.id)}
                >Remove Item</button>
              </td>
              </tr>
            )
          })}
          </tbody>
          </table>
        </div>
        <div className='col-auto ms-auto'>
          <h2>Total price :${cartTotal}</h2>
        </div>
        <div className='col-auto'>
          <button className='btn btn-danger m-2'
          onClick={()=>emptyCart()
          }
          >Clear Cart</button>
        </div>

      </div>
    </section>
  )
}

export default Cart
