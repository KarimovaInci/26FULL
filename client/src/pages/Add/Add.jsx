import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const Add = () => {
  return (
    <>
      <div className="form">
        <Formik
          initialValues={{
            image: " ",
            title:" ",
            desc: " ",
            price: 0,
          }}

          validationSchema={Yup.object({
            image: Yup.string().required("image is required"),
            title: Yup.string().required("title is required"),
            desc: Yup.string().required("description is required"),
            price: Yup.number().required("number is required"),
          })}

          onSubmit={(values, { resetForm }) => {
            axios.post("http://localhost:8080/drimo", values).then(res => {
              toast.success("Card has been added");
            resetForm();
            })
          }}
        >
          {({ values, handleChange, handleSubmit, dirty }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="image" onSubmit={handleSubmit}>
                Image URL
              </label>
              <input
                type="text"
                placeholder="image"
                id="image "
                value={values.image}
                onChange={handleChange}
              />

              <label htmlFor="title" onSubmit={handleSubmit}>
                Title
              </label>
              <input
                type="text"
                placeholder="title"
                id="title "
                value={values.title}
                onChange={handleChange}
              />

              <label htmlFor="desc" onSubmit={handleSubmit}>
                description
              </label>
              <input
                type="text"
                placeholder="desc"
                id="desc "
                value={values.desc}
                onChange={handleChange}
              />

              <label htmlFor=" price" onSubmit={handleSubmit}>
                price
              </label>
              <input
                type="number"
                placeholder="price"
                id="price"
                value={values.price}
                onChange={handleChange}
              />
              <button type="submit" disabled={!dirty}>
                add{" "}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Add;
