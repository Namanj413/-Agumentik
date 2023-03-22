import React ,{useRef,useEffect} from 'react'
import video from "./asset/videoocean.mp4"

function Dashboard3() {
    const vidRef=useRef();
    useEffect(() => { vidRef.current.play(); },[]);
  return (
    <>
    <div style={{height:"100vh"}}>

    <div className='bestpackge'  style={{ marginLeft:"20vw"}}>
        <h1  style={{ marginLeft:"15vw"}}>Best Packages For You</h1>
<br/>
        <h5>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</h5>
    </div>

    <div className=' LakshyaDeepVideo' style={{display:"flex", height:"auto"}}>
    <br/>

    <video
  src={video}
  style={{marginTop:"2vh"}}
  ref={ vidRef }
  muted
  autoPlay
  loop 
/>
<br/>
    </div>



    </div>
      
    </>
  )
}

export default Dashboard3
