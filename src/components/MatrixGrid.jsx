import { useState, useEffect } from "react";

export default function MatrixGrid() {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [finalAnimation, setFinalAnimation] = useState(false);

  const handleClick = (index) => {
    if (!clickedBoxes.includes(index)) {
      setClickedBoxes((prev) => [...prev, index]);
    }
    if (index === 8) {
      setFinalAnimation(true);
    }
  };

  useEffect(() => {
    if (finalAnimation) {
      clickedBoxes.forEach((index, i) => {
        setTimeout(() => {
          document.getElementById(`box-${index}`).style.backgroundColor = "orange";
        }, i * 500);
      });
    }
  }, [finalAnimation]);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            id={`box-${index}`}
            className="w-16 h-16 border flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: clickedBoxes.includes(index) ? "green" : "white" }}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
