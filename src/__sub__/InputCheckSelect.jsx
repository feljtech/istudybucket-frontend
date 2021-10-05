import React from "react";
import { useField } from 'formik';

export const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name} className="block mb-1 ">{label}</label>
        <input className={meta.error? "border-red-500 border" : ""} {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className={props.ispassword=="true" && "absolute left-0 z-10 -bottom-5 text-red-600 text-sm" || "text-red-600 text-sm"}>{meta.error}</div>
        ) : null}
      </>
    );
  };

export const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox-input">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="text-red-600 text-sm">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
export const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="text-red-600 text-sm">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  

function InputCheckSelect() {
    return (
        <div>
            
        </div>
    )
}

export default InputCheckSelect

