import styles from '../css/index.module.css'
import React, {useState} from 'react'

export default function Input(props) {

    const [placeholder, setPlaceholder] = useState(props.placeholder)

    const onFocus = () => {
    }

    return (
        <div className={styles.inputContainer}>
            <label>{props.label ? props.label : props.placeholder}</label>
            <input
                type={props.type}
                spellCheck={false}
                disabled={props.disabled}
                onChange={props.onChange}
                onFocus={onFocus}
                value={props.value}
                className={props.className}
                placeholder={placeholder}
                max={props.max}
            />
        </div>
    )
}