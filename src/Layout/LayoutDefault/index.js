import { Avatar, Layout } from 'antd';
import "./LayoutDefault.scss";
import Logo from "../../images/logo.png";
import LogoFold from "../../images/logo-fold.png";
import { SearchOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Link, Outlet } from "react-router-dom";
import CartMini from '../../components/CartMini/index.js';
import Notify from '../../components/Notify/index.js';
import Sider from 'antd/es/layout/Sider.js';
import AppSider from './AppSider.jsx';
import UseCollapse from '../../Hooks/UseCollapse.js';
import avatar from "../../images/avatar.jpg"

const { Footer,Content } = Layout;

function LayoutDefault() {

    const [collapse, setCollapse] = UseCollapse(768);
    return (
        <>
            <Layout className='layout-default'>
                <header className='header'>
                    <Link to="/" className={'header__logo ' + (collapse && "header__logo--collapse")}>
                        <img src={collapse ? LogoFold : Logo} alt='logo' />
                    </Link>
                    <div className='header__nav'>
                        <div className='header__nav-left'>
                            <div className='header__collapse' onClick={() => setCollapse(!collapse)}><MenuUnfoldOutlined /></div>
                            <div className='header__search'><SearchOutlined /></div>
                        </div>
                        <div className='header__nav-right'>
                            <div className='header__nav-right-notify'><Notify/></div>
                            <div className='header__nav-right-img'><Avatar src={avatar} alt='avt'/></div>
                            <div className='header__nav-right-cart'><CartMini /></div>
                        </div>
                    </div>
                </header>
                <Layout>
                    <Sider collapsed={collapse} theme='light' className='sider'>
                        <AppSider collapse ={collapse} />
                    </Sider>
                    <Content className={collapse ? 'content--collapse':'content'}><Outlet /></Content>
                </Layout>
                <Footer className='footer'><p>&copy; 2025 My Website</p></Footer>
            </Layout>
        </>
    )
}
export default LayoutDefault;