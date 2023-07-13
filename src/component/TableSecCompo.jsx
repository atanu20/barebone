import React from 'react';

const TableSecCompo = ({ title, data }) => {
  const onApprove = (id) => {
    console.log(id);
  };

  const onReject = (id) => {
    console.log(id);
  };
  return (
    <>
      <h5>{title}</h5>
      <div class="table-responsive mt-3">
        <table class="table ">
          <thead>
            <tr>
              <th>Bucket Name</th>
              <th>Current Budget</th>
              <th>Requested Budget</th>
              <th>Requested By</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((val, ind) => {
              return (
                <>
                  <tr key={ind}>
                    <td className="text-primary">{val.bucketName}</td>
                    <td>{val.currentBudget}</td>
                    <td> {val.requestedBudget}</td>
                    <td className="text-primary">{val.requestedBy}</td>
                    <td>
                      <button
                        className="btn btn-outline-dark m-1"
                        onClick={() => onApprove(val.id)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-outline-dark m-1"
                        onClick={() => onReject(val.id)}
                      >
                        Reject
                      </button>
                    </td>
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

export default TableSecCompo;
