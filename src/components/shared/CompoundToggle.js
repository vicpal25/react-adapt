import React, { Component } from 'react'
import {Switch} from './base/Switch';

export class CompoundToggle extends Component {

  state = {on: false}
 
  isControlled(prop) {
    return this.props[prop] !== undefined
  }
  getState() {
    return {
      on: this.isControlled('on') ? this.props.on : this.state.on,
    }
  }
  toggle = () => {
    if (this.isControlled('on')) {
      this.props.onToggle(!this.getState().on)
    } else {
      this.setState(
        ({on}) => ({on: !on}),
        () => {
          this.props.onToggle(this.getState().on)
        },
      )
    }
  }
  render() {
    return <Switch on={this.getState().on} onClick={this.toggle} />
  }
  
}

export default CompoundToggle
