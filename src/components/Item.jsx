import { useLocation } from 'react-router-dom';

const Item = () => {
    const location = useLocation();
    const item = location.state;
    if (!item) return <h1> fetch item again with id here if manually typed in </h1>
	return (
		<div className="item">
			<h2> Item page</h2>
            <h3> item = {item.description}</h3>
            <img src={item.image} alt={item.description}/>
		</div>
	);
};

export default Item;
