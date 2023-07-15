import React from "react";
import CardChouseUs from "./CardChouseUs";
import cardImag1 from "../public/assets/bgn-boxes-01.jpg";
import cardImag2 from "../public/assets/bgn-boxes-02.jpg";
import cardImag3 from "../public/assets/bgn-boxes-03.jpg";
function WhyUs() {
  return (
    <div>
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1  gap-6 mt-[-45px] md:grid-cols-3 md:mt-[-60px] ">
          <CardChouseUs
            image={cardImag1}
            title={"PLAN, THEN DO"}
            feature={"Our Services"}
            desc={
              "Avantage Group is all about strategy, we’re here to inform which tactics need funding and which are drains on resources."
            }
            button={"Avantage Service"}
          />
          <CardChouseUs
            image={cardImag2}
            title={"SMALL TACTICS"}
            feature={"Our Approach"}
            desc={
              "Business we operate in is like an intricate game of chess, where every move counts and you keep score with money"
            }
            button={"More about Avantage"}
          />
          <CardChouseUs
            image={cardImag3}
            title={"PROOF, NOT PROMISES"}
            feature={"Avantage Results"}
            desc={
              "Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line."
            }
            button={"Explore our Solutions"}
          />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
