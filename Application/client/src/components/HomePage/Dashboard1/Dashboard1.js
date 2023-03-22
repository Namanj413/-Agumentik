import React,{useEffect,useRef} from 'react'
import "./Dashboard1.css";
// import background from "https://www.golakshadweep.com/assets/new-theme/img/carousel-1.png"
import rec from "./images/Rectangle.png"
import cer from "./images/cer.png"


function Dashboard1() {
   
  return (
    <> <div class="bg_image"
    style={{
      backgroundImage: `url("https://www.golakshadweep.com/assets/new-theme/img/carousel-1.png")` ,
      backgroundSize: "cover",
      height: "120vh",
      width:"auto",
      color: "#f5f5f5",
      
    }}>
    <br/>
    <div className=''>
    
    <div className='visit'>
      <div className='rectangleimg'>
      <img src={rec} style={{display:"flex"}}/>
      <p className='visitcolor'>Visit</p>
      <img className="cir" src={cer} />

      </div>
    </div>

    <div className='exotic'>
      <div style={{color:"rgba(58, 58, 58, 1)", marginLeft:"3vw", fontSize:"3vw", fontWeight:"bold" }}><p>The Exotic</p> </div>
      
      <div style={{color:"rgba(50, 130, 173, 1)", marginLeft:"3vw", fontSize:"3vw", fontWeight:"bold", marginTop:"-2vw" }}><p>Lakshdweep </p> </div>
      <div style={{color:"rgba(58, 58, 58, 1)", marginLeft:"3vw", fontSize:"3vw", fontWeight:"bold" ,marginTop:"-2vw"  }}><p>Island </p> </div>
    </div>


    <div className='discovernow'></div>
    <button className='discovernowbtn' style={{padding:"2%",border: "2px solid rgba(50, 130, 173, 1)",borderRadius:"10%",width:"12vw", backgroundColor:"transparent", color:"rgba(50, 130, 173, 1)",alignSelf:"center", fontSize:"1rem",fontWeight:"bold", borderBlockColor:"rgba(50, 130, 173, 1)",borderBlockStartColor:"rgba(50, 130, 173, 1)"}}> Discover Now</button>
    </div>




    </div>
    </>
  )
}

export default Dashboard1
