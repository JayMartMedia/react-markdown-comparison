import React from 'react'
import styles from './Editor.module.css'

function Editor ({ setText, text }) {
  function handleChange (e) {
    console.log(e)
    setText(e.target.value)
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Editor</h1>
      <textarea
        className={styles.textarea}
        onChange={handleChange}
        value={text}
      />
    </div>
  )
}

export default Editor
