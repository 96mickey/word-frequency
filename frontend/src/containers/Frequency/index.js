import React from "react";

const Frequency = props => {
  if (props.data.length === 0)
    return <div>Enter a number to Fetch Some Data!</div>;
  else {
    let dataToRender = props.data.map(item => (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.total}</td>
      </tr>
    ));
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>{dataToRender}</tbody>
        </table>
      </div>
    );
  }
};

export default Frequency;
