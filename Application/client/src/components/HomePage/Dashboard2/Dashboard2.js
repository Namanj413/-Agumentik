import React from 'react'
import "./Dashboard2.css";
function Dashboard2() {
  return (
    <>
    <div className='containerfl' style={{height:"80vh"}}>
    <br/>
      <div className='containerflight' style={{height:"60vh", width:"80vw"}}>
      <br/>
      <div style={{marginLeft:"6vw", fontWeight:"bold" }}> <h1 style={{fontSize:"4vw"}}> When you are flying?</h1></div>
      <div className='serchflightinput' style={{marginTop:"8vh"}}>
      <input placeholder='karachi-indore' style={{padding:"25px", borderRadius:"5px",width:"27vh"}}/>
      <input placeholder='Return' style={{padding:"25px", borderRadius:"5px", marginLeft:"0.5%", width:"27vh" }}/>
      <input placeholder='07 Nov 22 - 13 Nov 22' style={{padding:"25px", borderRadius:"5px", marginLeft:"0.5%", width:"27vh" }}/>
      <input placeholder='1 Passenger, Economy' style={{padding:"25px", borderRadius:"5px", marginLeft:"0.5%",width:"27vh" }}/>

      <button style={{padding:"8px",borderRadius:"10px", backgroundColor:"rgba(50, 130, 173, 1)", marginLeft:"60vw", marginTop:"1vh", width:"10vw", height:"6vh", color:"white"}}>SubmitNow</button>

      </div>
     

      <div></div>




      </div>
      </div>
    </>
  )
}

export default Dashboard2
