import React from "react";
import {connect} from "react-redux";


const TablePagination = () => {

  return (
    <div className="table-pagination">
      pagination
    </div>
  );
};


const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);
