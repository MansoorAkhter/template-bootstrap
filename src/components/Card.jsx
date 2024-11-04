import React from "react";

const Card = ({ title, icon }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">
          <i className={icon}></i> {title}
        </h5>
        <p className="card-text">
          Ye aapka custom card hai. Yahan aap additional content daal sakte hain.
        </p>
        <a href="#" className="btn btn-primary">
          Action
        </a>
      </div>
    </div>
  );
};

export default Card;
