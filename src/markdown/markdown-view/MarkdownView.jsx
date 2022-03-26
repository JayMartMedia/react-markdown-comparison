import React from 'react'
import RemarkableView from './remarkable-view'
import styles from './MarkdownView.module.scss'

function MarkdownView ({ text }) {
  const selectedLibrary = 'remarkable'

  return (
    <div className={styles.markdownView}>
      {
        {
          remarkable: <RemarkableView text={text} />
        }[selectedLibrary] || 'Please select a library'
      }
    </div>
  )
}

export default MarkdownView
