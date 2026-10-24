import { useFormik } from "formik"

export default function EmptyForm() {
  const formik = useFormik({
    initialValues : {
      name: "amin",
      email : ' ',
      password: ''
    }
  })

  console.log(formik.values)
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100 text-slate-800">
      <form dir="rtl" className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-1">ورود</h1>
        <p className="text-sm text-slate-500 mb-6">اطلاعات خودت رو وارد کن.</p>

        <div className="flex flex-col sm:flex-row sm:gap-3">
          <div className="flex-1 min-w-0 mb-4">
            <label htmlFor="lastName" className="block text-sm mb-1.5">
              نام و خانوادگی
            </label>
            <input
              id="lastName"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="w-full px-3 py-2.5 border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600"
            />
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
            dir="ltr"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600"
          />
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
            dir="ltr"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600"
          />
        </div>

        <button
          type="button"
          className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-700"
        >
          ورود
        </button>
      </form>
    </div>
  )
}