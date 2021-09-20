import React from "react";
import { rectangleType } from "./App";

interface CanvasPropsType {
  rectangles: rectangleType[];
  pushRectangles: (newRect: rectangleType) => void;
}

export const Canvas: React.FC<CanvasPropsType> = ({
  rectangles,
  pushRectangles,
}: CanvasPropsType): React.ReactElement => {
  const XDown = React.useRef<number>(0);
  const YDown = React.useRef<number>(0);

  const mouseDownHandler = (e: React.MouseEvent) => {
    XDown.current = e.clientX;
    YDown.current = e.clientY;
  };

  const mouseUpHandler = (e: React.MouseEvent) => {
    const xStart = e.clientX - XDown.current < 0 ? e.clientX : XDown.current;
    const yStart = e.clientY - YDown.current < 0 ? e.clientY : YDown.current;

    const width = Math.abs(e.clientX - XDown.current);
    const height = Math.abs(e.clientY - YDown.current);

    if (width < 5 || height < 5) {
      return;
    }

    const randomColor = `rgb(
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)}
    )`;

    const newRect = {
      xStart,
      yStart,
      width,
      height,
      color: randomColor,
    };
    pushRectangles(newRect);
  };

  return (
    <div
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      className="canvas"
    >
      {rectangles.map((item) => (
        <div
          key={item.color + rectangles.length}
          style={{
            position: "absolute",
            top: `${item.yStart}px`,
            left: `${item.xStart}px`,
            width: `${item.width}px`,
            height: `${item.height}px`,
            backgroundColor: `${item.color}`,
            borderRadius: "5px",
          }}
        ></div>
      ))}
    </div>
  );
};
