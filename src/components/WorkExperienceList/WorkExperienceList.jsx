import React, { useState } from "react";
import { motion } from "framer-motion";

const WorkExperienceList = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="w-11/12 mx-auto flex gap-4 mt-6">
            <div className="flex flex-col gap-3 h-fit border-l-[1px] border-white py-1 justify-center w-2/12">
                {data.map((work, idx) => (
                    <div className="relative px-4">
                        <h2
                            className={`${
                                currentIndex === idx
                                    ? "font-black text-accent"
                                    : ""
                            } cursor-pointer transition-colors duration-200`}
                            onClick={() => {
                                setCurrentIndex(idx);
                            }}
                        >
                            {work.company}
                        </h2>
                        {idx === currentIndex ? (
                            <motion.div
                                className="absolute left-[-2.5px] top-[0.125rem] h-5 w-1 bg-accent"
                                layoutId="indicator"
                            />
                        ) : null}
                    </div>
                ))}
            </div>
            <div className="w-10/12">
                <h2 className="font-black">
                    {data[currentIndex].position}{" "}
                    <span className="text-accent font-bold">
                        @{data[currentIndex].company}
                    </span>
                </h2>
                <h3 className="text-sm">
                    {data[currentIndex].location} |{" "}
                    <span className="font-bold">
                        {data[currentIndex].period}
                    </span>
                </h3>
                <ul className="list-disc text-sm mt-3 ml-5">
                    {data[currentIndex].desc.map((desc) => (
                        <li>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WorkExperienceList;
