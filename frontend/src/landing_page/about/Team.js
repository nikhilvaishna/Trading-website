import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">People</h1>
        <div className="row">
          <div className="col p-5 text-center">
            <img
              src="media/images/nithinkamath.jpg"
              alt="profile"
              style={{ borderRadius: "100%", width: "50%" }}
              className="mt-5"
            />
            <h3 className="text-center mt-3 ">Nithin Kamath</h3>
            <p className="text-center">Founder,CEO </p>
          </div>
          <div className="col p-5 mt-5">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
