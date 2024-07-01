import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSession } from "./useSession";
import { users } from "../lib/placeholder-data";
import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
   email: Yup.string().email().required(),
   password: Yup.string().min(6).required(),
});

export const useSignin = () => {
   const navigate = useNavigate();
   const { generateSession } = useSession();

   const onSigninSubmit = (values) => {
      const user = users.find(user => user.email === values.email && user.password === values.password);

      if (user) {
         generateSession(user);
         navigate('/dashboard');
      } else {
         alert('Invalid email or password');
      }
   };

   const signin = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
      validationSchema: SigninSchema,
      onSubmit: onSigninSubmit,
   });

   return { signin };
};
