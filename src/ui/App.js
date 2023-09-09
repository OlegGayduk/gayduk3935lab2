import React, { useEffect, useState } from 'react'
import MainPage from "./components/MainPage"
import Code from './components/Code'

export default function App(props) {

    const [isCode, setCode] = useState(false)

    if(isCode){
        return <Code setCode={setCode}/>
    }
    
    return <MainPage 
        setCode={setCode}
    />
}
