import { Remarkable } from 'remarkable'

const md = new Remarkable()

function RemarkableView ({ text, id }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: md.render(text) }} />
  )
}

export default RemarkableView
