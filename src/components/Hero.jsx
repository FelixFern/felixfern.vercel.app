import React from "react";
import BlurCircle from "./BlurCircle/BlurCircle.jsx";
import Button from "./Button/Button.jsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
    const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    return (
        <motion.div
            ref={targetRef}
            style={{ opacity }}
            className="h-screen w-screen flex flex-col items-center justify-center gap-4 overflow-hidden relative scroll-smooth"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{ scale, translateY }}
            >
                <p className="font-black text-xs flex gap-2 items-center">
                    <span className="px-1.5 py-0.5 bg-white text-main">
                        HELLO.
                    </span>{" "}
                    my name is
                </p>
                <div className="text-center">
                    <h1 className="font-black text-5xl">Felix Fernando</h1>
                    <h2 className="font-medium tracking-widest">
                        Frontend Developer
                    </h2>
                </div>
            </motion.div>
            <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeIn" }}
                href="/"
                style={{ scale, translateY }}
            >
                <Button title="resume." />
            </motion.a>
            <BlurCircle classes={"h-[120vh] w-[120vh] bottom-[-100vh] "} />
            <BlurCircle classes={"h-[80vh] w-[80vh] left-[-55vh] "} />
            <BlurCircle
                classes={"h-[70vh] w-[70vh] right-[-30vh] top-[-30vh]"}
            />
        </motion.div>
    );
};

export default Hero;
