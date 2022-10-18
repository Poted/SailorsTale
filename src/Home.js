import React, { Component, Button, useState }  from 'react';
import './Home.css';
import logo from './img/chtulhu.png';

function Home() {

        const [style, setStyle] = useState('style');

        const changeStyle = () => {
            setStyle("style2")

        }

        return(
            <div className='SailorsTale mt-5 justify-content-center'>
                <div>
                    <h3>
                        Take us higher!
                    </h3>
                    <h3>
                        Bring the fire!
                    </h3>
                    <h3>
                        Heave the long ropes!
                    </h3>
                    <h3>
                        Fire all guns!
                    </h3>
                    <h3>
                        Bring this monster..
                    </h3>
                    <h1>
                        To the depths of the sea.
                    </h1>

                    <a href='/gameIntro' onClick={ changeStyle }>
                        <img className={ style } src={logo}/>
                    </a>

                </div>
            </div>
        )
    }
export default Home;