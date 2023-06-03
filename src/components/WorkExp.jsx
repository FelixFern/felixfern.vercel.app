import React, { useRef } from "react";
import BlurCircle from "./BlurCircle/BlurCircle";
import WorkExperienceList from "./WorkExperienceList/WorkExperienceList";
import { useScroll, useTransform, motion } from "framer-motion";

const work_exp = [
	{
		company: "TurnkeyID",
		position: "Frontend Engineer Intern",
		location: "Hybrid - Bandung, West Java",
		period: "Dec 2022 - Mar 2023 (3 Months)",
		desc: [
			"Consumed and integrated API to the front using RESTful API and GraphQL.",
			"Worked closely with a team of frontend developers, backend developers, and UX designer on developing products for TurnkeyID group.",
			"Handled the frontend on one of TurnkeyID group web application product using Next.js and built PWA out of the web application.",
			"Maintained, fixed, and improved the TurnkeyID group web application product on the frontend side.",
		],
	},
	{
		company: "Diceritain",
		position: "Software Engineer Intern",
		location: "Remote",
		period: "Aug 2022 - Dec 2022 (4 Months)",
		desc: [
			"Refactored Diceritain android mobile app frontend code for better user interface and user experience.",
			"Optimized Firebase data fetching on specific features in the Diceritain Android mobile app.",
			"Implemented automatic email-sending feature for completed payment using Firebase extension.",
			"Worked closely with the product team to improve and maintain Diceritain mobile android app.",
		],
	},
	{
		company: "Matematika ITB",
		position: "Wordpress Developer",
		location: "Hybrid - Bandung, West Java",
		period: "Jul 2022 - Mar 2023 (8 Months)",
		desc: [
			"Maintained Mathematics ITB website content using WordPress and Elementor.",
			"Developed and Designed websites for Mathematics ITB Combinatorics International Virtual Courses and 8th International Conference on Mathematics and Natural Sciences using Elementor, both website is used as the main sources of information for the events.",
		],
	},
];

const WorkExp = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});

	const translateX = useTransform(scrollYProgress, [0, 0.5], [-1000, 0]);

	return (
		<div ref={targetRef} className="w-screen h-fit relative">
			<motion.div style={{ translateX }} className="w-5/6 h-fit mx-auto ">
				<div className="w-8/12 h-screen mx-auto after:contents after:w-10 after:h-2 after:bg-white flex flex-col justify-center ">
					<h1 className="font-black text-4xl">
						Work <span className="text-accent">Experience.</span>
					</h1>
					<motion.div>
						<WorkExperienceList
							data={work_exp}
						></WorkExperienceList>
					</motion.div>
				</div>
			</motion.div>
			<BlurCircle classes={"h-[20vh] w-[20vh] bottom-[0%] left-[0%]"} />
			<BlurCircle classes={"h-[30vh] w-[30vh] top-[0%] right-[-10%]"} />
		</div>
	);
};

export default WorkExp;
