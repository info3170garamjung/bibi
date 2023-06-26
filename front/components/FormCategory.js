import React from 'react';
import { Select } from 'antd';
import { categories } from './categories';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
/* Select 컴포넌트에 대한 스타일 */

&.custom-select-placeholder-med .ant-select-selector .ant-select-selection-placeholder {
  font-size: 22px;
  font-weight: bold;
}

&.custom-select-placeholder-med .ant-select-selector {
  border: none;
}

&.custom-select-placeholder-med .ant-select-selector:focus {
  border-color: none;
  box-shadow: none;

}

&.custom-select-placeholder-med .ant-select-selector,
&.custom-select-placeholder-med .ant-select-focused .ant-select-selector {
  border-color: none !important;
  box-shadow: none !important;
}
`


const FormCategory = ({ handleChangeCategory, selectedCategory }) => {
  return (
    <StyledSelect
    onChange={handleChangeCategory} 
    value={selectedCategory} 
    placeholder='Choose category'
    className="custom-select-placeholder-med"    
    >
      {categories.map((category) => (
        <Select.Option 
        key={category.key} 
        value={category.title}
        disabled={category.title === 'All'}
        >
          {category.title}
        </Select.Option>
      ))}
    </StyledSelect>
  );
};

export default FormCategory;