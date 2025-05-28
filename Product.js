import React from 'react'
import {Data} from '../data/data';
import Menuitem from '../components/Menuitem';
import '../styles/Product.css';


const Product = () => {
  return (
    <div className="product">
        <div className="productTitle">
           <center>Explore Electronics for your office</center>
            <div className="productList">
                {Data.map((menuItem,key)=>{
                    return(<Menuitem key={key}
                      image={menuItem.image}
                      name={menuItem.fname}
                      price={menuItem.price}
                      />
                    );



               //     <div key={index} className='product-explore'>
                 //<img src={item.menu_image} alt=" "/>
                 //<p>{item.menu_name}</p>
                
                 

                    
                })}

            </div>
        </div>
    </div>

  );
}

export default Product

