import React from "react";
import {connect} from "react-redux";

const TableFilter = () => {

  return (
    <div className="table-filter">
      filter
    </div>
  );
};


const mapStateToProps = ({APP}) => ({
  items: APP.items,
  currentItem: APP.currentItem,
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TableFilter);
