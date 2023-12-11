import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const initFormInputs = {
    name: "",
    email: "",
    day: "1",
    month: "January",
    year: "2015",
}

const FormData = createContext(null);

const FormDataProvider = ({children}) => {
    const [formInputs, setFormInputs] = useState(initFormInputs);

    return (
        <FormData.Provider value={[formInputs, setFormInputs]}>
            {children}
        </FormData.Provider>
    )

}

FormDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { FormData, FormDataProvider };
