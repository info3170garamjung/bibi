

export const initialState = {
  mainPosts: [{
    id: '1stId',
    User: {
      id: 1,
      nickname: 'bibi',
    },
    category: 'Javascript',
    content: '1st content',
    title: '1st title'
  }],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  category: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  isEditing: false,
  editPostLoading: false,
  editPostDone: false,
  editPostError: null,
  showPostForm: false,
  selectedMenu: null,

}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_EDITING_STATUS = 'SET_EDITING_STATUS';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

export const SET_SHOW_POST_FORM = 'SET_SHOW_POST_FORM';
export const SELECT_MENU_ITEM = 'SELECT_MENU_ITEM';


export const showPostFormAction = (show) => ({
  type: SET_SHOW_POST_FORM,
  data: show,
});


export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const editPost = (updatedPostData) => ({
  type: EDIT_POST_REQUEST,
  data: updatedPostData,
});

export const setEditingStatus = (isEditing) => ({
  type: SET_EDITING_STATUS,
  data: isEditing,
})
/*
const dummyPost = (data) => ({
  id:shortId.generate(),
  title: data.title,
  category: data.category,
  content: data.content || '',
  User: {
    id: 1,
    nickname: 'bibi',
  },
});
*/
export const setSelectMenuAction = (selectedMenu) => ({
  type: SELECT_MENU_ITEM,
  data: selectedMenu,
})


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MENU_ITEM:
      return {
        ...state,
        selectedMenu: action.data,
      };

    case SET_SHOW_POST_FORM:
      return {
        ...state,
        showPostForm: action.data,
      };
    case EDIT_POST_REQUEST:
      return {
        ...state,
        editPostLoading: true,
        editPostDone: false,
        editPostError: null,
      }
    case EDIT_POST_SUCCESS:
      const editedPostIndex = state.mainPosts.findIndex((post) => post.id === action.data.id);
      const editedMainPosts = [...state.mainPosts];
      editedMainPosts[editedPostIndex] = action.data;
        return {
          ...state,
          mainPosts: editedMainPosts,
          editPostLoading: false,
          editPostDone: true,
        }
      case EDIT_POST_FAILURE:
        return {
          ...state,
          editPostLoading: false,
          editPostError: action.error,
        }
    case SET_EDITING_STATUS:
      return {
        ...state,
        isEditing: action.data
      }
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
      case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }
      case REMOVE_POST_REQUEST:
        return {
          ...state,
          removePostLoading: true,
          removePostDone: false,
          removePostError: null,
        }
      case REMOVE_POST_SUCCESS:
        return {
          ...state,
          mainPosts: state.mainPosts.filter((v) => v.id !== action.data.id),
          removePostLoading: false,
          removePostDone: true,
        }
      case REMOVE_POST_FAILURE:
        return {
          ...state,
          removePostLoading: false,
          removePostError: action.error,
        }
      default: 
      return state;
  }
};

export default reducer;
