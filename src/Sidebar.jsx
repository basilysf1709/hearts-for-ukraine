import React from "react";
import styled from "styled-components";

const Sidemenu = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 999;
	background-color: #0057b7;
	display: grid;
	place-items: center;
	align-items: center;
	left: 0;
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
	transition: 0.4s ease-in-out;
`;

const SideBarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const SidebarMenu = styled.ul`
	display: grid;
	width: 60%;
	gap: 40px;
	grid-template-columns: 1fr;
	text-align: center;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(4, 50px);
	}
`;

const SidebarElement = styled.li`
	margin: 0 auto;
	width: 60%;
	font-weight: bold;
	display: flex;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #fff;
	cursor: pointer;
	border-radius: 10px;
	&:hover {
		color: black;
		background-color: white;
	}
`;

const Sidebar = ({ isOpen }) => {
	return (
		<Sidemenu isOpen={isOpen}>
			<SideBarContainer>
				<SidebarMenu>
					<SidebarElement>Contribute</SidebarElement>
					<SidebarElement>Resources</SidebarElement>
					<SidebarElement>About</SidebarElement>
					<SidebarElement>Contact Us</SidebarElement>
				</SidebarMenu>
			</SideBarContainer>
		</Sidemenu>
	);
};

export default Sidebar;
