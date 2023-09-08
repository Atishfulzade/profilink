import {firestore} from "../firebaseConfig"
import { toast} from "react-hot-toast";
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import { addDoc,collection,onSnapshot } from "firebase/firestore";
const dbRef=collection(firestore,"post");
export const postStatus=(status)=>{
let object={
    status:status,
};
addDoc(dbRef,object).then((res)=>{
    toast.success(`Post shared successfully!`);
}).catch((err)=>{
    toast.error(" Try again !");
})
}
export const getStatus=(setAllStatus)=>{
    onSnapshot(dbRef,(response)=>{
        setAllStatus(response.docs.map((docs)=>{
            return{...docs.data(),id:docs.id}
        }))
       })
}