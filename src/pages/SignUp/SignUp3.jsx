import {useContext, useState} from "react";

import TextInputField from "../../components/TextInputField.jsx";
import Button from "../../components/Button";
import SignupFlowContext from "../../context/SignupFlowContext.jsx";
import { FormData } from "../../context/FormDataContext.jsx";
import {useAuthService} from "../../hooks/authHooks.js";

function SignUp3() {
    const authService = useAuthService();
    const [signupFlow, setSignupFlow] = useContext(SignupFlowContext);
    const [formData, setData] = useContext(FormData);
    const [verificationCode, setVerificationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const verificationCodeHandler = async (e) => {
        e.target.disabled = true;
        const match = await authService.verifyCode({code: Number(verificationCode)});
        if(match){
            setSignupFlow({...signupFlow, currentStep: signupFlow.currentStep+1});
        }else{
            setVerificationCode(match);
            setErrorMessage('Incorrect verification code');
        }
    }

    return (
    <>
    <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
        <h1 className="text-2xl font-bold mb-2">We sent you a code</h1>
        <p className="text-sm text-dob-text mb-10">Enter it below to verify {formData.email}</p>
        <form className="w-full mb-3">
            <TextInputField fieldName="Verification Code" value={verificationCode} onChange={(e) => {setVerificationCode(e.target.value); setErrorMessage('');}} autoFocus={true} errorMessage={errorMessage}/>
        </form>
        <div className="text-twitter-blue self-end text-sm">
            Didn't receive a code?
        </div>
    </main>
    <section className="flex flex-col mx-4 my-5 px-5 justify-end">
        <Button variant="default" size="xl" disabled={!(verificationCode.length===6)}
            onClick={verificationCodeHandler}>
            Next
        </Button>
    </section>
    </>
  )
}

export default SignUp3
