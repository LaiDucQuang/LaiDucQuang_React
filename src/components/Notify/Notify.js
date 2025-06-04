import { BellOutlined, FileDoneOutlined, KeyOutlined, MailOutlined, MutedOutlined, WarningOutlined } from '@ant-design/icons';

export const items = [
    {
        label: (
            <div className="notify__item">
                <div className="notify__item-icon"><BellOutlined /></div>
                <div className="notify__item-content">
                    <div className="notify__item-title">You have a new message</div>
                    <div className="notify__item-time">23 min ago</div>
                </div>
            </div>
        ),
        key: '1',
    },
    {
        label: (
            <div className="notify__item">
                <div className="notify__item-icon"><MutedOutlined /></div>
                <div className="notify__item-content">
                    <div className="notify__item-title">System update available</div>
                    <div className="notify__item-time">3 hours ago</div>
                </div>
            </div>
        ),
        key: '2',
    },
    {
        label: (
            <div className="notify__item">
                <div className="notify__item-icon"><FileDoneOutlined /></div>
                <div className="notify__item-content">
                    <div className="notify__item-title">Backup completed successfully</div>
                    <div className="notify__item-time">17 min ago</div>
                </div>
            </div>
        ),
        key: '3',
    },
    {
        label: (
            <div className="notify__item">
                <div className="notify__item-icon"><WarningOutlined /></div>
                <div className="notify__item-content">
                    <div className="notify__item-title">Low disk space warning</div>
                    <div className="notify__item-time">6 hours ago</div>
                </div>
            </div>
        ),
        key: '4',
    },
    {
        label: (
            <div className="notify__item">
                <div className="notify__item-icon"><MailOutlined /></div>
                <div className="notify__item-content">
                    <div className="notify__item-title">New email received</div>
                    <div className="notify__item-time">12 min ago</div>
                </div>
            </div>
        ),
        key: '5',
    },
    {
        label: (
            <div className="notify__item">
                <div className="notify__item-icon"><KeyOutlined /></div>
                <div className="notify__item-content">
                    <div className="notify__item-title">Password changed successfully</div>
                    <div className="notify__item-time">9 min ago</div>
                </div>
            </div>
        ),
        key: '6',
    },
];