import * as yup from 'yup';

export const registrationValidationSchema = yup.object().shape({
    email: yup.string()
        .typeError("Will be a string")
        .email("The field contains an error")
        .min(10, "The field contains an error")
        .max(63, "The field contains an error")
        .required("This field cannot be empty"),
    name: yup.string()
        .typeError("Will be a string")
        .min(3, "The field contains an error")
        .max(100, "The field contains an error")
        .required("This field cannot be empty"),
    password: yup.string()
        .typeError("Will be a string")
        .min(5, "The field contains an error")
        .max(30, "The field contains an error")
        .required("This field cannot be empty"),
});