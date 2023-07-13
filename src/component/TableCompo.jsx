import React from 'react';

const TableCompo = ({ title, data }) => {
  return (
    <>
      <h5>{title}</h5>
      <div class="table-responsive mt-3">
        <table class="table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Budget</th>
              <th>Spend</th>
              <th>Forecast</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((val, ind) => {
              return (
                <>
                  <tr key={ind}>
                    <td className="text-primary">{val.name}</td>
                    <td>{val.budget}</td>
                    <td> {val.spend}</td>
                    <td>{val.forecast}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableCompo;
