import React,{useContext, useEffect} from 'react'
import { DataContext } from '../utils/DataContextComponent'
import { Button } from 'react-bootstrap'

function DashBoard() {
  
  let {data,prodCount,setProdCount,cartvalue,setCartValue} = useContext(DataContext)
  const sum = prodCount.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  if(sum == 0)
  {
    data.map((e,i)=>{
        prodCount[i]=0
    })
  }
  let handleCartAdd = (i)=>{
    let newArray = [...prodCount]
    newArray[i]+=1;
    setProdCount(newArray)
  }


  let handleCartRemove = (i)=>{
    let newArray = [...prodCount]
    if(prodCount[i]>0)
    {
        newArray[i]-=1
    }
    setProdCount(newArray)
  }
  return (
    data.map((e,index)=>(
      <div className='card' key={index}>
        <div className='cards'>
            <img className='img' src={e.images[0]} alt='product'></img>
            <div className='design'>
              <div className='text-container'>
                <span className='fw-bolder' style={{marginLeft:"200px"}}>{e.title}</span><br></br>
                <span className='fw-bolder '>Details : </span> This is quality product from xyz, You can avail 10% offer <br></br>on HDFC Cards , 7 days exchange policy
              </div>
            </div>
            </div>
            <div className='contents'>
                <span className='fw-bolder cardbody'><i className="fa-solid fa-indian-rupee-sign"></i>Price {e.price}</span>
                <div className='cartgroup'>
                  <span className='rating fw-bolder'><i className="fa-solid fa-star" style={{color: "#FFD43B"}}>&nbsp;</i>Rating : {e.rating}</span>
                  <span className='cartvalue'><i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;{prodCount[index]}</span>
                </div>
            </div>
            <hr/>
            <div className='total'>
              <span className='totaltext'>Total</span>
              <span className='totalamount'><i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;{e.price * prodCount[index]}</span>
            </div>
            <hr/>
  
            <div className="buttons">
              <Button variant='success' onClick={()=>handleCartAdd(index)}>Add to Cart</Button>
              &nbsp; &nbsp;  &nbsp;
              <Button variant='success' onClick={()=>handleCartRemove(index)}>Remove from Cart</Button>
            </div>
        </div>
    ))
  )
}

export default DashBoard