import React from "react"
import ReactDOM from "react-dom"

class ReactComment extends React.Component {
  componentDidMount() {
    let el = ReactDOM.findDOMNode(this)
    ReactDOM.unmountComponentAtNode(el)
    el.outerHTML = this.createComment()
  }

  createComment() {
    let text = this.props.text

    if (this.props.trim) {
      text = text.trim()
    }

    return `<!-- ${text} -->`
  }

  render() {
    return <div />
  }
}

export default ReactComment
