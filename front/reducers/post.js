import shortId from 'shortid';

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
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const SET_CATEGORY = 'SET_CATEGORY';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
      case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }
      default: 
      return state;
  }
};

export default reducer;
