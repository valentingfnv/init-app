import { connect } from "react-redux";
import {
  editTitleFirstNameActionCreator,
  editTitleLastNameActionCreator,
  editTitlePositionActionCreator,
} from "../../../../redux/profileReducer";
import NameEdit from "./NameEdit";


function mapStateToProps(state) {
  return {
    title: state.profilePage.title,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editFirstName: (newFirstName) =>
      dispatch(editTitleFirstNameActionCreator(newFirstName)),
    editLastName: (newLastName) =>
      dispatch(editTitleLastNameActionCreator(newLastName)),
    editPositionName: (newPosition) =>
      dispatch(editTitlePositionActionCreator(newPosition)),
  };
}

const NameEditContainer = connect(mapStateToProps, mapDispatchToProps)(NameEdit);

export default NameEditContainer;
