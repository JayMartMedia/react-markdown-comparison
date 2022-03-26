import React, { useState } from 'react'
import Editor from './editor/Editor'
import Preview from './preview/Preview'
import styles from './Markdown.module.css'
import defaultText from './defaultText'

function Markdown () {
  const [text, setText] = useState(defaultText)
  return (
    <div className={styles.container}>
      <div className={styles.editorContainer}>
        <Editor
          setText={setText}
          text={text}
        />
      </div>
      <div className={styles.previewContainer}>
        <Preview
          text={text}
        />
      </div>
    </div>
  )
}

export default Markdown
