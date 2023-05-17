
export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null,
  //me: {},
 signUpData: [],
  loginData: {},
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';


export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
/*
const dummyUser = (data) => ({
  ...data,
  nickname: 'bibi',
  id: 1,
  Posts: [],
});
*/




export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
};

export const logoutRequestAction = () => {
  return {
  type: LOG_OUT_REQUEST,
  }
};


export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: 
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false
      }; 
case LOG_IN_SUCCESS: 
  const loggedInUser = state.signUpData.find(user => user.email === action.data.email && user.password === action.data.password); 
  if (loggedInUser) {
    const user = {
      email: loggedInUser.email,
      password: loggedInUser.password,
      nickname: loggedInUser.nickname,
      id: loggedInUser.id,
    };
    console.log('user', user);
    console.log('me', state.me);
    
    const newState = {
      ...state,
      logInLoading: false,
      logInDone: true,
      me: user,
    };

    console.log('newState.me', newState.me);
    console.log('newState.me.id', newState.me.id);

    return newState;
    } else {
      return {
        ...state,
      logInLoading: false,
      logInDone: false,
      logInError: '로그인에 실패하였습니다',
      };
    }
    
    case LOG_IN_FAILURE: 
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      }; 
    


    case LOG_OUT_REQUEST: 
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };
    

    case LOG_OUT_SUCCESS: 
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      };
    

    case LOG_OUT_FAILURE: 
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
    


      case SIGN_UP_REQUEST: 
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };

      case SIGN_UP_SUCCESS: 
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
       signUpData: [{ ...action.data }]
  
    };

      case SIGN_UP_FAILURE: 
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
        case ADD_POST_TO_ME:
          return {
            ...state,
            me: {
              ...state.me,
              Posts: [{ id: action.data.id, ...action.data }],
            },
          };
    default: {
      return {
        ...state,
      }
    }
  }
};