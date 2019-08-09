import React,{Component} from 'react';

import Echarts from 'echarts'
import {option} from './data'

class Bar extends Component {
	componentDidMount(){
		let myChart = Echarts.init(document.getElementById('main'))
		
		myChart.setOption(option);
	}
	render(){
		return (
			<div className = {'container'} id={'main'}>
				
			</div>
		)
	}
}

export default Bar;