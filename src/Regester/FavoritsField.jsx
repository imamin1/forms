import { Field } from "formik";

const FavoritsField = ({ form, push, remove }) => {
  const { favorits } = form.values;

  // فقط وقتی آخرین فیلد پر باشد، اجازه افزودن بده
  const canAdd = favorits[favorits.length - 1].trim() !== "";

  return (
    <div className="mb-6">
      <label className="block text-sm mb-2">
        علایق
      </label>

      {favorits.map((item, index) => (
        <div key={index} className="flex gap-2 mb-3">
          <Field
            name={`favorits[${index}]`}
            type="text"
            className="w-full px-3 py-2.5 border border-slate-300 rounded-lg"
          />

          {favorits.length > 1 && (
            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-red-500 text-white px-3 rounded-lg"
            >
              حذف
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        disabled={!canAdd}
        onClick={() => push("")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        افزودن علاقه +
      </button>
    </div>
  );
};

export default FavoritsField;