import React, {useEffect, useCallback} from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectSelectedImage } from './features/appSlice';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './ChatView.css'


function ChatView() {
    const selectedImage = useSelector(selectSelectedImage)
    const history = useHistory()

    const exit = useCallback(() => {
        history.push("/chats");
    }, [history]);

    useEffect(() => {
        
        if (!selectedImage){
            exit();
        }
        
    }, [selectedImage, exit])



    return (
        <div className="chatView">
            <img src={selectedImage} onClick={exit} alt="" />
            <div className="chatView__timer">
            <CountdownCircleTimer
                        isPlaying
                        duration={10}
                        strokeWidth={6}
                        size={40}
                        colors={[
                            ['#004777', 0.33],
                            ['#F7B801', 0.33],
                            ['#A30000', 0.33],
                        ]}
                    >
                        {({ remainingTime }) => {
                            if (remainingTime === 0) {
                                exit();
                            }
                            return remainingTime;
                        }}
                    </CountdownCircleTimer>
            </div>
             
            <h1>SelectedImgPage</h1>
        </div>
    )
}

export default ChatView
