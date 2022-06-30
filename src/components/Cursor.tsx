import { useRef, useEffect } from "react";

const Cursor = () => {
  let cursorRef = useRef<any>();

  useEffect(() => {
    const CursorMove = (e: any) => {
      cursorRef.current.setAttribute(
        "style",
        `top:${e.clientY - 10}px; left:${e.clientX - 10}px;`
      );
    };

    const CursorClick = () => {
      cursorRef.current.classList.add("expand");
  
      setTimeout(() => {
        cursorRef.current.classList.remove("expand");
      }, 650);
    };

    const CursorHover = () => {
      cursorRef.current.classList.add("reduceCursor");
    };

    const CursorNotHover = () => {
      cursorRef.current.classList.remove("reduceCursor");
    };

    document.addEventListener("mousemove", CursorMove);
    document.addEventListener("click", CursorClick);

    let HoverElement = document.querySelectorAll(
      "a, button, .color-button, input, option, select, .hamburger-logo, .earth-container"
    );
    HoverElement.forEach((element) => {
      element.addEventListener("mouseenter", CursorHover);
    });

    HoverElement.forEach((element) => {
      element.addEventListener("mouseleave", CursorNotHover);
    });

    return () => {
      document.removeEventListener("mousemove", CursorMove);
      document.removeEventListener("click", CursorClick); 
      document.removeEventListener("mouseenter", CursorHover);
    };
  }, []);

  return <div ref={cursorRef} className="cursor"></div>;
};

export default Cursor;
