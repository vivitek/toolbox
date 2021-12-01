import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  label,
  placeholder,
  type,
  name,
  id,
  onChange,
  onBlur,
}) => (
  <div>
    <div>
      {label && (
        <label htmlFor={label} className="block text-sm font-medium text-white text-left">
          {label}
        </label>
      )}
      <div className="my-1 relative rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full p-2 border-none outline-none focus:outline-none rounded-md bg-almostBlue text-white"
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    </div>
  </div>
);

export default Input;
