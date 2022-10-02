import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '~/components/Search';
import { Link } from 'react-router-dom';

import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsis,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
// import Tippy from '@tippyjs/react';
import Image from '~/components/Image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { Mailbox, Message, UploadIcon } from '~/components/Icons';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

const MEUNU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];
// console.log(images.logo);
function Header() {
    const currentUser = true;
    //handle logic
    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@sbtcesports',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MEUNU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <h2 className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    {/* //sua link logo  */}
                    {/* */}
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="TikTok" />{' '}
                    </Link>
                </div>
                {/* /// search  */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        // <div className={cx('current-user')}></div>
                        <>
                            <Tippy delay={[0, 150]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 150]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Message />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 150]} content="Mailbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <Mailbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <div>
                            <Button text>Upload</Button>
                            <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button>
                            {/* *1 */}
                        </div>
                    )}
                    <Menu items={currentUser ? userMenu : MEUNU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                // src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8026f62e97c52a812d12cf547bfa8515~c5_100x100.jpeg?x-expires=1664614800&x-signature=z6qEGeESR%2Bq%2BRvs2od6X3iXB4WA%3D"
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_100x100.jpeg?x-expires=1651658400&x-signature=zeUCDyTxctGYZ5%2Bsh422klviXFE%3D"
                                fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </h2>
    );
}
{
}
export default Header;
