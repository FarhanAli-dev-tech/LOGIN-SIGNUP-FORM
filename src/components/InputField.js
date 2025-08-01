import React from 'react';

const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>{label}</label><br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{ padding: '6px', width: '250px' }}
      />
      {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
    </div>
  );
};

export default InputField;
