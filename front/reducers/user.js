
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
 signUpData: [],
  loginData: {},
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  verifyEmailLoading: false,
  verifyEmailDone: false,
  verifyEmailError: null,
}


export const VERIFY_EMAIL_REQUEST = 'VERIFY_EMAIL_REQUEST';
export const VERIFY_EMAIL_SUCCESS = 'VERIFY_EMAIL_SUCCESS';
export const VERIFY_EMAIL_FAILURE = 'VERIFY_EMAIL_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_UP_RESET = 'SIGN_UP_RESET';

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


export const verifyEmailRequestAction = (email) => {
  return {
    type: VERIFY_EMAIL_REQUEST,
    data: { email },
  }
};

export const changeNicknameRequestAction = (nickname) => {
  return {
    type: CHANGE_NICKNAME_REQUEST,
    data: nickname,
  }
};


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
    case SIGN_UP_RESET:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: false,
        signUpError: null,
        verifyEmailDone: false,
      }
    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        verifyEmailLoading: true,
        verifyEmailDone: false,
        verifyEmailError: null,
      };
    case VERIFY_EMAIL_SUCCESS:
      const emailExists = state.signUpData.find(user => user.email === action.data.email);
      console.log('action.data', action.data); // 이메일이 정확히 전달되었는지 확인
      console.log('emailExists', emailExists); // 이메일이 중복되는 경우 emailExists 값 확인
      console.log('action.data.email', action.data.email);
      if (emailExists) {
        return {
          ...state,
          verifyEmailLoading: false,
          verifyEmailDone: true,
          verifyEmailError: "The email already exists."
        };
      } else {
        return {
          ...state,
          verifyEmailLoading: false,
          verifyEmailDone: true,
          //verifyEmailError: null,
        };
      }
    case VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        verifyEmailLoading: false,
        verifyEmailError: action.error,
      }
    case CHANGE_NICKNAME_REQUEST:
      return {
        ...state,
        changeNicknameLoading : true,
        changeNicknameDone: false,
        changeNicknameError: null,
      }
        case CHANGE_NICKNAME_SUCCESS:
          return {
            ...state,
            me: {
              ...state.me,
              nickname: action.data,
            },
            changeNicknameLoading: false,
            changeNicknameDone: true,
          }
  
      case CHANGE_NICKNAME_FAILURE:
        return {
          ...state,
          changeNicknameLoading: false,
          changeNicknameError: action.error,
        }
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
        return {
          ...state, 
          logInLoading: false,
          logInDone: true,
          me: user,
          logInError: null, // 로그인 성공 시 에러 메세지 초기화
        };
      } else {
        return {
          ...state,
          logInLoading: false,
          logInDone: false,
          logInError: 'Email or password does not match',
        };
      }
   case LOG_IN_FAILURE:
    return {
      ...state,
      logInLoading: false,
      logInError: action.error || 'Unexpected error occurred', 
    }


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
        logInDone: false, 
        me: null,
      };
    

    case LOG_OUT_FAILURE: 
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
    case SIGN_UP_RESET:
      return {
        ...state,
        signUpDone: false,
        signUpError: null,
      }
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
        signUpData: state.signUpData.concat(action.data)
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