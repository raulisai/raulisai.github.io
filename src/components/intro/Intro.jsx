//style
import "./intro.scss";
//librery
import { init } from 'ityped'
import { useEffect, useRef } from "react";

//Data
import data from '../../dataPersonale.json' 
import { Button } from "@material-ui/core";

export default function Intro() {

    const textRef= useRef()

    useEffect(()=>{
        init(textRef.current, {
         showCursor: false, 
         backDelay:1500,
         showCursor:true,
         strings: ['Development!', 'Designer', 'DevOps' ] })
      },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/foto.png" alt="foto de developer" />
        </div>
      </div>
      <div className="right">
      <div  className="wrapper">
      <h2>Hi There, Im</h2>
      <h1>{data.NameResum}</h1>
      <h3>Freelancer <span ref={textRef}></span></h3>

      </div>
      <a href="#portafolio">
      <img src="assets/down.png" alt="flecha abajo" />
      </a>
      </div>
    </div>
  );
}
