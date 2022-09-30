import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

const MEUNU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
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
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;
    //handle logic
    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

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
                    <img src={images.logo} alt="TikTok" />
                </div>
                <HeadlessTippy
                    // visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Accounts</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        {/* <img src={images.logo} alt="TikTok" /> */}
                        <input placeholder="Search account and video" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        {/* Dùng tippy tooltip */}
                        {/* <Tippy content="Tìm kiếm" placement="right">
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Tippy> */}

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    {currentUser ? (
                        // <div className={cx('current-user')}></div>
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                                    <UploadIcon />
                                </button>
                                {/* <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button> */}
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
    /* <Tippy (*1)
                            // visible
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h3 className={cx('search-title')}>Accounts</h3>
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                        <AccountItem />
                                    </PopperWrapper>
                                </div>
                            )}
                        > */
}
export default Header;
