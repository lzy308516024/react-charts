import React,{Component} from 'react';
import {
      
      Route,
      NavLink,
      Switch
}  from 'react-router-dom'

import Home from '../home/index'
import Line from '../line/index'
import Bar from '../bar/index'
import Pie from '../pie/index'
import Lay3d from '../lay3d/index'
import Earth3d from '../earth3d/index'
import Test from '../test/index'
import Not404 from '../not404/index'

class Layout extends Component {
	 

	render(){
		return (
			<div className = {'router'}>
	            <div className={'menu'}>
	                <div className={'logo'}>
	                  <img width={'100%'} height={'100%'} src={require('../../static/images/logo.jpg')} alt=""/>
	                </div>
	                <div className = {'side_nav'}>
	                    <ul>
	                      <li><NavLink activeClassName={'active'} exact to="/">首页</NavLink> </li>
	                      <li><NavLink activeClassName={'active'}  to="/line">折线图</NavLink> </li>
	                      <li><NavLink activeClassName={'active'}  to="/bar">柱状图</NavLink> </li>
	                      <li><NavLink activeClassName={'active'}  to="/pie">饼状图</NavLink> </li>
	                      <li><NavLink activeClassName={'active'}  to="/lay3d">3d月球</NavLink> </li>
	                      <li><NavLink activeClassName={'active'}  to="/earth3d">3d地球</NavLink> </li>
	                      <li><NavLink activeClassName={'active'}  to="/test">城市定位</NavLink> </li>
	                    </ul>
	                </div>
	             </div>
	             <div className = {'content'}>
	                <div className = {'con_top_nav'}>
	                  <ul>
	                    <li><a href="/" className = {'active'}>李忠豫</a></li>
	                    <li><a href="/">曹操</a></li>
	                    <li><a href="/">刘备</a></li>
	                    <li><a href="/">刘邦</a></li>
	                  </ul>
	                </div>
	                <div className = {'show_con'}>
	                  <Switch>
	                    <Route exact path={'/'} component = {Home}/>
	                    <Route path={'/line'} component = {Line}/>
	                    <Route path={'/bar'} component = {Bar}/>
	                    <Route path={'/pie'} component = {Pie}/>
	                    <Route path={'/lay3d'} component = {Lay3d}/>
	                    <Route path={'/earth3d'} component = {Earth3d}/>
	                    <Route path={'/test'} component = {Test}/>
	                    <Route path={'*'} component = {Not404}/>
	                  </Switch>
	                  
	                  <div id={'main'} className = {'container'}></div>
	                </div>
	             </div>
          	</div>
		)
	}
}

export default Layout;