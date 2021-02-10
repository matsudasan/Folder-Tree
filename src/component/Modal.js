import React, { useState } from 'react';
import "./Modal.css"

const Modal = ({ Reverse, Add }) => {
    const [type, setType] = useState("file")
    const [name, setName] = useState("")
    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(false)

    const handliClick = (e) => {
        e.stopPropagation();
    }

    const Changetype = (s) => {
        if (s == "ファイル") {
            setType("file")
            setButton1(true)
            setButton2(false)
        } else {
            setType("folder")
            setButton1(false)
            setButton2(true)
        }
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const Decision = () => {
        if (type == "" || name == "") {
            alert("ファイル名または種類が空白です")
        }
        else {
            Add(type, name)
            Reverse()
        }
    }
    return (
        <div className="modal" onClick={Reverse}>
            <div className="option" onClick={handliClick}>
                <div className="type">
                    <h1>種類</h1>
                    <button onClick={() => Changetype("ファイル")} style={{ backgroundColor: button1 ? "#87ceeb" : "" }}>ファイル</button>
                    <button onClick={() => Changetype("フォルダ")} style={{ backgroundColor: button2 ? "#87ceeb" : "" }}>フォルダー</button>
                </div>
                <div className="name">
                    <h1>{button1 ? "ファイルの名前" : "フォルダの名前"}</h1>
                    <input type="text" value={name} onChange={handleChange} onKeyDown={(e)=>{if(e.keyCode==13){Decision()}}}/>
                </div>
                <button className="decision" onClick={Decision} >決定</button>
            </div>
        </div>
    )
}

export default Modal