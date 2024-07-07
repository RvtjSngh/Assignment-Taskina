import React, { useState, useEffect } from "react";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [anyChecked, setAnyChecked] = useState(false);

  useEffect(() => {
    setAnyChecked(checked || checked1 || checked2 || checked3 || checked4);
  }, [checked, checked1, checked2, checked3, checked4]);

  const handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    setChecked1(isChecked);
    setChecked2(isChecked);
    setChecked3(isChecked);
    setChecked4(isChecked);
  };

  const handleChange = (event, setChecked) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Checkboxes status: \nCheck me: ${checked}\nCheck 1: ${checked1}\nCheck 2: ${checked2}\nCheck 3: ${checked3}\nCheck 4: ${checked4}`
    );
  };

  return (
    <div className="checkbox-container">
      <form onSubmit={handleSubmit} className="checkbox-box">
        <label className="checkbox-label border-bottom">
          All Pages
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckAll}
            className="checkbox-input"
          />
        </label>
        <label className="checkbox-label">
          Page 1
          <input
            type="checkbox"
            checked={checked1}
            onChange={(e) => handleChange(e, setChecked1)}
            className="checkbox-input"
          />
        </label>
        <label className="checkbox-label">
          Page 2
          <input
            type="checkbox"
            checked={checked2}
            onChange={(e) => handleChange(e, setChecked2)}
            className="checkbox-input"
          />
        </label>
        <label className="checkbox-label">
          Page 3
          <input
            type="checkbox"
            checked={checked3}
            onChange={(e) => handleChange(e, setChecked3)}
            className="checkbox-input"
          />
        </label>
        <label className="checkbox-label border-bottom">
          Page 4
          <input
            type="checkbox"
            checked={checked4}
            onChange={(e) => handleChange(e, setChecked4)}
            className="checkbox-input"
          />
        </label>
        <button type="submit" className={!anyChecked ? "disabled" : ""}>
          Done
        </button>
      </form>
    </div>
  );
};

export default Checkbox;
