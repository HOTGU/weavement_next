import React from "react";

const Radio = ({ name, value, label }) => {
  return (
    <label className="flex items-center gap-2 form-item text-base ">
      <input
        type="radio"
        name={name}
        value={value}
        className="w-3 h-3 peer"
        required
      />
      {label}
    </label>
  );
};

export default Radio;
