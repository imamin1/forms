import { useFormik } from "formik";
import * as Yup from "yup"
// const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]{3,50}$/;

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$!%&*])[A-Za-z0-9@#$!%&*]{8,}$/;
 

  const initialValues  ={
    name : '',
    email : '',
    password : '',
  };  
  const onSubmit =  values=>{
    console.log(values);  
  }
  // const validate = values=>{
  //  const errors = {};
  //     if (!values.name.trim()) {
  //       errors.name = "این قسمت را پر کنید";
  //     } else if (!nameRegex.test(values.name.trim())) {
  //       errors.name = "نام باید بین 3 تا 50 حرف باشد";
  //     }
  //     if (!values.email.trim()) {
  //       errors.email = "این قسمت را پر کنید";
  //     } else if (!emailRegex.test(values.email)) {
  //       errors.email = "فرمت ایمیل صحیح نیست";
  //     }
  //     if (!values.password) {
  //       errors.password = "این قسمت را پر کنید";
  //     } else if (!passwordRegex.test(values.password)) {
  //       errors.password ="رمز عبور باید حداقل ۸ کاراکتر و شامل حروف کوچک، بزرگ، عدد و علامت باشد";
  //     }
  //     return errors;
  // }

  const validationSchema = Yup.object({
    name : Yup.string().required('لطفا این قسمت را پر کنید'),
    email : Yup.string().required('لطفا این قسمت را پر کنید').email('فرمت ایمیل را صحیح وارد کنید aaa@example.bbb'),
    password: Yup.string()
  .required('رمز عبور الزامی است')
  .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
  })


export default function EmptyForm() {
const formik = useFormik({
  initialValues ,
  onSubmit,
  validationSchema,
})


  console.log(formik.values);
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100 text-slate-800">
      <form
        dir="rtl"
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md border-2 border-gray-400"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-3xl text-center font-bold mb-4">ورود</h1>
        <p className="text-sm text-center text-slate-500 mb-6">
          اطلاعات خودت رو وارد کن.
        </p>

        <div className="flex flex-col sm:flex-row sm:gap-3">
          <div className="flex-1 min-w-0 mb-4">
            <label htmlFor="name" className="block text-sm mb-1.5">
              نام و خانوادگی
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600"
            />
            {formik.errors.name && formik.touched.name ? (
              <small className="text-center text-red-700 font-medium">
                {formik.errors.name}
              </small>
            ) : null}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-1.5">
            ایمیل
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            dir="ltr"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600"
          />
          {formik.errors.email && formik.touched.email ? (
            <small className="text-center text-red-700 font-medium">
              {" "}
              {formik.errors.email}
            </small>
          ) : null}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm mb-1.5">
            رمز عبور
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            dir="ltr"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600"
          />
          {formik.errors.password && formik.touched.password ? (
            <small className="text-center font-medium text-red-700">
              {" "}
              {formik.errors.password}
            </small>
          ) : null}
        </div>

        <button className="py-2 px-4 rounded-lg mx-auto bg-blue-500 w-full"
  type="submit"
  disabled={formik.isSubmitting}
>
  {formik.isSubmitting ? 'در حال ارسال...' : 'ورود'}
</button>
      </form>
    </div>
  );
}
