import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[17%] px-4 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-700 flex justify-between items-center">
      <img src={val.url}></img>
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
