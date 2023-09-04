import { Link } from "react-router-dom";
import { useState } from "react";

const Header = ({ cart }) => {
	//header will keep cart state out of ease
	return (
		<header>
			<h1 id="logo">
				{" "}
				<Link className="link" to="/">
					Mall Grab
				</Link>{" "}
			</h1>
			<ul className="categories">
				<li>
					<Link className="link" to="/mens">
						Men&apos;s
					</Link>
				</li>
				<li>
					<Link className="link" to="/womens">
						Women&apos;s
					</Link>
				</li>
				<li>
					<Link className="link" to="/jewelery">
						Jewelery
					</Link>
				</li>
				<li>
					<Link className="link" to="/electronics">
						Electronics
					</Link>
				</li>
			</ul>
			<Link id="cartLink" className="link" to="/cart">
				<div id="cartIcon">
					<div id="redCircle">
						<p> {cart.length} </p>
					</div>
					<img id="cartImg" src="../src/img/cart.png" alt="cart"/>
				</div>
			</Link>
		</header>
	);
};

export default Header;
