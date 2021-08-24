const EDIT_TITLE_FIRST_NAME = "EDIT_TITLE_FIRST_NAME";
const EDIT_TITLE_LAST_NAME = "EDIT_TITLE_LAST_NAME";
const EDIT_TITLE_POSITION = "EDIT_TITLE_POSITION";
const ADD_SKILLS = "ADD-SKILLS";

let initialState = {
  mainSkillsItem: [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Python" },
    { id: 3, name: "HTML" },
    { id: 4, name: "CSS" },
  ],

  secondSkillsItem: [
    { id: 1, name: "React.JS" },
    { id: 2, name: "Node.JS" },
    { id: 3, name: "Django" },
    { id: 4, name: "LESS, SCSS" },
    { id: 5, name: "GIT" },
  ],

  contactsItem: [
    { id: 1, name: "phone", value: "89287634105" },
    { id: 2, name: "mail", value: "valentingfnv@yandex.ru" },
    { id: 3, name: "telegram", value: "@valentingfnv" },
  ],

  title: {
    firstName: "Valentin",
    lastName: "Agafonov",
    position: "FrontEnd devoloper",
  },
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  stateCopy.title = {...state.title}
  switch (action.type) {
    case EDIT_TITLE_FIRST_NAME:
      stateCopy.title.firstName = action.firstName;
      return stateCopy;

    case EDIT_TITLE_LAST_NAME:
      stateCopy.title.lastName = action.lastName;
      return stateCopy;

    case EDIT_TITLE_POSITION:
      stateCopy.title.position = action.position;
      return stateCopy;

    case ADD_SKILLS:
      let newSkillsItem = {
        id: 5,
        name: action.skill,
      };
      state.mainSkillsItem.push(newSkillsItem);
      return state;
    default:
      return state;
  }
};

export const editTitleFirstNameActionCreator = (newFirstName) => ({
  type: EDIT_TITLE_FIRST_NAME,
  firstName: newFirstName,
});
export const editTitleLastNameActionCreator = (newLastName) => ({
  type: EDIT_TITLE_LAST_NAME,
  lastName: newLastName,
});
export const editTitlePositionActionCreator = (newPosition) => ({
  type: EDIT_TITLE_POSITION,
  position: newPosition,
});

export const addSkillsActionCreator = (newSkills) => ({
  type: ADD_SKILLS,
  skill: newSkills,
});

export default profileReducer;
