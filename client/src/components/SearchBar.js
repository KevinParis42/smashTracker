import { Input, Select } from 'antd';

const { Option } = Select;

const selectBefore = (
	<Select defaultValue="opponent" className="select-before" style={{minWidth: '200px'}}>
	  <Option value="opponent">Joueur</Option>
	  <Option value="character">Personnage</Option>
	  <Option value="opponentCharacter">Personnage adverse</Option>
	</Select>
  );

  const SearchBar = () => {
	  return (
		<div style={{ marginBottom: 16 }}>
			<Input.Search addonBefore={selectBefore} defaultValue="Recherche" />
	  	</div>
	  )
  }

export default SearchBar
