import './GameIntro.css';
import React, { Component, useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Home from './Home';
import { useNavigate } from 'react-router-dom';


function GameIntro() {

    let navigate = useNavigate();
    
    let end = () => {
        setTimeout(() => {
            navigate('/game'); 
        }, 39000);
    }

        return (
            <div>
                <ReactPlayer playing url='https://www.youtube.com/watch?v=o9IsWErMNbQ' onStart={end}/>
            </div>
        )
    }

    export default GameIntro;

    //#region usefull not used code    

    // const isMounted = useRef(false)

    // useEffect(() => {
    //   isMounted.current = true;
    //   return () => { isMounted.current = false }
    // }, []);
    
    // componentDidMount() {
    //     setTimeout(() => {
    //         const navigate = useNavigate();
    //         navigate('/');
    //     }, 5000) // render for 5 seconds and then push to home 
    //   }
            
    // useEffect(() => {
    //     if(isMounted.current) {
    //         setTimeout(() => {
    //             navigate('/');
    //         }, 46000)
    //     }
    // })
    // const [introStyle, setStyle] = useState('gameIntro');

    // const changeStyle = () => {
    //     setStyle("gameIntro2")
    // }

    //#endregion