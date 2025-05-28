import React from 'react'
import ItemCard from './ItemCard'
import data from '../src/data';
const Home = () => {
  return (
    <>
      <h1 className='text-center mt-3'> Product List</h1>
      <section className='py-4 container'>
        <div className='row justify-content-center'>
            {data.map((item, index)=>
            {
                return(
                <ItemCard img={item.img} title={item.title} desc={item.Desc}
                 price={item.price}
                 item={item}               
                  key={index}/>


                )
            })}
        </div>

      </section>
    </>
  );
};

export default Home
