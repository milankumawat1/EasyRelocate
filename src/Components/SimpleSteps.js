import React from "react";

function SimpleSteps() {
  return (
    <div id="simpleSteps">
      <div className="Success-page">
        <div className="success-inner-div">
          {/* <img src={successheading} alt="" /> */}
          <h1>Just in 3 simple steps!</h1>

          <div className="success-number-containers">
            <div className="simple-step-container">
              <h1>1.</h1>
              <h2>Request a free quote</h2> <br />
              <p>
                A move can be to a nearby location within the same neighborhood,
                a much farther location in a different city or country.
              </p>
            </div>
            <div className="simple-step-container">
              <h1>2.</h1>
              <h2>Fix an appointment</h2> <br />
              <p>
              Fix an appointment with us so we
will come and calculate your moving
cost and insurance and you can sign
contract in same day.</p>
            </div>
            <div className="simple-step-container">
              <h1>3.</h1>
              <h2>Sign a contract & done!</h2> <br />
              <p>It usually includes packing up all
belongings, transferring to the new
home, and unpacking, as well as
administrative task.</p>
            </div>
          </div>

          <a href="#contactus" className="simple-steps-get-started">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default SimpleSteps;
