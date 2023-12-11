import {
    useNavigate,
  } from "react-router-dom";
import { useContext, useState } from "react";

import PasswordInputField from "../../components/PasswordInputField.jsx";
import Button from "../../components/Button"
import { validatePassword } from "../../utils/FormValidation.js"
import { FormData } from "../../context/FormDataContext.jsx";
import { useAuthService } from "../../hooks/authHooks.js";

function SignUp4() {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState([false, '']);
    const navigate = useNavigate();
    const formData = useContext(FormData);
    const authService = useAuthService();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        const [isValid, errorMessage] = validatePassword(password);
        setPasswordError([!isValid, errorMessage]);
    }

    const submitForm = async (e) => {
        const data = formData[0];
        const {name, email} =  data;
        e.target.disabled = true;
        await authService.register({
            username: name,
            email,
            password
        })
        navigate('/home');
    }

    return (
    <>
    <main className="flex flex-col flex-grow px-4 justify-start items-start w-full">
        <h1 className="text-2xl font-bold mb-2">You’ll need a password</h1>
        <p className="text-sm text-dob-text mb-10">Make sure it’s 8 characters or more</p>
        <form className="w-full mb-3">
            <PasswordInputField fieldName={"Password"} value={password} onChange={handlePasswordChange}
            errorMessage={passwordError[0] ? passwordError[1] : ""}/>
        </form>
    </main>
    <section className="flex flex-col mx-4 my-5 px-5 justify-end">
        <Button variant="default" size="xl" onClick = {submitForm} disabled={passwordError[0]}>
            Next
        </Button>
    </section>
    </>
    )
}

export default SignUp4
