import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Preview.css'
import {resetCameraImage, selectCameraImage} from './features/cameraSlice'
import { useHistory } from 'react-router-dom';

import NoteIcon from '@material-ui/icons/Note';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import CloseIcon from '@material-ui/icons/Close';
import CreateIcon from '@material-ui/icons/Create';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SendIcon from '@material-ui/icons/Send';
import {v4 as uuid} from 'uuid'
import {db, storage} from './firebase'
import firebase from 'firebase'


function Preview() {
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!cameraImage){
            history.replace("/")
        }   
    }, [cameraImage, history])


    const closePreview = () =>{
        dispatch(resetCameraImage())
        
    }

    const sendPost = () =>{
        const id = uuid();
        const uploadTask = storage.ref(`posts/${id}`).putString(cameraImage, "data_url")
        
    uploadTask.on('state_changed', null, (error)=>{
        console.log(error)
    },
    ()=>{
        // COMPLETE function
        storage.ref('posts').child(id).getDownloadURL().then(url=>{
            db.collection("posts").add({
                imageURL: url,
                username: "Shrey",
                read: false,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            history.replace('/chats')
        })
    }
    )
    
    }

    return (
        

        <div className="preview">
            <CloseIcon onClick={closePreview} className="preview__close" />
            <div className="preview__toolbarRight">
                <NoteIcon />
                <CropIcon />
                <TimerIcon />
                <CreateIcon />
                <TextFieldsIcon />
                <AttachFileIcon />
                <MusicNoteIcon />
            </div>
            
            <img src={cameraImage} alt=""/>

            <div onClick={sendPost} className="preview__footer">
                <h2>Send Now</h2>
                <SendIcon fontSize="small" className="preview__sendIcon"/>
            </div>

        </div>
    )
}

export default Preview;
