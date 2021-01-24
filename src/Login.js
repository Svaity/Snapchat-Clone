import React from 'react'
import './Login.css'
import {Button} from "@material-ui/core"
import { auth, provider } from './firebase';
import {login} from "./features/appSlice"
import {useDispatch} from 'react-redux'

function Login() {

    const dispatch = useDispatch();

    const signIn = () =>{
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
            dispatch(login({
                username: result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
            }))
        }).catch(error=>alert(error.message))
    }

    return (
        
        <div className="login">
            <div className="login__container">
                <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
                <Button variant="outlined" onClick={signIn}>Sign in</Button>
            </div>
        </div>
    )
}

export default Login
