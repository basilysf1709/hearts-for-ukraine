import { useState } from "react";
import "./App.css";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import People from "./People";
import Sidebar from "./Sidebar";
import Form from "./Form";
import Statement from "./Statement";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const MenuButton = styled(FiMenu)`
	z-index: 9999;
	position: absolute;
	color: white;
	top: 0;
	right: 0;
	transform: translate(-100%, 80%);
	font-size: 2rem;
	@media screen and (min-width: 790px) {
		display: none;
	}
`;

const CloseButton = styled(AiOutlineClose)`
	z-index: 9999;
	position: absolute;
	color: white;
	top: 0;
	right: 0;
	transform: translate(-100%, 80%);
	font-size: 2rem;
	@media screen and (min-width: 790px) {
		display: none;
	}
`;

const App = () => {
	const [isOpen, setOpen] = useState(false);
	const toggleSidebar = () => setOpen(!isOpen);
	return (
		<div>
			{isOpen ? (
				<CloseButton onClick={toggleSidebar} />
			) : (
				<MenuButton onClick={toggleSidebar} />
			)}
			<Sidebar isOpen={isOpen} />
			<Navbar isOpen={isOpen} />
			<div className="container">
				<Homepage />
				<People />
				<Form />
				<Statement />
			</div>
		</div>
	);
};

export default App;
