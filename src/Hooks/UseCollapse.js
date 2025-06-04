import { useEffect, useState } from "react";

function UseCollapse(breakpoint = 768) {
    const [collapsed, setCollapsed] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setCollapsed(window.innerWidth <= breakpoint);
        };

        handleResize(); 

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return [collapsed, setCollapsed];
}

export default UseCollapse;
