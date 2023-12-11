// extends TextInputField
import PropTypes from 'prop-types'
import Check from "../assets/images/signup-screen/valid.svg"
import EyeIcon from "../assets/images/signup-screen/eye.svg"
import {useState} from "react";

export default function PasswordInputField(
    {
        fieldName = "Field Name",
        outline = "default",
        font = "default",
        errorMessage = '',
        ...rest
    }) {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const outlineStyle = {
        default: 'neutral-500',
        dark: 'neutral-700',
    }

    const fontStyle = {
        light: " ",
        default: "xl",
    }

    const typeOfField = !passwordVisible ? "password" : "text";

    const hidePasswordIcon =
        <button type="button" onClick={()=>setPasswordVisible(!passwordVisible)}>
            <img alt="password visible" src={EyeIcon}/>
        </button>;

    const isError = !errorMessage === false;
    const focusColor = isError ? 'error' : 'twitter-blue';

    return (
        <div className="">
            <fieldset
                className={"w-full mb-1 px-3 py-2 border border-" + (isError ? 'error' : outlineStyle[outline]) + " rounded focus-within:border-" + focusColor + " group " + (isError && 'border-error')}>
                <legend
                    className={"text-" + (isError ? 'error' : outlineStyle[outline]) + " text-xs font-medium group-focus-within:text-" + focusColor}>
                    <div className="px-0.5  group-focus-within:px-1">
                        {fieldName}
                    </div>
                </legend>
                <div className="flex justify-around">
                    <input name={fieldName} type={typeOfField} placeholder={fieldName}
                           className={'appearance-none w-full text-' + fontStyle[font] + ' peer bg-inherit autofill:bg-inherit focus:outline-none text-neutral-50 placeholder:text-neutral-500'} {...rest}/>
                    {hidePasswordIcon}
                </div>
            </fieldset>
            {isError && <div className="text-error text-sm pl-3">{errorMessage}</div>}
        </div>
    )
}

PasswordInputField.propTypes = {
    fieldName: PropTypes.string.isRequired,
    outline: PropTypes.oneOf(['default', 'dark']),
    font: PropTypes.oneOf(['light', 'default']),
    errorMessage: PropTypes.string,
}
