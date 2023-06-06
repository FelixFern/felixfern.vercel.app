import React from "react";
import { TWorkItem } from "../../utils/works_item";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import "./WorkContainer.scss";

const WorkContainer = ({ work }: { work: TWorkItem }) => {
	return (
		<div className="flex w-full h-screen items-center">
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
			<div className="flex-grow"></div>
		</div>
	);
};

export default WorkContainer;
