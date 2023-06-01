

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

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
