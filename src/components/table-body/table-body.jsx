import React from "react";
import {connect} from "react-redux";
import TableRow from "../table-row/table-row";


const TableBody = (props) => {
  const {data} = props;
  return (
    <tbody>
      {data.map((row, index) => {
        return <TableRow row={row} key={row.id || index}/>;
      })}
    </tbody>
  );
};


const mapStateToProps = ({APP}) => ({
  data: APP.data,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
