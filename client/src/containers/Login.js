import React from 'react'
import { Form, Input, Button, Checkbox, Col, Row} from 'antd';


const Login = () => {
  const onFinish = (values) => {

	console.log(values);

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: JSON.stringify(values),
		redirect: 'follow'
	};
	
	fetch("/api/login", requestOptions)
	  .then(response => response.text())
	  .then(result => window.location.replace("/history"))
	  .catch(error => console.log('error', error));

  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
	<Row justify="space-around" align="middle" style={{height : '100vh'}}>
	<Col span={4}>
		<h1>Login</h1>
		<Form
		name="basic"
		initialValues={{ remember: true }}
		onFinish={onFinish}
		onFinishFailed={onFinishFailed}
		>
		<Form.Item
			label="Mail"
			name="mail"
			rules={[{ required: true, message: 'Please input your mail adress' }]}
		>
			<Input />
		</Form.Item>

		<Form.Item
			label="Password"
			name="password"
			rules={[{ required: true, message: 'Please input your password!' }]}
		>
			<Input.Password />
		</Form.Item>

		<Form.Item name="remember" valuePropName="checked">
			<Checkbox>Remember me</Checkbox>
		</Form.Item>

		<Form.Item>
			<Button type="primary" htmlType="submit">
			Submit
			</Button>
		</Form.Item>
		</Form>
	</Col>
  </Row>
  );
};

export default Login
