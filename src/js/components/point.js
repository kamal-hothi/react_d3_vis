import React, {Component} from 'react';
import BaseComponent from './base-component';

export default class extends BaseComponent{
  constructor(props){
    super(props);
    this.state = {
      highlighted: false
    }
  }
  render(){
    return <circle
              cx = { this.props.birth * 10 }
              cy = { 300 - this.props.death * 10 }
              onClick = {
                () => {
                  this.setState({
                    highlighted: !this.state.highlighted
                  });
                }
              }
              r = { 15 }
              style = {
                {
                  fill: this.state.highlighted ? 'red' : '#222',
                  opacity: 0.5,
                  transition: 'fill .5s'
                }
              }
            />;
  }
}
