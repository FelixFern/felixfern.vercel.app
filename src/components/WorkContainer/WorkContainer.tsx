import React, { useEffect, useRef } from "react";
import { TWorkItem } from "../../utils/works_item";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import "./WorkContainer.scss";
import { useScroll, useTransform } from "framer-motion";

const WorkContainer = ({ work }: { work: TWorkItem }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start end", "end start"],
	});
	const translateX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

	useEffect(() => {
		console.log(translateX);
	}, [translateX]);
	return (
		<div
			className="flex w-full h-screen items-center gap-4"
			ref={targetRef}
		>
			<div className="detail w-full h-screen flex items-center">
				<div className="w-5/12">
					<div className="flex gap-1 mb-1">
						<h1 className="font-black text-3xl">{work.title}</h1>
						{work.links !== "" ? (
							<a
								href={work.links}
								className="text-accent text-xl hover:opacity-75 transition-opacity"
							>
								<MdOpenInNew></MdOpenInNew>
							</a>
						) : (
							<></>
						)}
					</div>
					<div className="flex items-center gap-2">
						{work.stacks.map((stack) => {
							return (
								<div
									className={`py-[2px] px-2 font-regular border-[1px] rounded-md font-robotoMono border-accent text-accent w-fit text-xs`}
								>
									{stack}
								</div>
							);
						})}
					</div>
					<div className="my-6">
						<p>{work.desc}</p>
					</div>
					{work.repository !== "" ? (
						<a
							href={work.repository}
							className="flex gap-2 text-xl font-bold items-center text-accent hover:opacity-75 transition-opacity"
						>
							<AiFillGithub></AiFillGithub>
							<h2>Repository</h2>
						</a>
					) : (
						<></>
					)}
				</div>
			</div>
			<div className="flex-grow flex overflow-hidden absolute -z-10 gap-2 translate-x-[50%]">
				{work.image.map((image) => (
					<img src={image} key={image} className="w-1/2"></img>
				))}
			</div>
		</div>
	);
};

export default WorkContainer;
