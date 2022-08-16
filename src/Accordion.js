import React, { useState } from 'react';

const Accordion = ({ title, data1, data2, data3, data4, data5, data6, data7}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-item-header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
        {/* Date: {data1} */}
        <div><span class='Bold'>Doctor</span>: {data2}</div>
      <br></br><div><span class='Bold'>Age</span>: {data3}</div>
      <br></br><div><span class='Bold'>Height</span>: {data4}</div>
      <br></br><div><span class='Bold'>Weight</span>: {data5}</div>
      <br></br><div><span class='Bold'>Hospital</span>: {data6}</div>
      <br></br><div><span class='Bold'>Prescription</span>: {data7}</div>
      </div>}
    </div>
  );
};

export default Accordion;