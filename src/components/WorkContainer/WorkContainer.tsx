import React, { useEffect, useRef } from "react";
import { TWorkItem } from "../../utils/works_item";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import "./WorkContainer.scss";
import { useScroll, useTransform } from "framer-motion";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const WorkContainer = ({ work }: { work: TWorkItem }) => {
	const targetRef = useRef(null);
	return (
		<div
			className="flex w-full h-[75vh] items-center gap-4"
			ref={targetRef}
		>
			<div className="detail w-full h-full flex items-center">
				<div className="w-5/12">
					<div className="flex gap-1 mb-1">
						<h1 className="font-black text-3xl">{work.title}</h1>
						{work.links !== "" ? (
							<a
								href={work.links}
								className="text-accent text-xl hover:opacity-75 transition-all hover:translate-y-[-0.1rem]"
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
			<ImageCarousel images={work.image}></ImageCarousel>
		</div>
	);
};

export default WorkContainer;
