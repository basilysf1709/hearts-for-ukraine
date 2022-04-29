import React, { useEffect, useState } from "react";
import ukraine from "./images/Lesser_Coat_of_Arms_of_Ukraine.svg.png";
import styled from "styled-components";

const NavbarDiv = styled.div`
	z-index: 99;
	position: sticky;
	top: 0;
	width: 100%;
	height: 80px;
	display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
	justify-content: center;
`;

const Navbar = ({ isOpen }) => {
	return (
		<NavbarDiv>
			<div className="navSection">
				<ul className="navElements">
					<li><a>Home</a></li>
					<li><a>People</a></li>
					<img src={ukraine} />
					<li>Form</li>
					<li>Statement</li>
				</ul>
			</div>
		</NavbarDiv>
	);
};

export default Navbar;
