import React, { useRef } from "react";
import BlurCircle from "./BlurCircle/BlurCircle";
import WorkExperienceList from "./WorkExperienceList/WorkExperienceList";
import { useScroll, useTransform, motion } from "framer-motion";
import { work_exp } from "../utils/work_exp";

const WorkExp = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

	return (
		<motion.div
			ref={targetRef}
			style={{ scale }}
			className="w-screen h-screen relative"
		>
			<div className="w-5/6 h-screen mx-auto">
				<div className="w-8/12 h-screen mx-auto flex flex-col justify-center ">
					<div className="flex gap-4 justify-center items-center">
						<h1 className="font-black text-4xl">
							Work{" "}
							<span className="text-accent">Experience.</span>
						</h1>
						<motion.div className="flex-grow">
							<motion.div
								initial={{ width: 0 }}
								whileInView={{ width: "100%" }}
								transition={{
									duration: 0.2,
									ease: "easeIn",
								}}
								className="h-1 bg-white"
							></motion.div>
						</motion.div>
					</div>
					<WorkExperienceList data={work_exp}></WorkExperienceList>
				</div>
			</div>
			<BlurCircle classes={"h-[20vh] w-[20vh] bottom-[0%] left-[0%]"} />
			<BlurCircle classes={"h-[30vh] w-[30vh] top-[0%] right-[-10%]"} />
		</motion.div>
	);
};

export default WorkExp;
