

import React, {useState} from "react";
import { 
  ReadOutlined,
  WalletOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/router';

import { Menu } from 'antd';
const { SubMenu } = Menu;
import Link from 'next/link';
import { categories } from './categories';
const Category = ({ onClick }) => {
  
  const router = useRouter();

  const handleCategoryClick = (category) => {

    router.push(`/category/${category.title}`);
  };

  const [openKeys, setOpenKeys] = useState(['sub2']); // 기본적으로 sub2가 열려있게 설정

  const handleMenuOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <>
    <div className="menu-container">
      <Menu
        onClick={onClick}
        openKeys={openKeys} // openKeys prop 추가
        onOpenChange={handleMenuOpenChange} // onOpenChange prop 추가
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="portfolio" icon={<WalletOutlined />}>Portfolio</Menu.Item>
        <Menu.Divider />
        <SubMenu key="sub2" icon={<ReadOutlined />} title="My Study">
          {categories.map(category => (
            <Menu.Item key={category.key} onClick={() => handleCategoryClick(category)}>
              {category.href ? (
                <Link href={category.href}>{category.title.toLowerCase()}</Link>
              ) : category.title.toLowerCase()}
            </Menu.Item>
          ))}
        </SubMenu>
        <Menu.Divider />
      </Menu>
      </div>
    </>
  );
};

export default Category;
