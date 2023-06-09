import React from "react";
import { motion } from "framer-motion";
import { works_item } from "../../utils/works_item";
import "./Works.scss";

import WorkContainer from "../WorkContainer/WorkContainer";
import BlurCircle from "../BlurCircle/BlurCircle.jsx";

const Works = () => {
	return (
		<div className="h-[50vh] w-fit relative">
			<div className="w-5/6 h-fit mx-auto">
				<motion.div
					className="title sticky mb-24 pt-12 left-0 top-0"
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
				>
					<h1 className="font-black text-4xl z-99">Works</h1>
					<motion.div
						initial={{ width: "0%" }}
						whileInView={{ width: "100px" }}
						transition={{
							delay: 0.2,
							ease: "anticipate",
						}}
						className="underline"
					></motion.div>
				</motion.div>
				<div>
					{works_item.map((work) => (
						<WorkContainer work={work}></WorkContainer>
					))}
				</div>
			</div>
			<BlurCircle
				classes={"h-[40vh] w-[40vh] top-[50%] left-[-10%] z-10"}
			/>
			<BlurCircle
				classes={"h-[50vh] w-[50vh] top-[0%] right-[-15%] z-10"}
			/>
			<BlurCircle
				classes={"h-[50vh] w-[50vh] top-[50%] right-[-15%] z-10"}
			/>
			<BlurCircle
				classes={"h-[40vh] w-[40vh] top-[80%] left-[-15%] z-10"}
			/>
		</div>
	);
};

export default Works;
