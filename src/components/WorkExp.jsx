import React from "react";
import BlurCircle from "./BlurCircle/BlurCircle";
import WorkExperienceList from "./WorkExperienceList/WorkExperienceList";

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
    return (
        <div className="w-screen h-screen relative">
            <div className="w-5/6 h-screen mx-auto">
                <div className="w-8/12 h-screen mx-auto">
                    <h1 className="font-black text-4xl">
                        Work <span className="text-accent">Experience.</span>
                    </h1>
                    <WorkExperienceList data={work_exp}></WorkExperienceList>
                </div>
            </div>
            <BlurCircle classes={"h-[60vh] w-[60vh] top-[50%] left-[-10%]"} />
            <BlurCircle classes={"h-[30vh] w-[30vh] top-[0%] right-[-15%]"} />
        </div>
    );
};

export default WorkExp;
