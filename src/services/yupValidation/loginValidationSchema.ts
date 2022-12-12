import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup.string()
        .typeError("Will be a string")
        .email("The field contains an error")
        .min(10, "The field must contain more than 10 characters")
        .max(63, "The field must contain less than 63 characters")
        .required("This field cannot be empty"),
    password: yup.string()
        .typeError("Will be a string")
        .min(5, "The field must contain more than 5 characters")
        .max(30, "The field must contain less than 30 characters")
        .required("This field cannot be empty"),
});