import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4 className="mt-4">Support Portal</h4>
        <a href="/" style={{ marginRight: "150px" }} className="mt-4">
          Track Tickets{" "}
        </a>
      </div>
      <div className="row p-3">
        <div className="col-6 p-5">
          <h3 className="mb-5">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            placeholder="Eg. how do i activate F&O,Why is my order getting rejected...."
            className="mb-3"
          />{" "}
          <br />
          <a href="/" className="p-2">
            Track account opening
          </a>
          <a href="/" className="p-2">
            Track segment activation
          </a>
          <a href="/" className="p-2">
            Intraday margins
          </a>{" "}
          <br />
          <a href="/" className="p-2">
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h3>Featured</h3>
          1.<a href="/"> Rights Entitlements listing in February 2025</a> <br />
          2.<a href="/"> Latest Intraday leverages and Square-off timings</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
