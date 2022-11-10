import React from 'react';
import './siglegn.css'

const Singlegun = (props) => {
    const {gun , btncart} = props;
   // console.log(props);

    const {bullet , img ,category, name, capacity, price} = gun;
    
   

    
    return (

        <div>

            <div className="card w-96 bg-base-100 shadow-xl m-6">
                 <figure className='py-2'><img className='h-96 w-96' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                             <h2 className="card-title">
                                    {name}!
                         <div className="badge badge-secondary">NEW</div>
    </h2>

    <p>If a dog chews shoes whose shoes does he choose?</p>
    <p className='text-primary text-xl'>Category: {category}</p>
    <p>bullet : {bullet}</p>
    <p>capacity: {capacity}</p>
    <p className='text-2xl'> ${price}</p>
    
    <div className="card-actions justify-end">

        <div className=''>
        <button onClick={()=> btncart()} className="btn btn-sm">add to cart</button>
        <button className="btn btn-sm ml-5">details</button>
        </div>
      

    </div>
                     </div>
             </div>

            
           
        </div>
    );
};

export default Singlegun;