import * as yup from "yup";
export const authFormSchema = yup.object().shape({
  firstname: yup.string().max(50).required("First name is required"),
  lastname: yup.string().max(50).required("Last name is required"),
  email: yup
    .string()
    .email("Please, provide a valid email address")
    .required("email address is required"),
  password: yup
    .string()
    .min(6, "Password should be a minimum length of 6")
    .max(20, "Password should have a maximum length of 20")
    .required("Password is required "),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password ")], "Passwords don't match")
    .required("Confirm password is required"),
});
export interface AuthForm {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
