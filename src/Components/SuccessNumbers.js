import React from 'react'
import '../ComponentsCSS/SuccessNumbers.css'
import successheading from '../Attributes/successnumberheading.png'
function SuccessNumbers() {
  return (
    <div>
        <div className="Success-page">
            <div className="success-inner-div">
            <img src={successheading} alt="" />
                <h1>Our Results & Stats</h1>

            <div className="success-number-containers">
                <div className="success-number-container">
                    <h1>4K</h1>
                    <hr />
                    <h2>Home Moved</h2>
                </div>
                <div className="success-number-container">
                    <h1>1700+</h1>
                    <hr />
                    <h2>Happy Clients</h2>
                </div>
                <div className="success-number-container">
                    <h1>4K</h1>
                    <hr />
                    <h2>Home Moved</h2>
                </div>
                <div className="success-number-container">
                    <h1>90+</h1>
                    <hr />
                    <h2>Branches</h2>
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default SuccessNumbers