import React, { useEffect, useState } from 'react'
import styles from '../css/index.module.css'
import Navbar from '../elements/navbar.js';
import Button from '../elements/button';
import { LocalStorage } from '../Utils';



export default function MainPage(props) {


    return (
        <div className={styles.main}>
            <Navbar />
            
            <div className={styles.content}>
                <Button text="Code" className={styles.full} onClick={()=>{props.setCode(true)}}/>
            </div>
        </div>
    )
}