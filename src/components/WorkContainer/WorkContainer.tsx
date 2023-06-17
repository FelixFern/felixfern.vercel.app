import React, { useEffect, useRef } from "react";
import { TWorkItem } from "../../const/works_item";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import "./WorkContainer.scss";
import { useScroll, useTransform } from "framer-motion";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { useState } from "react";
import BlurCircle from "../BlurCircle/BlurCircle";

const WorkContainer = ({ work }: { work: TWorkItem }) => {
	const targetRef = useRef(null);
	const [randomSize, setRandomSize] = useState(0)
	const [randomPositionX, setRandomPositionX] = useState(0)
	const [randomPositionY, setRandomPositionY] = useState(0)

	useEffect(() => {
		const sizeInterval = [10, 25]
		const posInterval = 100
		setRandomSize(Math.floor(Math.random() * sizeInterval[1] / 2 + sizeInterval[0]))
		setRandomPositionX(Math.floor(Math.random() * 2 * posInterval - posInterval))
		setRandomPositionY(Math.floor(Math.random() * 2 * posInterval - posInterval))
	}, [])

	return (
		<div
			className="flex h-[60vh] items-center gap-4 overflow-hidden w-screen relative"
			ref={targetRef}
		>
			<div className="detail w-full h-full flex items-center">
				<div className="w-11/12">
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
			<BlurCircle
				classes={`h-[${randomSize.toString()}vh] w-[${randomSize.toString()}vh] top-[${randomPositionY.toString()}%] right-[${randomPositionX.toString()}%] z-10`}
			/>
		</div>
	);
};

export default WorkContainer;
