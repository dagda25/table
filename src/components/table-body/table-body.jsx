import React from "react";
import {connect} from "react-redux";
import TableRow from "../table-row/table-row";
import {settings} from "../../utils/const";


const TableBody = (props) => {
  const {data, filterString, filteredData, currentPage} = props;
  const itemsOnPage = settings.ITEMS_ON_PAGE;
  return (
    <tbody>
      {filterString ?
        filteredData.slice(itemsOnPage * (currentPage - 1), itemsOnPage * currentPage).map((row, index) => {
          return <TableRow row={row} key={row.id || index}/>;
        }) :
        data.slice(itemsOnPage * (currentPage - 1), itemsOnPage * currentPage).map((row, index) => {
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
  currentPage: APP.currentPage,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TableBody);
