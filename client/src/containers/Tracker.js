import React from 'react'
import History from './History'

import { Col, Layout, Row } from 'antd'
import { AimOutlined } from '@ant-design/icons'
import SearchBar from '../components/SearchBar'
const { Header, Footer, Content } = Layout

class Tracker extends React.Component {
	constructor(props) {
		super(props)

		this.state= {history: []}
	}

	getHistory() {
		fetch("http://192.168.0.17/match", {
			method: 'GET',
			redirect: 'follow',
			credentials: 'include'
		  })
		  .then(response => response.json())
		  .then(result => {
			  this.setState({history: result})
			  console.log(result)
		  })
		  .catch(error => console.log('error', error))
	}

	componentDidMount() {
		this.getHistory()
	}

	render() {
		return (
		<Layout>
			<Header>
				<div>
					<h1 style={{color: "white"}}>Smash Tracker <AimOutlined /></h1>
				</div>
			</Header>
			<Layout>
				<Content style={{height:"85vh",textAlign: 'left', margin: '1vh'}}>
					<Row>
						<Col offset={1} span={22}><h2>History</h2></Col>
					</Row>
					<Row>
						<Col offset={1} span={22}><SearchBar/></Col>
					</Row>
					<Row>
						<Col offset={1} span={22}><History history={this.state.history} characters={this.state.characters} /></Col>
					</Row>
				</Content>
			</Layout>
			<Footer>Footer</Footer>
		</Layout>
		)
	}
}

export default Tracker
