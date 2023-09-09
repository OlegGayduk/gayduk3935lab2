import React from 'react'
import styles from '../css/index.module.css'


export default function Back(props) {

    return (
        <div 
        className={styles.Back} 
        onClick={(props.onClick ? props.onClick : ()=>{}) }>
             {"< Back"}
        </div>
    )
}