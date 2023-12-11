import { useContext } from "react";

import TextInputField from "../../components/TextInputField.jsx";
import Button from "../../components/Button";
import SignupFlowContext from "../../context/SignupFlowContext.jsx";
import { FormData } from "../../context/FormDataContext.jsx";
import {useAuthService} from "../../hooks/authHooks.js";

function SignUp2() {

  const authService = useAuthService();

  const [signupFlow, setSignupFlow] = useContext(SignupFlowContext);
  const [formData, setFormData] = useContext(FormData);

  const dob = formData.month + " " + formData.day + ", " + formData.year;

  const onFocus = (e)=> {
      setSignupFlow({currentStep: signupFlow.currentStep - 1, focusField: e.target.name});
  }

  return (
    <>
    <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
        <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
        <form className="w-full flex flex-col gap-8">
            <TextInputField fieldName="Name" isCheck={true} value={formData.name} onChange={()=>{}} onFocus={onFocus}/>
            <TextInputField fieldName="Email" isCheck={true} value={formData.email} onChange={()=>{}} onFocus={onFocus}/>
            <TextInputField fieldName="Date of birth" isCheck={true} value={dob} onChange={()=>{}} onFocus={onFocus}/>
        </form>
    </main>
    <section className="flex flex-col mx-4 my-5 px-5 justify-end">
      <Button variant="primary" size="xl" onClick={()=>{
        setSignupFlow({...signupFlow, currentStep: signupFlow.currentStep+1
        });
        authService.sendVerificationCode();
      }}>
          Sign up
      </Button>
    </section>
    </>
  )
}

export default SignUp2
