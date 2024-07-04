import * as Yup from 'yup'

export const SigninSchema = Yup.object().shape({
   email: Yup
      .string()
      .trim()
      .email("Email harus berisi '@'")
      .required("Tolong isi email Anda terlebih dahulu"),
   password: Yup
      .string()
      .trim()
      .min(3, "Password harus berisi minimal 3 karakter dan maksimal 12 karakter")
      .max(12, "Password harus berisi minimal 3 karakter dan maksimal 12 karakter")
      .required("Tolong Isi password Anda"),
})