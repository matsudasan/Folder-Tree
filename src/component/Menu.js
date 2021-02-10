import React, { useState } from 'react';
import "./Menu.css"
import { useRecoilState } from "recoil";
import {displayState} from "../atoms/atom"

const Menu=({ClickExport})=>{
    const [display,setDisplay]=useRecoilState(displayState)
    const ChangeDisplay=()=>{
        setDisplay(!display)
    }
    return(
        <div className="menu">
            <button onClick={ChangeDisplay}>{display ? "表示を消す" : "表示を戻す"}</button>
            <button onClick={()=>ClickExport()}>PNG出力</button>
        </div>
    )
}

export default Menu