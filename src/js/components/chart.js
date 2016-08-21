import React, {Component} from 'react';
import BaseComponent from './base-component';
import birthdeathrates from '../store/birthplaces.js';

export default class extends BaseComponent{
  constructor(props){
    super(props)

    this.state = {
      metric: 'birth',
    };
  }

  render(){
    const metric = this.state.metric;
    const data = this.props.data.sort((a,b) => b[metric] - a[metric])
          .map((d, i) => ({...d, rank: i}))
          .sort((a, b) => b.country > a.country);

      return <div className='chart'>
        {[
          <span className='label'>Birth rate</span>,
          <Switch metric={metric} updateMetric={ (d) => this.setState({metric: d})} />,
          <span className='label'>Death rate</span>,
            <div>
              { data.map(d =>
                <Bar country={d.country} key={d.country} value={d[metric]} rank={d.rank} />
              )}
            </div>
        ]}
      </div>;
  }
}


function Switch({metric, updateMetric}) {
  return <div className = "switch__track"
            onClick = {() => updateMetric(metric === 'birth' ? 'death' : 'birth')}>
            <div className = { 'switch__thumb ' + metric} />
          </div>
};


function Bar({country, value, rank}) {
  return (<div className = 'bar'
    style={{position: 'absolute',
    top: 30 + 20 * rank,
    transition: 'top .5s'}} >
    <div className='bar__label'>{country}</div>
    <div className='bar__mark'
      style={{width: 9 * value}}/>
    </div>);
};
