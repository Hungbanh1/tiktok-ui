import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import HeaderMenu from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Menu({ children, items = [], onChange, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];
    const renderItems = () => {
        // return items.map((item, index) => <MenuItem key={index} data={item} />);
        return current.data.map((item, index) => {
            const isParent = !!item.children; // vs nhung thang nao k co children thi under, th nao co chil thi la ob ,!! là convert boolean , !! trong th co thi la true
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        // console.log(item.children);
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    // console.log(renderItems);
    return (
        <Tippy
            // visible
            interactive
            offset={[12, 8]}
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <HeaderMenu
                            title="Language"
                            onBack={() => {
                                setHistory((prev) => prev.slice(0, prev.length - 1));
                            }}
                        />
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
