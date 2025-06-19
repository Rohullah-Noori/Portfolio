// Skills.jsx
import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
function Skills({ percentage }) {
  const getVariant = () => {
    if (percentage <= 40) return "danger";
    if (percentage <= 70) return "warning";
    return "info";
  };

  return (
    <div className="p-3 text-white rounded w-100 bg-dark">
      <h5 className="mb-2">Skill Progress</h5>
      <ProgressBar
        now={percentage}
        label={`${percentage}%`}
        variant={getVariant()}
        animated
        striped
      />
    </div>
  );
}

export default Skills;
