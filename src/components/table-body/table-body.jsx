import React from "react";
import {connect} from "react-redux";
import TableRow from "../table-row/table-row";


const TableBody = (props) => {
  const {data, filterString, filteredData} = props;
  return (
    <tbody>
      {filterString ?
        filteredData.map((row, index) => {
          return <TableRow row={row} key={row.id || index}/>;
        }) :
        data.map((row, index) => {
          return <TableRow row={row} key={row.id || index}/>;
        })
      }
    </tbody>
  );
};


const mapStateToProps = ({APP}) => ({
  data: APP.data,
  filteredData: APP.filteredData,
  filterString: APP.filterString,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
