import React from 'react'
import RemarkableView from './remarkable-view'

function MarkdownView ({ text }) {
  const selectedLibrary = 'remarkable'

  return (
    <div>
      {
        {
          remarkable: <RemarkableView text={text} />
        }[selectedLibrary] || 'Please select a library'
      }
    </div>
  )
}

export default MarkdownView
