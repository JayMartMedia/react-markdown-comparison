import React from 'react'
import MarkdownView from '../markdown-view'
import styles from './Preview.module.css'

function Preview ({ text }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Preview</h1>
      <MarkdownView
        text={text}
      />
    </div>
  )
}

export default Preview
