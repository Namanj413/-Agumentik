import React,{useEffect,useRef} from 'react'
import "./sfd.css";
import background from "./images/119619.jpg"
import video from './images/video.mp4'

function sfd() {
    const vidRef=useRef();
    useEffect(() => { vidRef.current.play(); },[]);
  return (
    <>    
<div src>
<br/>
    <div  style={{height:'120vh'}}> 
     <video
  src= {video}
  
  ref={ vidRef }
 
  muted
  autoPlay
  loop 

/> 
    <div className='dashboard' style={{height:"140vh",padding:"2%",marginTop:"-2%",marginLeft:"-2%",marginRight:"-2%"}}>
     <br/>
     <div style={{marginTop:"8%",textAlign: "center", boxSizing: 'border-box',width:"60%",marginLeft:"20%"}}>
     <button style={{padding:"1%",border: "2px solid transparent",borderRadius:"10%", backgroundColor:"#6a6feb", color:"white", fontSize:"1rem",fontWeight:"bold"}}>🚀 NEW FEATURE</button>
    <p style={{marginTop:""}}> 
    <h1 style={{color:"white",alignSelf:"center",fontSize:"58px",lineHeight:"69px",maxWidth:"880px"}}>Hybrid meetings that just work</h1> 
    <h2 style={{color:"white", position: "relative",alignSelf:"center",fontSize:"20px",lineHeight:"26px",position: "relative"}}>Our groundbreaking co-location groups give your distributed team hybrid meetings that feel like you’re all in the same room. No echo. No expensive hardware.</h2>
    </p>
    {/* <video controls loop > <source src='//videos.ctfassets.net/1t4zag4zjt00/69criCoooY8z9CnQhxKwGn/87920b239c4d4d23a70903c2f6ed1902/Co-location_home.mp4' type="video/mp4"></source></video>  */}
   
     {/* <div style={{width:"20%",marginLeft:"-30%"}}>
    <video muted autoPlay loop>
      <source src='//videos.ctfassets.net/1t4zag4zjt00/69criCoooY8z9CnQhxKwGn/87920b239c4d4d23a70903c2f6ed1902/Co-location_home.mp4' />    
    </video>
    </div> */}
   
    {/* <div>
    <video src="//videos.ctfassets.net/1t4zag4zjt00/69criCoooY8z9CnQhxKwGn/87920b239c4d4d23a70903c2f6ed1902/Co-location_home.mp4" loop autoPlay muted className="h-[20px] w-auto" ></video>            
</div> */}



<br/>
   
<button style={{padding:"2%",border: "2px solid white",borderRadius:"10%",width:"20%", backgroundColor:"transparent", color:"white", fontSize:"1rem",fontWeight:"bold", marginTop:"3%", borderBlockColor:"white",borderBlockStartColor:"white"}}>Learn more</button>
   <br/>
   
   <img className='stars' src='//images.ctfassets.net/1t4zag4zjt00/6qE1QA8kcDWT4L7gBUWwIp/b0063ac20cdbfdf80ff560b56aef024d/reviews.png'></img>
     </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default sfd
