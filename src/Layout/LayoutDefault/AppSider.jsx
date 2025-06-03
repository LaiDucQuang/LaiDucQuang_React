import { Menu } from 'antd';
import {
  HomeOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  BarChartOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Link } from 'react-router';

function AppSider(props) {
  const { collapse } = props;
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ height: '100%', borderRight: "1px solid #ddd" }}
    >
      {/* Home */}
      <Menu.Item key="1" icon={<HomeOutlined />}>

        <Link to="/"> {!collapse && 'Home'} </Link>

      </Menu.Item>

      {/* product */}
      <Menu.Item key="2" icon={<ShoppingOutlined />}>

        <Link to="/product"> {!collapse && 'Products'} </Link>

      </Menu.Item>

      {/* Cart */}
      <Menu.Item key="3" icon={<ShoppingCartOutlined />}>

        <Link to="/cart"> {!collapse && 'Carts'} </Link>

      </Menu.Item>

      {/* Customers */}
      <Menu.Item key="4" icon={<UserOutlined />}>

        <Link to="/noinfo"> {!collapse && 'Customers'} </Link> 

      </Menu.Item>

      {/* Reports */}
      <Menu.Item key="5" icon={<BarChartOutlined />}>

        <Link to="/noinfo">  {!collapse && 'Reports'}</Link>

      </Menu.Item>

      {/* Setting */}
      <Menu.Item key="6" icon={<SettingOutlined />}>

        <Link to="/noinfo">   {!collapse && 'Settings'} </Link>

      </Menu.Item>

      {/* Logout */}
      <Menu.Item key="7" icon={<LogoutOutlined />} danger>

        <Link to="/noinfo">  {!collapse && 'Logout'} </Link>
        
      </Menu.Item>

    </Menu>
  );
}

export default AppSider;
