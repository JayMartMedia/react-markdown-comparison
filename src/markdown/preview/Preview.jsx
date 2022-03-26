import React from 'react'
import styles from './Preview.module.css'

function Preview ({ text }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Preview</h1>
      <div>
        {text}
      </div>
    </div>
  )
}

export default Preview
