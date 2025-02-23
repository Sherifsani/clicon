import React from "react";

const HighlightedText = () => {
  return (
    <div>
      <div className="highlight">
        <p>
          <span className="bg-warning-300 text-gray-900 inline-block -rotate-6 mr-1 p-1">
            Black
          </span>
          <span className="text-white"> Friday</span>
        </p>
      </div>
    </div>
  );
};

export default HighlightedText;
