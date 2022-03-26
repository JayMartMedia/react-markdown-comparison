// lightweight markup rendering library: https://github.com/jonschlinkert/remarkable
// yarn add remarkable
import { Remarkable } from 'remarkable'
// highlight.js is recommended by Remarkable documentation: https://github.com/highlightjs/highlight.js
// yarn add highlight.js
import hljs from 'highlight.js'
// Import styling globally, classnames start with 'hljs', so shouldn't conflict with your classses
// Demo of styles: https://highlightjs.org/static/demo/
// List/src of css files: https://github.com/highlightjs/highlight.js/tree/main/src/styles
import 'highlight.js/styles/vs2015.css'

// Custom styles:
// - adding background to pre since I wasn't able to figure out how
//   to set class with md.renderer.rules
// - adding style to prevent image overflow
// - adding style for bar on left side of blockquote
import styles from './RemarkableView.module.scss'

// Create and configure instance of Remarkable, pass in function to highlight
// with hljs
const md = new Remarkable('full', {
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (err) {}
    }

    return '' // use external default escaping
  }
})

// Replace all code blocks with a code block with 'hljs' class applied
md.renderer.rules.code = function (tokens, idx, _options, _env) {
  return `<code class='hljs'>${tokens[idx].content}</code>`
}

/**
 Tried to get this working like the code block, but this removes all elements inside pre
 and returns only text content
*/
// md.renderer.rules.fence = function (tokens, idx, _options, _env) {
//   console.log(tokens)
//   // return `<pre class='hljs'>${tokens[idx].content}</pre>`
// }

function RemarkableView ({ text }) {
  return (
    <div
      className={styles.container}
      // md.render returns regular html elements (but seems to sanitize the userinput)
      // have to set with dangerouslySetInnerHTML, is there another way?
      dangerouslySetInnerHTML={{ __html: md.render(text) }}
    />
  )
}

export default RemarkableView
