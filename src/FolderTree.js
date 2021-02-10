import React, { useState } from 'react';
import "./FolderTree.css"
import Modal from "./component/Modal";
import {useRecoilValue} from "recoil";
import {displayState} from "./atoms/atom"
import js from "./image/js.png"
import ts from "./image/typescript.png"
import py from "./image/python.png"
import css from "./image/css.png"
import folder from "./image/folder.png"

const FolderTree = ({ item }) => {
    const [array, setArray] = useState(item)
    const [open, setOpen] = useState(false)
    const [number, setNumber] = useState(0)
    const display=useRecoilValue(displayState)

    const Reverse = () => {
        setOpen(false)
    }

    const Add = (type, name) => {
        if (type == "file") {
            const filename = name.slice((name.lastIndexOf('.') - 1 >>> 0) + 2);
            setArray([...array, { name: name, id: number, type: "file", expand: filename }])
            setNumber(number + 1)
        } else {
            setArray([...array, { name: name, id: number, type: "folder", expand: "folder", children: [] }])
            setNumber(number + 1)
        }
    }

    const Remove = (id) => {
        setArray(prevState => {
            const newArray = prevState.filter(item => item.id !== id);
            return [...newArray]
        })
    }

    const Icon = (expand) => {
        if (expand == "js") {
            return <img src={js} height="20px"/>
        }else if (expand == "ts"){
            return <img src={ts} height="20px"/>
        } else if (expand == "py") {
            return <img src={py} height="20px"/>
        }else if (expand=="css"){
            return <img src={css} height="20px"/>
        }else if(expand=="folder"){
            return  <img src={folder} height="20px"/>
        }
    }

    return (
        <>
            <ul>
                {array.map(tree => (
                    <>
                        <li>{Icon(tree.expand)}{tree.name}
                        {display && <i class="fas fa-minus-circle" style={{ color: "blue", cursor: "pointer" }} onClick={() => Remove(tree.id)}></i>}
                        </li>
                        {tree.children && <FolderTree item={tree.children} />}
                    </>
                ))}
                {display &&<li><i class="fas fa-plus-circle" style={{ color: "red", cursor: "pointer" }} onClick={() => setOpen(true)}></i></li>}
            </ul>
            {open && <Modal Reverse={Reverse} Add={Add} />}
        </>
    )
}

export default FolderTree