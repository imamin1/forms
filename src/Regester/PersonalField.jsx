const PersonalField = ({ field, meta, form }) => {
  return (
    <>
      <input
        id="password"
        type="password"
        className="w-full text-center px-3 py-2.5 border border-slate-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-blue-600"
        dir="ltr"
        {...field}
      />
      {meta.touched && meta.error ? (
        <small className="block text-center text-red-500 font font-medium">
          {meta.error}
        </small>
      ) : null}
    </>
  );
};

export default PersonalField;
