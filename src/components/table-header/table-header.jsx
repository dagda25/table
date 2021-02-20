import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import store from "../../store/store";


const TableHeader = (props) => {
  const {data, sortColumn, sortOrder, changeSorting} = props;
  const head = data[0];
  let headCode = [];
  for (let column in head) {
    if (head.hasOwnProperty(column)) {
      headCode.push(column);
    }
  }

  const sort = (evt) => {
    console.log(evt.target.dataset.name);
    store.dispatch(changeSorting(evt.target.dataset.name));
  };


  return (
    <thead>
      <tr>
        {
          headCode.map((col, index) => {
            return <td key={index} onClick={sort} data-name={col} data-sort={sortColumn === col ? sortOrder : ``}>{col}</td>;
          })
        }
      </tr>
    </thead>
  );
};


const mapStateToProps = ({APP}) => ({
  data: APP.data,
  sortColumn: APP.sortColumn,
  sortOrder: APP.sortOrder,
});

const mapDispatchToProps = (dispatch) => ({
  changeSorting(column) {
    dispatch(ActionCreator.changeSorting(column));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
