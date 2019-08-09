import React,{Component} from 'react';
import './css/index.css'
import Echarts from 'echarts';
import 'echarts-gl';
import {option} from './data'

class Home extends Component {
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

export default Home;