import React from 'react';
import BaseComponent from './base-component';
import birthdeathrates from '../store/birthplaces.js'
import Point from './point.js';
import Chart from './chart.js';


export default class extends BaseComponent{
  constructor(props){
    super(props);
  }

  render(){
    return (
        // <svg height={800} width={800}>
        //         {birthdeathrates.map( d =>
        //             <Point
        //               birth={d.birth} death={d.death}
        //               key = {d.country} />)}
        //   </svg>

        <Chart data={birthdeathrates} />
    )
  }
}
