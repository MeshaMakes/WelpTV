import { useRef, useEffect, useState } from 'react';

function SizeHook() {
    const ref = useRef();

    useEffect(() => {
        window.addEventListener("resize", () => {
            if(ref) {
                ref.current.style.width = window.innerWidth + "px";
                ref.current.style.height = window.innerHeight + "px";
            }
        });

        return () => {window.removeEventListener("resize", () => {})}
    }, [])

    useEffect(() => {
        if(ref) {
            ref.current.style.width = window.innerWidth + "px";
            ref.current.style.height = window.innerHeight + "px";
        }
    }, [ref])

    return { ref };
}

export default SizeHook;