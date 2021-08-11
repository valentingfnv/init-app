
import { connect } from "react-redux";
import Profile from "./Profile";

function mapStateToProps(state) {
  return {
    title: state.profilePage.title,
    mainSkillsItem: state.profilePage.mainSkillsItem,
    secondSkillsItem: state.profilePage.secondSkillsItem,
    contactsItem: state.profilePage.contactsItem,
  };
};


const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;
