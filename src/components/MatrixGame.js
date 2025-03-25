import React, { useState, useEffect } from "react";

export default function MatrixGame() {
  const size = 3;
  const totalBoxes = size * size;

  // State to track colors of each box
  const [colors, setColors] = useState(Array(totalBoxes).fill("white"));
  const [clickSequence, setClickSequence] = useState([]); // Store click order
  const [finalClicked, setFinalClicked] = useState(false); // Track last click

  // Handle click on a box
  const handleClick = (index) => {
    if (colors[index] !== "white" || finalClicked) return; // Prevent re-click

    // Update colors
    const newColors = [...colors];
    newColors[index] = "green";
    setColors(newColors);

    // Store click order and check if last box is clicked
    setClickSequence((prev) => {
      const updatedSequence = [...prev, index];
      if (updatedSequence.length === totalBoxes) {
        setFinalClicked(true);
      }
      return updatedSequence;
    });
  };

  // Replay clicks in order & change to orange
  useEffect(() => {
    if (finalClicked) {
      clickSequence.forEach((index, i) => {
        setTimeout(() => {
          setColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[index] = "orange";
            return newColors;
          });
        }, (i + 1) * 500);
      });
    }
  }, [finalClicked, clickSequence]); // Added `clickSequence` as a dependency

  return (
    <div className="grid-container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="grid-box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
  
  
}
