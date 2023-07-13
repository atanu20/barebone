import React from 'react';
import './Home.css';
import TableCompo from '../../component/TableCompo';
import TableSecCompo from '../../component/TableSecCompo';
import CardCompo from '../../component/CardCompo';

const carddata = [
  {
    price: '$ 400,000',
    title: 'Total budget you own',
    color: '#fff',
  },
  {
    price: '$ 299,762',
    title: 'Spent month-to-date',
    color: '#d3d3f680',
  },
  {
    price: '$ 2,874,582',
    title: 'Forecasted till month end',
    color: '#97f38880',
  },
];

const data1 = [
  {
    name: 'ACME crop',
    budget: '$ 200,000',
    spend: '$ 173,052',
    forecast: '$ 205,052',
  },
  {
    name: 'Raman Inc',
    budget: '$ 200,000',
    spend: '$ 124,052',
    forecast: '$ 292,052',
  },
];

const data2 = [
  {
    id: '123',
    bucketName: 'ACME crop',
    currentBudget: '$ 200,000',
    requestedBudget: '$ 250,000',
    requestedBy: 'Joe Hilfinger',
  },
];

const data3 = [
  {
    name: 'Longate',
    budget: '$ 200,000',
    spend: '$ 173,052',
    forecast: '$ 205,052',
  },
];
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="dd_flex">
                <h3>Hi,Jennie Moss</h3>
                <p>Last scanned on March 20th, 2023</p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-9 col-12 mx-auto">
              <div className="row">
                <CardCompo data={carddata} />
              </div>
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-10 col-11 mx-auto table_border">
              <TableCompo title="Buckets You Own" data={data1} />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-10 col-11 mx-auto table_border">
              <TableSecCompo title="Approvals assign to you" data={data2} />
            </div>
          </div>
          <div className="row mt-4 ">
            <div className="col-md-10 col-11 mx-auto table_border">
              <TableCompo title="Buckets You are member of " data={data3} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
