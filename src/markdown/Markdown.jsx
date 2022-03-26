import React from 'react'
import Editor from './editor/Editor'
import Preview from './preview/Preview'
import styles from './Markdown.module.css'

function Markdown () {
  return (
    <div className={styles.container}>
      <div className={styles.editorContainer}>
        <Editor />
      </div>
      <div className={styles.previewContainer}>
        <Preview />
      </div>
    </div>
  )
}

export default Markdown
