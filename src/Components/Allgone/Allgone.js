import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Singlegun from '../singlegun/Singlegun';
import './allgone.css';

const Allgone = ({btncart}) => {

 const [guns, setguns] = useState([]);

 useEffect(()=>{

    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json?fbclid=IwAR3vKKpuYIPu2QrYbyYBhjEz0IrVC7n5niQotWAI2Ufu8dbU9Xr2NCbw2xo`)
    .then(res => res.json())
    .then(data => setguns(data))
 },[])


    return (
        <div>
                        <h2 className='text-center'> Welcome to Comfort Gone Shop</h2>




<div className='allgun'>
            {
                guns.map((gun)=> <Singlegun
                gun = {gun}
                btncart = {btncart}
                
                ></Singlegun>)
            }
            
        </div>
        </div>
    );
};

export default Allgone;