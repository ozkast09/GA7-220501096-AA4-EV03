import React from 'react';
import './FormInput.css'; // Importa los estilos CSS 

function FormInput({
  type = 'text', // Tipo de input por defecto: texto
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  error,
  touched,
  onBlur,
  ...restProps // Permite pasar otras props directamente al input
}) {
  return (
    <div className="form-input-group">
      {label && <label htmlFor={id || name}>{label}</label>}
      <input
        type={type}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        className={error && touched ? 'form-input error' : 'form-input'}
        {...restProps}
      />
      {error && touched && <p className="error-message">{error}</p>}
    </div>
  );
}

export default FormInput;