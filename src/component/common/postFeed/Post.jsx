import React, { useState,useMemo } from "react";
import "./postfeed.css";
import { Avatar} from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";

import PostModal from "./postModal";
import { postStatus,getStatus } from "../../../API/FireStoreAPIs";
export default function PostStatus() {
  const [open, setOpen] = useState(false);
  const [status,setStatus]=useState("")
  const [allStatuses,setAllStatus]=useState([])
  const sendStatus=async()=>{
    await postStatus(status);
    await setOpen(false);
    await setStatus("")
  }
  useMemo(() =>getStatus(allStatuses) , [])
  
  return (
    <div className="post_main">
      <div className="modal_box">
        <Avatar src="user.jpg" />
        <button onClick={()=>setOpen(true)}>Create a post...</button>
        <PostModal 
        setStatus={setStatus}
         open={open}
         setOpen={setOpen}
         status={status}
         sendStatus={sendStatus}
        />
        {allStatuses.map((posts)=>{
          return(
            <>
            <p>{posts.status}</p>
            </>
          )
        })}
      </div>
      <div className="post_icon">
        <div className="icons_name">
          <InsertPhotoIcon color="primary" />
          <p>Image</p>
        </div>
        <div className="icons_name">
          <VideocamIcon color="secondary" />
          <p>Video</p>
        </div>
        <div className="icons_name">
          <EventIcon color="error" />
          <p>Event</p>
        </div>
        <div className="icons_name">
          <ArticleIcon color="warning" />
          <p>Article</p>
        </div>
      </div>
    </div>
  );
}
