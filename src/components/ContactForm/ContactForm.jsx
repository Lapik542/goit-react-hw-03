import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from "../ContactForm/ContactForm.module.css";

export const ContactForm = ({onAdd}) => {
    const [submitting, setSubmitting] = useState(false);

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 2 characters')
        .max(50, 'Name must be at most 50 characters'),
    number: Yup.string()
        .required('Number is required')
        .min(3, 'Number must be at least 6 characters')
        .max(50, 'Number must be at most 15 characters'),
});


    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            onAdd({
                id: Date.now(),
                name: values.name,
                number: values.number,
            });
            resetForm();
            setSubmitting(false);
        },
    });

    return (
        <form className={css.form} onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                className={css.inputText}
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className={css.error}>{formik.errors.name}</div>
            ) : null}

            <label className={css.labelNum} htmlFor="number">Number</label>
            <input
                className={css.inputNum}
                type="text"
                id="number"
                name="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number ? (
                <div className={css.error}>{formik.errors.number}</div>
            ) : null}

            <button className={css.btnAddContact} type="submit" disabled={submitting}>
                Add contact
            </button>
        </form>
    );
};
