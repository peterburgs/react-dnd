import { RefObject, useEffect, useState } from "react";

export const useMousePosition = (ref: RefObject<HTMLDivElement>) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        return;
      }

      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, [ref]);

  return { coords };
};
