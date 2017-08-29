import React, { Component } from 'react'
import stylesheet from 'styles/index.scss'

export default class Index extends Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <h1>Index's Page</h1>
      </div>
    )
  }
}