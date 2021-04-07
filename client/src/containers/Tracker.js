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
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Accept", "application/json");
		myHeaders.append("Cookie", "token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJwc2V1ZG8iOiJKYXVuZWQiLCJtYWlsIjoia2luamk3MDFAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpZCI6MSwiaWF0IjoxNjE3ODA0NjI3LCJleHAiOjE2MTc4MDgyMjd9.gnxpsQn3aXjVEElmFYEPXXXQWg3_Wz3d5LWV_vNCgMYDZHPd0cCaZo_z5DwU0lrodmUaSKKZuXVmlthWzhrWyw");
		
		var requestOptions = {
		  method: 'GET',
		  headers: myHeaders,
		  redirect: 'follow'
		};
		
		fetch("192.168.0.17:4000/match", requestOptions)
		  .then(response => response.text())
		  .then(result => console.log(result))
		  .catch(error => console.log('error', error));
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
