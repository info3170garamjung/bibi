import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`



.custom-div {
  max-width: 100%;
}


blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  font-size: 1.25em;
  border-left: 5px solid #eee;
}

.ant-input::placeholder {
  font-family: 'Bitter';
  font-size: 0.8rem;
}

.ant-select-selection-placeholder {
  font-family: 'Bitter';
  font-size: 0.8rem;
}

.ant-form-item-label > label {
  font-family: 'Bitter';
  font-size: 1.5rem;
  color: #474747;
}

  .ant-menu-item-selected {
    font-weight: 500 !important;
    color: #4d4f4e !important;
    background-color: #f5f5f5 !important;
  }

  .ant-menu-item {
    color: #b7b9bd;
  }

  
  &&& {
    color: #4d4f4e !important;;
  }

  &&&.ant-menu-submenu-selected > .ant-menu-submenu-title {
    color: #4d4f4e !important;;
    background-color: #f5f5f5 !important;;
  }
`;

export default GlobalStyles;
