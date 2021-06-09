import React from "react";
import PropTypes from "prop-types";

const SubmitNow = ({ onClick, previousStep }) => {
    const submitForm = (event) => {
        event.preventDefault();
        onClick();
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <h3>Are you sure you want to submit</h3>
                <button onClick={previousStep}>Previous</button>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

SubmitNow.propTypes = {
    onClick: PropTypes.func.isRequired,
    previousStep: PropTypes.func.isRequired,
}

export default SubmitNow;