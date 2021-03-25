import {Table} from 'antd'
  

const History = ({history}) => {
	const columns = [
		{
			title: 'Opponent',
			dataIndex: 'opponent',
			key: 'opponent',
		},
		{
			title: 'Character',
			dataIndex: 'character',
			key: 'character',
		},
		{
			title: 'Opponent Character',
			dataIndex: 'opponentCharacter',
			key: 'opponentCharacter',
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
		}
	]

	return (
			<Table dataSource={history} columns={columns} />
	)
}

export default History
