import React from "react";
import './EntryBox.css';

export const EntryBox = props =>
  <div className="form-group">
    <textarea className="form-control" rows="5" {...props} />
  </div>;