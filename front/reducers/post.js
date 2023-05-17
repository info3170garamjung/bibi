

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
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_EDITING_STATUS = 'SET_EDITING_STATUS';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});
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


const reducer = (state = initialState, action) => {
  switch (action.type) {
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
