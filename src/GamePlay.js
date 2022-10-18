import './GamePlay.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import gif from './img/ship.gif';
import { Button } from 'react-bootstrap';


function GamePlay() {

    const isMounted = useRef(false)

    useEffect(() => {
      isMounted.current = true;
      return () => { isMounted.current = false }
    }, []);

    const [fade, setFade] = useState('fadeToBlack');

    let fadeIn = () => {
        setFade("fadeFromBlack")
        console.log("hello");

    }

    useEffect(() => {
        if(isMounted.current) {
            setTimeout(() => {
                return fadeIn();
            }, 4000)
        }
    })
    


        return (
            <div>
                <div className={ fade }></div>
                
                <ReactPlayer className="player" playing url='https://www.youtube.com/watch?v=qGyPuey-1Jw' height="0px"/>
            
                <div className='GamePlay'>
                    <h1>
                        Ayee, You BASTARD!
                        <Button > Click! </Button>
                    </h1>
                
                    <img src={gif}/>
                
                
                </div>
            
            </div>
        )
    }

    export default GamePlay;