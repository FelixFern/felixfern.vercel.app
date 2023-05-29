import React from "react";
import BlurCircle from "./BlurCircle/BlurCircle";

const WorkExp = () => {
    return (
        <div className="w-screen h-screen relative">
            <div className="w-5/6 h-screen mx-auto">
                <h1 className="font-black text-4xl">
                    Work <span className="text-accent">Experience.</span>
                </h1>
            </div>

            <BlurCircle classes={"h-[60vh] w-[60vh] top-[50%] left-[-10%]"} />
            <BlurCircle classes={"h-[30vh] w-[30vh] top-[0%] right-[-15%]"} />
            <div></div>
        </div>
    );
};

export default WorkExp;
