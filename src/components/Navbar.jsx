import React, { useEffect, useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
    const [yOffset, setYOffset] = useState(0);

    const handleScroll = () => setYOffset(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-1/2 translate-x-[-50%] z-50 ${
                yOffset > 0 ? "scrolled" : ""
            }`}
        >
            <ul className="text-textmain font-black flex gap-12 mt-10">
                <li className="links">
                    <a href="">
                        works<span className="text-accent">.</span>
                    </a>
                </li>
                <li className="links">
                    <a href="">
                        contact<span className="text-accent">.</span>
                    </a>
                </li>
                <li className="links">
                    <a href="">
                        about<span className="text-accent">.</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
