import { connect } from "react-redux";
import { editTitleFirstNameActionCreator,
          editTitleLastNameActionCreator,
          editTitlePositionActionCreator } from "../../redux/profileReducer";

import Edit from "./Edit";

function mapStateToProps(state) {
  return {
    title: state.profilePage.title,
  }

}

function mapDispatchToProps(dispatch) {
  return {
    editFirstName: (newFirstName) => dispatch(editTitleFirstNameActionCreator(newFirstName)),
    editLastName: (newLastName) => dispatch(editTitleLastNameActionCreator(newLastName)),
    editPositionName: (newPosition) => dispatch(editTitlePositionActionCreator(newPosition)),
    addSkills: (newSkills) => dispatch(newSkills),
  };
}

const EditContainer = connect(mapStateToProps, mapDispatchToProps)(Edit);

export default EditContainer;
