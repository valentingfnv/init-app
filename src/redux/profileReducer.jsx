const EDIT_TITLE = 'EDIT-TITLE'
const ADD_SKILLS = 'ADD-SKILLS'


// let initialState = {
//     mainSkillsItem : [
//       {id:1 , name:'JavaScript'},
//       {id:2 , name:'Python'},
//       {id:3 , name:'HTML'},
//       {id:4 , name:'CSS'}
      
//     ],
    
//   secondSkillsItem : [
//       {id:1 , name:'React.JS'},
//       {id:2 , name:'Node.JS'},
//       {id:3 , name:'Django'},
//       {id:4 , name:'LESS, SCSS'},
//       {id:5 , name:'GIT'}
//     ],
    
//     contactsItem : [
//       {id:1, name:'phone', value:'89287634105' },
//       {id:2, name:'mail', value:'valentingfnv@yandex.ru' },
//       {id:3, name:'telegram', value:'@valentingfnv' }
//     ],

//     title : {
//       name : '',
//       post : ''
//     }
//   }

 const profileReducer = (state, action) => {
     switch (action.type) {
         case EDIT_TITLE:
            state.title.name = action.name
            state.title.post = action.post
            return state
        case ADD_SKILLS:
            let newSkillsItem = {
                id: 5,
                name: action.skill
            }
            state.mainSkillsItem.push(newSkillsItem)
            return state     
         default:
            return state;
     }

    
}

export const editTitleActionCreator = (newName, newPost) => 
  ({type : EDIT_TITLE, name : newName, post : newPost})

export const addSkillsActionCreator = (newSkills) => 
  ({type : ADD_SKILLS, skill : newSkills})

export default profileReducer