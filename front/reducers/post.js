

export const initialState = {
  mainPosts: [
    {
    id: '1stId',
    User: {
      id: 1,
      nickname: 'bibi',
    },
    category: 'JavaScript',
    content: '<strong>JavaScript Object:</strong> An object in JavaScript, like in real life, can be seen as a collection of properties. A property is a key-value pair where the key is typically a string, and the value can be anything. For example, a car object might have properties like brand, model, and color. Objects in JavaScript are dynamic, which means that properties can be added, modified, and deleted after the creation of an object.',
    title: 'Javascript-Object',
    createdAt: '2023-01-01'
  },
  {
    id: '2stId',
    User: {
      id: 2,
      nickname: 'pinkTape',
    },
    category: 'JavaScript',
    content: '<strong>JavaScript Array:</strong> In JavaScript, arrays are used to store multiple values in a single variable. Arrays can contain any type of elements, including numbers, strings, objects or even other arrays. They are zero-indexed: the first element is indexed with the number 0. JavaScript arrays are dynamic, so you can add and remove elements from an array at any time.',
    title: 'Javascript-Array',
    createdAt: '2023-01-02'
  },
  {
    id: '3stId',
    User: {
      id: 3,
      nickname: 'master',
    },
    category: 'TypeScript',
    content: '<strong>TypeScript vs JavaScript:</strong> TypeScript is a super set of JavaScript. It has been built and maintained by Microsoft and was first launched in 2012. TypeScript is JavaScript but with a type layer on top. This means that your JavaScript code can be written in TypeScript. With the type layer, we have better tooling and can spot errors at compile time rather than at run time.',
    title: 'Difference between Typescript and Javascript',
    createdAt: '2023-01-05',
  },
  {
    id: '4stId',
    User: {
      id: 4,
      nickname: 'red tiger',
    },
    category: 'React',
    content: '<strong>React DOM:</strong> ReactDOM is the glue between React and the DOM. Often, you will use it to hook up React to an existing DOM node with the ReactDOM.render() method. ReactDOM provides a few other methods you might find useful, however, most of your interaction with ReactDOM will be through the React component API.',
    title: 'React Dom',
    createdAt: '2023-01-07'
  },
  {
    id: '5stId',
    User: {
      id: 5,
      nickname: 'Blue sky',
    },
    category: 'NodeJS',
    content: '<strong>NodeJS:</strong> Node.js is an open-source, cross-platform JavaScript runtime environment for server-side and networking applications. Node.js applications are written in JavaScript and can be run within the Node.js runtime on a wide variety of platforms. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.',
    title: 'What is NodeJS?',
    createdAt: '2023-01-01'
  },
  {
    id: '6stId',
    User: {
      id: 6,
      nickname: 'foodTrack',
    },
    category: 'GIT',
    content: '<strong>Github:</strong> GitHub is a web-based hosting service for version control using Git. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its main goals include speed, data integrity, and support for distributed, non-linear workflows.',
    title: 'What is Github?',
    createdAt: '2023-01-02'
  },
  {
    id: '7stId',
    User: {
      id: 7,
      nickname: 'nero',
    },
    category: 'JavaScript',
    content: '<strong>JavaScript Types:</strong> JavaScript is a dynamically typed language. This means you do not have to specify the data type of a variable when you declare it, and data types can change within the script at runtime. JavaScript has six primitive data types: undefined, null, boolean, number, string, and symbol. There is also a complex data type, the Object.',
    title: 'Javascript-Type',
    createdAt: '2023-01-04'
  },
  {
    id: '8stId',
    User: {
      id: 8,
      nickname: 'rami',
    },
    category: 'JavaScript',
    content: '<strong>JavaScript Functions:</strong> In JavaScript, a function allows you to define a block of code, give it a name and then execute it as many times as you want. A function can be defined using function declaration, function expression, or using the newer ES6 arrow functions. Functions can also be defined as methods in objects.',
    title: 'Javascript-Function',
    createdAt: '2023-01-05'
  },
  {
    id: '9stId',
    User: {
      id: 9,
      nickname: '02rem',
    },
    category: 'JavaScript',
    content: '<strong>JavaScript Classes:</strong> JavaScript classes introduced in ES6 are syntactical sugar over JavaScript’s existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript. A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class.',
    title: 'Javascript-Class',
    createdAt: '2023-01-06'
  },
  {
    id: '10stId',
    User: {
      id: 10,
      nickname: 'card11',
    },
    category: 'JavaScript',
    content: '<strong>JavaScript JSON:</strong> JSON stands for JavaScript Object Notation. It is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page). JSON is a language-independent data format.',
    title: 'Javascript-JSON',
    createdAt: '2023-01-01'
  },
  {
    id: '11stId',
    User: {
      id: 11,
      nickname: 'red',
    },
    category: 'Announce',
    content: '<strong>Announcement Update:</strong> We are excited to announce several key updates to our platform. Firstly, we have introduced a 150-character preview of posts to give you a snapshot of the content before diving in. In addition, the creation date is now prominently displayed on each post, providing a clear timeline of information. For ease of data management, we have incorporated a table deletion feature. Lastly, in our effort to personalize your experience, you can now update your profile picture. We believe these updates will significantly enhance your user experience, as we continue to make our platform more user-centric and intuitive.',
    title: 'Announcement Update',
    createdAt: '2023-07-10'
  },


],
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
