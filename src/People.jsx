import React, { useState } from "react";
import PolinaKudrin from "./images/PolinaKudrin.jpg";
import person1 from "./images/person1.jpg";
import person2 from "./images/person2.PNG";
import person3 from "./images/person3.PNG";
import person4 from "./images/person4.PNG";
import person5 from "./images/person5.png";
import person6 from "./images/person6.png";

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import styled from "styled-components";

const ArrowRight = styled(AiOutlineArrowRight)`
	transition: all 0.2s ease-in-out;
	border-radius: 100%;
	width: 30px;
	height: 30px;
	&:hover {
		background-color: white;
		color: black;
	}
`;

const ArrowLeft = styled(AiOutlineArrowLeft)`
	transition: all 0.2s ease-in-out;
	border-radius: 100%;
	width: 30px;
	height: 30px;
	&:hover {
		background-color: white;
		color: black;
	}
`;

const peoples = [
	{
		name: "Polina Kudrin",
		image: PolinaKudrin,
		desc: "4th grader shot dead while trying to escape",
	},
	{
		name: "Naveen Shekharappa",
		image: person1,
		desc: "Medical student killed in ukraine amid criticism over evacuation",
	},
	{
		name: "Sofia Fedko",
		image: person2,
		desc: "A six yr old gets killed",
	},
	{
		name: "Oleg Fedko",
		image: person3,
		desc: "Oleg Fedko lost his wife, Irina, children – Sofia, six, and Ivan, six weeks",
	},
	{
		name: "Irina Fedko",
		image: person4,
		desc: "Irina Fedko dies with her family",
	},
	{
		name: "Oleg Fedko Sr",
		image: person5,
		desc: "Died near Nova Kakhovka on the outskirts of Kherson",
	},
	{
		name: "Anna Fedko",
		image: person6,
		desc: "Died with her husband",
	},
];

const People = () => {
	const [count, setCount] = useState(0);

	const changeCountPlus = () => {
		if(count == peoples.length - 1) setCount(0);
		else setCount(count + 1);
	}
	const changeCountMinus = () => {
		if(count == 0) setCount(peoples.length - 1);
		else setCount(count - 1);
	}

	return (
		<div className="people">
			<div className="peopleSection">
				<div>
					<h1>Fallen but never forgotten</h1>
				</div>
				<div className="person">
					<div className="pictureDiv">
						<ArrowLeft onClick={changeCountMinus} />
						<img className="personPic" src={peoples[count].image} />
						<ArrowRight onClick={changeCountPlus} />
					</div>
					<div className="personDiv">
						<p className="personName">{peoples[count].name}</p>
						<p className="personInfo">{peoples[count].desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default People;
