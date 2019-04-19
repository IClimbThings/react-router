import React, { Component } from "react";
import queryString from 'query-string';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class StockOrderDetail extends Component {
  render() {
    const columns = [{
      Header: 'Part Number',
      accessor: 'partNumber'
    }, {
      Header: 'Price',
      accessor: 'price'
    }, {
      Header: 'Description',
      accessor: 'description'
    }]
    const values = queryString.parse(this.props.location.search);
    return (
      <div>
        <div>
          <p>Stock Order Detail</p>
          <p>{values.oem}</p>
        </div>
        <div>
          <ReactTable data={values.oem === 'GM' ? GM : Ford} columns={columns} />
        </div>
      </div>
    );
  }
};

let GM = [
  {
    partNumber: "123",
    price: "10.99",
    description: "Exhaust Manifold"
  },
  {
    partNumber: "125",
    price: "5.99",
    description: "Headlight"
  },
  {
    partNumber: "999",
    price: "100.99",
    description: "Wiperblades"
  },
  {
    partNumber: "777",
    price: "10.00",
    description: "Hood"
  },
  {
    partNumber: "159",
    price: "4564.45",
    description: "Windshield"
  },
  {
    partNumber: "486",
    price: "78.45",
    description: "Transmission"
  },
];

let Ford = [
  {
    partNumber: "123",
    price: "11.99",
    description: "Exhaust Manifold"
  },
  {
    partNumber: "125",
    price: "15.99",
    description: "Headlight"
  },
  {
    partNumber: "999",
    price: "1000.99",
    description: "Wiperblades"
  },
  {
    partNumber: "777",
    price: "100.00",
    description: "Hood"
  },
  {
    partNumber: "159",
    price: "45640.45",
    description: "Flux Capacitor"
  },
  {
    partNumber: "486",
    price: "780.45",
    description: "Transmission"
  },
];

export default StockOrderDetail;