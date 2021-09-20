import React from "react";
import { rectangleType } from "./App";

interface ControlPanelPropsType {
  rectangles: rectangleType[];
  deleteRectangle: (index: number) => void;
}

export const ControlPanel: React.FC<ControlPanelPropsType> = ({
  rectangles,
  deleteRectangle,
}: ControlPanelPropsType): React.ReactElement => {
  return (
    <div className="control-panel">
      <h1>Rectangles</h1>
      <ul>
        {rectangles.map((item, index) => (
          <li key={item.color + index}>
            <div className="control-panel__item">
              {index + 1}
              <span
                style={{
                  display: "block",
                  width: "15px",
                  height: "15px",
                  backgroundColor: item.color,
                }}
              ></span>
            </div>

            <button onClick={() => deleteRectangle(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
