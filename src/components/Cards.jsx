import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-32 flex gap-1">
        <Card
          width={"basis-1/3"}
          start={false}
          para={true}
          title="WORK"
          heading="Projects & Case Studies"
          paragraph="Web Design, Webflow Development, and Creative Development."
        />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          title="GET IN TOUCH"
          heading="Let's get to it together"
        />
      </div>
    </div>
  );
}

export default Cards;
