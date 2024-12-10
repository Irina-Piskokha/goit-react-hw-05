import { Formik, Form, Field } from "formik";
import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ handleSetQuery }) => {
  const handleSubmit = (values) => {
    if (!values.query.trim()) {
      toast("Please enter some text!");
      return;
    }

    handleSetQuery(values.query);
  };

  const initialValues = {
    query: "",
  };
  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            background: "black",
            color: "#fff",
          },
        }}
      />
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            name="query"
            placeholder="Enter movie... "
            className={s.input}
          />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
