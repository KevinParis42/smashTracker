import {Table} from 'antd'
  

const History = ({history}) => {
	const columns = [
		{
			title: "Character",
			dataIndex: "url1",  // this is the value that is parsed from the DB / server side
			render: theImageURL => <img alt={theImageURL} src={theImageURL} style={{width: '100px', height: '100px'}}/>,  // 'theImageURL' is the variable you must declare in order the render the URL
			key: 'character'
		},
		{
			title: 'Opponent',
			dataIndex: 'opponent',
			key: 'opponent',
		},
		{
			title: "Opponent Character",
			dataIndex: "url2",  // this is the value that is parsed from the DB / server side
			render: theImageURL => <img alt={theImageURL} src={theImageURL} style={{width: '100px', height: '100px'}} />,  // 'theImageURL' is the variable you must declare in order the render the URL
			key: 'oppoCharacter'
		},
		{
			title: 'Winner',
			dataIndex: 'winner',
			key: 'winner',
		},
		{
			title: 'StockDiff',
			dataIndex: 'stockDiff',
			key: 'stockDiff',
		},
		{
			title: 'Date',
			dataIndex: 'createdAt',
			render: date => {
				const parsed = new Date(date)
				return (<p>{parsed.toLocaleDateString()}</p>)
			},
			key: 'date'
		}
	]

	return (
			<Table dataSource={history} columns={columns} />
	)
}

export default History
