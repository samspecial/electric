import React from "react";
import PropTypes from "prop-types";

const CardDetails = ({ cardname, cardDigit, cvv, expiryDate, handleChange, nextStep, previousStep }) => {

    const proceed = event => {
        event.preventDefault();
        nextStep();
        if (!shouldProceed())
            return
    }

    const goBackward = event => {
        event.preventDefault();
        previousStep()
    }

    const shouldProceed = () => {
        // const emailRegex = RegExp(/\S+@\S+\.\S+/);
        return cardname.length > 15 && cardDigit.length > 8 && cvv.length > 2
    }
    return (
        <form noValidate>
            <div>
                <label htmlFor="cardName">Card Name</label>
                <input type="text"
                    placeholder="Chukwuka Mohammed Abiola"
                    name="cardName"
                    id="cardName"
                    value={cardname}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cardDigit">Enter your card number</label>
                <input type="number"
                    placeholder="Please enter your card number"
                    name="cardDigit"
                    id="cardDigit"
                    value={cardDigit}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cVV">CVV</label>
                <input type="number"
                    placeholder="CVV"
                    name="cvv"
                    id="cVV"
                    value={cvv}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="expirtDate">Expiry date</label>
                <input type="datetime"
                    placeholder="Expired"
                    name="expiryDate"
                    id="phone"
                    value={expiryDate}
                    onChange={handleChange}
                />
            </div>
            <button type="button" disable={!shouldProceed()} onClick={goBackward}>Previous</button>
            <button type="button" disable={!shouldProceed()} onClick={proceed}>Next</button>
        </form>
    )
}

export default CardDetails;

CardDetails.propTypes = {
    cardname: PropTypes.string.isRequired,
    cardDigit: PropTypes.number.isRequired,
    cvv: PropTypes.number.isRequired,
    expiryDate: PropTypes.string.isRequired,
    nextStep: PropTypes.func.isRequired,
    previousStep: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}