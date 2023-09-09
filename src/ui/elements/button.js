import React from 'react'
import styles from '../css/index.module.css'


export default function Button(props) {

    return (
        <div 
        className={styles.btn + (props.className ? " " + props.className : "")} 
        onClick={(props.onClick ? props.onClick : ()=>{}) }>
            {props.text}
        </div>
    )
}