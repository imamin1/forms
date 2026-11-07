
import { ErrorMessage, FastField, Form, Formik } from "formik";
import { LockKeyhole, Mail } from "lucide-react";
import * as Yup from "yup";
import PersonalError from "./PersonalError";
const LoginForm = () => {

    const initialValues = {
        email : '',
        password : ''
    }
    const onSubmit = (values) => {
            console.log(values);
          }
          const validationSchema = Yup.object({
  email: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .email("فرمت ایمیل را صحیح وارد کنید aaa@example.bbb"),
  password: Yup.string()
    .required("رمز عبور الزامی است")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),
});
  return (
    <div
      dir="rtl"
      className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4 py-8"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-9 shadow-xl shadow-gray-200/60 border border-gray-100">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-lime-100 text-lime-700 flex items-center justify-center mx-auto mb-5">
            <LockKeyhole size={27} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            خوش آمدید
          </h2>

          <p className="text-sm text-gray-500 leading-7">
            برای ورود به حساب کاربری خود اطلاعات زیر را وارد کنید
          </p>
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form noValidate className="flex flex-col gap-5">

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                آدرس ایمیل
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <FastField
                  id="email"
                  name="email"
                  type="email"
                  dir="ltr"
                  placeholder="example@email.com"
                  autoComplete="email"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-4 text-left text-sm outline-none transition focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-100"
                />
                <ErrorMessage name="email" component={PersonalError}/>
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                رمز عبور
              </label>

              <div className="relative">
                <FastField
                  id="password"
                  name="password"
                  dir="ltr"
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-3 pl-4 text-left text-sm outline-none transition focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-100"
                />
                <ErrorMessage name="password" component={PersonalError}/>
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-lime-700 transition focus:outline-none"
                >
                
                </button>
              </div>
            </div>

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between gap-3 text-sm">
              <label
                htmlFor="remember"
                className="flex items-center gap-2 text-gray-600 cursor-pointer"
              >
                <FastField
                  id="remember"
                  name="remember"
                  type="checkbox"
                  className="w-4 h-4 accent-lime-600 cursor-pointer"
                />
                مرا به خاطر بسپار
              </label>

              <a
                href="/forgot-password"
                className="font-medium text-lime-700 hover:text-lime-800 transition"
              >
                فراموشی رمز عبور؟
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gray-950 py-3.5 text-white font-semibold transition hover:bg-lime-700 active:scale-[0.98]"
            >
              ورود به حساب کاربری
            </button>

          </Form>
        </Formik>

        {/* Register */}
        <div className="flex items-center justify-center gap-2 mt-7 text-sm">
          <p className="text-gray-500">
            هنوز حساب کاربری ندارید؟
          </p>

          <a
            href="/register"
            className="font-bold text-lime-700 hover:text-lime-800 transition"
          >
            ثبت نام کنید
          </a>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;