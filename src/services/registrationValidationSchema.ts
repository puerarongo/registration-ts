import * as yup from 'yup';

export const welcomeValidationSchema = yup.object().shape({
    email: yup.string()
        .typeError("Will be a string")
        .email("the field contains an error")
        .min(10, "the field contains an error")
        .max(63, "the field contains an error")
        .required("this field is required"),
    name: yup.string()
        .typeError("Will be a string")
        .min(3, "the field contains an error")
        .max(100, "the field contains an error")
        .required("this field is required"),
    password: yup.string()
        .typeError("Will be a string")
        .min(5, "the field contains an error")
        .max(30, "the field contains an error")
        .required("this field is required"),
});