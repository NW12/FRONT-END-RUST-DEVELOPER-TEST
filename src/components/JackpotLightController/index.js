import React, { useState } from 'react';
import './JackpotLightController.css';

const JackpotLightController = () => {

  const [litSlot, setLitSlot] = useState(0);

  const totalSlots = 10;

  const handleRotate = () => {
    // Rotate the lit slot to the next slot in a clockwise direction
    setLitSlot((litSlot + 1) % totalSlots);
  };

  const renderSlots = () => {
    const slots = [];
    for (let i = 0; i < totalSlots; i++) {
      slots.push(
        <div
          key={i}
          className={`slot ${i === litSlot ? 'lit' : ''}`}
        >
          {i + 1}
        </div>
      );
    }
    return slots;
  };

  return (
    <div className="jackpot-controller">
      <div className="circle">
        {renderSlots()}
      </div>
      <button onClick={handleRotate} className="rotate-button">Rotate</button>
    </div>
  );
};

export default JackpotLightController;
