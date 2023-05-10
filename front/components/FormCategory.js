import React from 'react';
import { Select } from 'antd';
import { categories } from './categories';

const FormCategory = ({ handleChangeCategory }) => {
  return (
    <Select onChange={handleChangeCategory}>
      {categories.map((category) => (
        <Select.Option key={category.key} value={category.title}>
          {category.title}
        </Select.Option>
      ))}
    </Select>
  );
};

export default FormCategory;