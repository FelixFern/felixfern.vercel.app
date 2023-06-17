import React from "react";
import { motion } from "framer-motion";
import { works_item } from "../../const/works_item";
import "./Works.scss";

import WorkContainer from "../WorkContainer/WorkContainer";

const Works = () => {
	return (
		<div className="h-fit w-fit relative">
			<div className="w-5/6 h-fit mx-auto">
				<motion.div
					className="title sticky pt-12 left-0 top-0 z-20"
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
		</div>
	);
};

export default Works;
