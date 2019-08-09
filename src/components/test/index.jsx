import React,{Component} from 'react';

// import Echarts from 'echarts'
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'
import './css/index.scss'

class Test extends Component {
	componentDidMount(){
		// let myChart = Echarts.init(document.getElementById('main'))
		
		// myChart.setOption(option);
	}
	render(){
		return (
			<div className = {'container'} id={'main'}>
			
				<Map center={{lng: 113.94947, lat: 22.537382}} zoom="18">
				    <Marker position={{lng: 113.94947, lat:22.537382}} />
				    <NavigationControl /> 
				    <InfoWindow position={{lng: 113.94947, lat: 22.537382}} text="区块大陆" title="李忠豫"/>
				</Map>
			</div>
		)
	}
}

export default Test;