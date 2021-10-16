import React from 'react'
import styles from './styles.module.css'

function MyButton({ body, color }) {

    return (
        <button className={`${styles.btn} ${color ? styles.primary : styles.secondary}`}  >{body}</button>
    )
}

export default MyButton
