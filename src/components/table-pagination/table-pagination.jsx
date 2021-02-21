import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {settings} from "../../utils/const";


const TablePagination = (props) => {

  const {data, currentPage, filteredData, changePage} = props;
  const pageCount = filteredData.length ? Math.ceil(filteredData.length / settings.ITEMS_ON_PAGE) : Math.ceil(data.length / settings.ITEMS_ON_PAGE);

  const handleClick = (evt) => {
    if (evt.target.dataset.page !== currentPage) {
      changePage(+evt.target.dataset.page);
    }

  };


  return (
    <ul className="pagination">
      {[...Array(pageCount)].map((x, i) =>
        <li className={currentPage === i + 1 ? `active` : `waves-effect`} key={i}><a href="#!" onClick={handleClick} data-page={i + 1}>{i + 1}</a></li>
      )}
    </ul>
  );
};


const mapStateToProps = ({APP}) => ({
  data: APP.data,
  currentPage: APP.currentPage,
  filteredData: APP.filteredData,
});

const mapDispatchToProps = (dispatch) => ({
  changePage(page) {
    dispatch(ActionCreator.changePage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TablePagination);
