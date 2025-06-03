import { BellOutlined } from '@ant-design/icons';
import { Dropdown, Button } from 'antd';
import {items} from "./Notify.js"
import "./Notify.css"
function Notify() {

    return (
        <>
            <Dropdown menu={{ items }} trigger={['click']}
                dropdownRender={(menu) => (
                    <>
                        <div className='notify__dropdown'>
                            <div className='notify__header'>
                                <div className='notify__header-title'><BellOutlined /> Notification</div>
                                <Button type="link" className='notify__header-view'>View All</Button>
                            </div>
                            <div className='notify__body'>
                                {menu}
                            </div>
                        </div>
                    </>

                )}
            >
                <Button type="text" icon={<BellOutlined />} className='notify__button'></Button>
            </Dropdown>
        </>
    )
}
export default Notify;