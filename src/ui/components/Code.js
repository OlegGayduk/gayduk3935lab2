import React, { useEffect, useState } from 'react'
import styles from '../css/index.module.css'
import Navbar from '../elements/navbar.js';
import Button from '../elements/button';
import Input from '../elements/Input';
import Back from '../elements/Back';


export default function Code(props) {

    const [code, setCode] = useState('')
    const [isCodeList, setCodeList] = useState([])
    const [isCard, setCard] = useState([])

    const handle_change = (e)=>{
        setCode(e.target.value)
    }

    const renderCode = (codeArray)=>{

        let output = []
        for(let i in codeArray){
            output.push(
            
            <div key={i} className={styles.card} onClick={e=>{
                console.log(e.target.innerText)
                setCode(e.target.innerText)
            }}>
                {codeArray[i].code}
            </div>
            
            )
        }
        setCard(output)
    }

    const addCode = (code)=>{
        let codes = isCodeList

        codes.push({"code":code})
        setCodeList(codes)
        LocalStorage.SetItem("Codes", codes)

        renderCode(codes)

    }

    const deleteCode = (code)=>{

        let arr = []

        for(var i = 0; i < LocalStorage.GetItem("Codes").length; i++) {
            if(LocalStorage.GetItem("Codes")[i].code != code) {
                arr.push(LocalStorage.GetItem("Codes")[i])
            }
        }

        LocalStorage.SetItem("Codes", arr)

        renderCode(arr)
        
        /*arr = []

        for (var i = 5; i < document.getElementsByClassName(styles.content)[0].childNodes.length; i++) {
            if(document.getElementsByClassName(styles.content)[0].childNodes[i].innerHTML == code) {
                arr.push(document.getElementsByClassName(styles.content)[0].childNodes[i])
            }
        }

        for(var i = 0; i < arr.length;i++) {
            arr[i].remove()
        }*/

    }
    
    useEffect(()=>{
        let codeArray = LocalStorage.GetItem("Codes")
        if(codeArray === null || codeArray.lenght === 0){
            codeArray = []
            codeArray.push({
                "code": "alert('hello')"
            })

            LocalStorage.SetItem("Codes", codeArray)
        }
        setCodeList(codeArray)
        renderCode(codeArray)
    }, [])

    return (
        <div className={styles.main}>
            <Navbar />
            <Back onClick={()=>{props.setCode(false)}}/>
            <div className={styles.content}>

                <Input type="text" placeholder="code" className={styles.field} onChange={handle_change} value={code}/>
                <Button text="Execute" className={styles.full} onClick={()=>{
                    try{
                        eval(code)
                    }catch (e){
                        console.warn(e);
                    }
                }}/>
                <Button text="Clear" className={styles.full + " " + styles.red} onClick={()=>{
                    setCode('')
                }}/>
                <Button text="Add" className={styles.full} onClick={()=>{
                    addCode(code)

                }}/>

                <Button text="Delete" className={styles.full + " " + styles.red} onClick={()=>{
                    //TODO удалите введенный код из инпута
                    deleteCode(code)
                }}/>

                {isCard}
            </div>
        </div>
    )
}