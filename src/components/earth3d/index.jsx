import React,{Component} from 'react';
import Echarts from 'echarts';
import 'echarts-gl';
import {option} from './data'


class Earth3d extends Component {
	componentDidMount(){
		let myChart = Echarts.init(document.getElementById('main'))
		
		myChart.setOption(option);
	}
	render(){
		return (
			<div className = {'container home'} id = {'main'}>
				
			</div>
		)
	}
}

export default Earth3d;