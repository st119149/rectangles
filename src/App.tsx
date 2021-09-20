import React from "react";
import "./App.scss";

import { Canvas } from "./Canvas";
import { ControlPanel } from "./ControlPanel";

export interface rectangleType {
  xStart: number;
  yStart: number;
  width: number;
  height: number;
  color: string;
}

export const App: React.FC = () => {
  const [rectangles, setRectangles] = React.useState<rectangleType[]>([]);

  const pushRectangles = (newRect: rectangleType): void => {
    setRectangles((prev) => [...prev, newRect]);
  };

  const deleteRectangle = (index: number): void => {
    setRectangles((prev) => [
      ...prev.filter((item, itemIndex) => itemIndex !== index),
    ]);
  };

  return (
    <div className="app">
      <Canvas rectangles={rectangles} pushRectangles={pushRectangles} />
      <ControlPanel rectangles={rectangles} deleteRectangle={deleteRectangle} />
    </div>
  );
};
