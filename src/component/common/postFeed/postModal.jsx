
import { Avatar, Chip, IconButton, Tooltip,Button } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import EmojiPicker from "emoji-picker-react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "./postfeed.css";

export default function PostModal({open, setOpen,sendStatus,setStatus,status}) {
  const [emoji,setEmoji]=useState(false)
  const [chooseEmoji,setChooseEmoji]=useState("")
  


  return (
    <Modal
    open={open}
    onClose={()=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
    <Box className="modal">
      <div className="modal_upper">
        <div className="user_box">
          <Avatar src="user.jpg" />
          <h3>Atish Fulzade</h3>
        </div>
        <IconButton onClick={()=>setOpen(false)} >
          <CloseIcon />
        </IconButton>
      </div>
      <div className="chip_emoji">
        <Chip label="Create Post" variant="outlined" />
        <IconButton onClick={()=>setEmoji(true)}><EmojiEmotionsIcon /></IconButton>
        <div className="emo">
          <EmojiPicker onEmojiClick={(event)=>{console.log(chooseEmoji(event.target))}} lazyLoadEmojis:true autoFocusSearch:false/>
        </div>
      </div>
      <div className="post_input">
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Create a post..." onChange={(event)=>setStatus(event.target.value)}></textarea>
      </div>
      <hr />
      <div className="lower_modal">
        <div className="modal_icon">
          <Tooltip title="Image" >
            <IconButton>
              <InsertPhotoIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Image" >
            <IconButton>
              <VideocamIcon/>
            </IconButton>
          </Tooltip>
        </div>
        <Button variant="contained" color="primary" style={{borderRadius:"50px"}} onClick={sendStatus} disabled={status.length>0?false:true}>Post</Button>
      </div>
    </Box>
  </Modal>
  )
}
