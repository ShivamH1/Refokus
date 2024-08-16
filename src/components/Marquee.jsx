import React from "react";

function Marquee({ imagesURL }) {
  return (
    <div className="flex w-full py-8 gap-20 overflow-hidden whitespace-nowrap">
      {imagesURL.map((url, index) => (
        <img key={index} src={url} className="w-30 flex-shrink-0"></img>
      ))}
      {imagesURL.map((url, index) => (
        <img key={index} src={url} className="w-30 flex-shrink-0"></img>
      ))}
    </div>
  );
}

export default Marquee;
