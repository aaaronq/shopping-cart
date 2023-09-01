import { useNavigate } from 'react-router-dom';

const Card = ({item}) => {
	const navigate = useNavigate();

	function handleClick() {
		console.log(item);
	}

	return (
		<div 
		style={{backgroundImage: `url(${item.image})`}}
		className="card"
		onClick={() => navigate(`./${item.id}`, { state: item})}
		/>
	);
};

export default Card;
