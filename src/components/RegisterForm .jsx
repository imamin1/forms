import { ErrorMessage, FastField, Form, Formik } from "formik";
import {
  UserRound,
  Mail,
  LockKeyhole,
  UserPlus,
} from "lucide-react";
import * as Yup from "yup";
import PersonalError from "./PersonalError";

const RegisterForm = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("لطفا نام و نام خانوادگی را وارد کنید")
      .min(3, "نام باید حداقل ۳ کاراکتر باشد"),

    email: Yup.string()
      .required("لطفا ایمیل خود را وارد کنید")
      .email("فرمت ایمیل صحیح نیست"),

    password: Yup.string()
      .required("رمز عبور الزامی است")
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد"),

    confirmPassword: Yup.string()
      .required("لطفا تکرار رمز عبور را وارد کنید")
      .oneOf([Yup.ref("password")], "رمزهای عبور یکسان نیستند"),

    terms: Yup.boolean()
      .oneOf([true], "پذیرش قوانین الزامی است"),
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
            <UserPlus size={27} />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            ایجاد حساب کاربری
          </h2>

          <p className="text-sm text-gray-500 leading-7">
            برای ثبت‌نام اطلاعات زیر را وارد کنید
          </p>
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form noValidate className="flex flex-col gap-5">

            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullName"
                className="text-sm font-semibold text-gray-700"
              >
                نام و نام خانوادگی
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <FastField
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                  autoComplete="name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-4 text-sm outline-none transition focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-100"
                />
              </div>

              <ErrorMessage name="fullName" component={PersonalError} />
            </div>

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
              </div>

              <ErrorMessage name="email" component={PersonalError} />
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
                <LockKeyhole
                  size={19}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <FastField
                  id="password"
                  name="password"
                  type="password"
                  dir="ltr"
                  placeholder="حداقل ۸ کاراکتر"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-4 text-left text-sm outline-none transition focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-100"
                />
              </div>

              <ErrorMessage name="password" component={PersonalError} />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-semibold text-gray-700"
              >
                تکرار رمز عبور
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <FastField
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  dir="ltr"
                  placeholder="رمز عبور را مجدداً وارد کنید"
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-4 text-left text-sm outline-none transition focus:border-lime-500 focus:bg-white focus:ring-4 focus:ring-lime-100"
                />
              </div>

              <ErrorMessage
                name="confirmPassword"
                component={PersonalError}
              />
            </div>

            {/* Terms */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <FastField
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="w-4 h-4 accent-lime-600 cursor-pointer"
                />

                قوانین و شرایط را می‌پذیرم
              </label>

              <ErrorMessage name="terms" component={PersonalError} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gray-950 py-3.5 text-white font-semibold transition hover:bg-lime-700 active:scale-[0.98]"
            >
              ایجاد حساب کاربری
            </button>

            {/* Google */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">
                یا ثبت‌نام با
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              ثبت‌نام با حساب گوگل
            </button>

          </Form>
        </Formik>

        {/* Login */}
        <div className="flex items-center justify-center gap-2 mt-7 text-sm">
          <p className="text-gray-500">
            قبلاً حساب کاربری دارید؟
          </p>

          <a
            href="/login"
            className="font-bold text-lime-700 hover:text-lime-800 transition"
          >
            وارد شوید
          </a>
        </div>

      </div>
    </div>
  );
};

export default RegisterForm;
