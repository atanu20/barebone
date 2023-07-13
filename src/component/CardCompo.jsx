import React from 'react';

const CardCompo = ({ data }) => {
  return (
    <>
      {data?.map((val, ind) => {
        return (
          <>
            <div className="col-md-4 col-sm-6 col-12 mb-3 mx-auto" key={ind}>
              <div
                className="card p-3"
                style={{ backgroundColor: `${val.color}` }}
              >
                <h2>{val.price}</h2>
                <p>{val.title}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CardCompo;
