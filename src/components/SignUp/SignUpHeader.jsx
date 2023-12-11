import PropTypes from 'prop-types';
import SignUpX from "../../assets/images/signup-screen/signup-x.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";

export default function SignUpHeader(
    {
        currentStep="1",
        totalSteps="1",
        onClick=()=>{}
    }) {
  return (
    <header className="flex justify-start py-3 px-4 mb-3">
        <button onClick={onClick}>
          <img alt="navigate" src={currentStep==="1" ? SignUpX : ArrowLeft}  className="mr-5" />
        </button>
        <span className="font-bold"> Step {currentStep} of {totalSteps} </span>
    </header>
  )
}

SignUpHeader.propTypes = {
  currentStep: PropTypes.string.isRequired,
  totalSteps: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
