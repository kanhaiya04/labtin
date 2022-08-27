import {
  BrowseGallery,
  Camera,
  CameraAlt,
  Close,
  Collections,
} from "@mui/icons-material";

import React, { useState } from "react";
import "./PrescriptionDialog.css";
import camera from "../image/camera.png";
import gallery from "../image/gallery.png";

function PrescriptionDialog(props: any) {
   if ( !props.visibility ) {
     return (
       null
     )
   }
   
  return (
    <div className='my_modal'>
    <div className='dialog_body'>
    <div>
    <div className='heading_and_close'>
    <div style={{flex:"1", paddingLeft:"15px", fontSize:"larger"}}>Upload your Prescription</div>
    <div className='close_button' onClick={async() => {
       props.onClose();
    }}>
      <Close />
    </div>
   </div>
   <p style={{textAlign:"center", fontSize:"large", color:"gray"}}>choose an option to upload</p>
   <div style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
     <div style={{display:"flex", flexDirection:"column"}}>
     <img src={camera} height={70} />
     <div style={{paddingLeft:"5px", fontWeight:"bold", fontSize:"large"}}>Camera</div>
     </div>
     <div style={{display:"flex", flexDirection:"column", alignItems:"baseline"}}>
     <img src={gallery} height={70} />
     <div style={{paddingLeft:"5px", fontWeight:"bold", fontSize:"large"}}>Gallery</div>
     </div>
   </div>
   <div style={{display:"flex", width:"100%", justifyContent:"center", paddingTop:"10px"}}>
   <div style={{width:"350px", height:"125px", backgroundColor:"whitesmoke", alignSelf:"center"}}>
     <div style={{textAlign:"center", fontSize:"small", fontWeight:"bold", paddingTop:"10px"}}>Attached Prescriptions</div>
     <div>
       <div style={{border:"2px dashed gray",width:"50px", height:"50px", marginLeft:"20px", marginTop:"10px"}}></div>
     </div>
   </div>
   </div>
   <div>
     <div style={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", alignItems:"center"}}>
     <p>Enter Your Details</p>
     <input type="text" placeholder='Enter Your Name' style={{width:"200px", height:"15px", fontSize:"15px", padding:"10px", color:"black", borderColor:"black", backgroundColor:"whitesmoke", border:"0.5px solid", marginBottom:"10px", borderRadius:"5px"}}/>
     <input type="text" placeholder='Mobile Number*' style={{width:"200px", height:"15px", fontSize:"15px", padding:"10px", color:"black", borderColor:"black", backgroundColor:"whitesmoke", border:"0.5px solid", borderRadius:"5px"}}/>
     <button style={{width:"100px", height:"35px", fontSize:"15px", border:"1px solid var(--color-light)", backgroundColor:"deepskyblue", color:"white", marginTop:"20px", borderRadius:"5px", marginBottom:"10px"}} >SUBMIT</button>
     </div>
   </div>
    </div>
    </div>    
    </div>
  )
}

export default PrescriptionDialog;
