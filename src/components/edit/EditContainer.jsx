import { connect } from "react-redux";
import {
  editTitleActionCreator,
  addSkillsActionCreator,
} from "../../redux/profileReducer";
import Edit from "./Edit";

function mapDispatchToProps(dispatch) {
  return {
    addName: (newName, newPost) => {
      return dispatch(editTitleActionCreator(newName, newPost));
    },

    addSkills: (newSkills) => dispatch(addSkillsActionCreator(newSkills)),
  };
}

const EditContainer = connect(null, mapDispatchToProps)(Edit);

export default EditContainer;
