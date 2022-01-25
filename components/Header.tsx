import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AirbnbLogoIcon from '../public/static/svg/logo/logo.svg';
import AirbnbLogoTextIcon from '../public/static/svg/logo/logo_text.svg';
import palette from '../styles/palette';
import useModal from '../hooks/useModal';
import { useSelector } from '../store';
import AuthModal from './auth/AuthModal';
import HeaderAuths from './HeaderAuths';
import HeaderUserProfile from './HeaderUserProfile';

const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
    z-index: 10;
    .header-logo-wrapper {
        display: flex;
        align-items: center;
        .header-logo {
            margin-right: 6px;
        }
    }
    /** 헤더 로그인 회원가입 버튼 */
    .header-auth-buttons {
        .header-sign-up-button {
            height: 42px;
            margin-right: 8px;
            padding: 0 16px;
            border: 0;
            border-radius: 21px;
            background-color: white;
            cursor: pointer;
            outline: none;
            &:hover {
                background-color: ${palette.gray_f7};
            }
        }
        .header-login-button {
            height: 42px;
            padding: 0 16px;
            border: 0;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
            border-radius: 21px;
            background-color: white;
            outline: none;
            cursor: pointer;
            &:hover {
                box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
            }
        }
    }
    .header-user-profile {
        display: flex;
        align-items: center;
        height: 42px;
        padding: 0 6px 0 16px;
        border: 0;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
        border-radius: 21px;
        background-color: white;
        cursor: pointer;
        outline: none;
        &:hover {
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
        }
        .header-user-profile-image {
            margin-left: 8px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
    .header-logo-wrapper + div {
        position: relative;
    }
    .header-usermenu {
        position: absolute;
        right: 0;
        top: 52px;
        width: 240px;
        padding: 8px 0;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        background-color: white;
        li {
            display: flex;
            align-items: center;
            width: 100%;
            height: 42px;
            padding: 0 16px;
            cursor: pointer;
            &:hover {
                background-color: ${palette.gray_f7};
            }
        }
        .header-usermenu-divider {
            width: 100%;
            height: 1px;
            margin: 8px 0;
            background-color: ${palette.gray_dd};
        }
    }
`;

const Header: React.FC = () => {
    const { ModalPortal, closeModal } = useModal();
    // useSelector는 객체의 주소를 비교하는데 유저 정보가 변경되어 user가 변경된다면 객체가 새로 만들어져 user 객체를 불러온 컴포넌트는 전부 리렌더됨
    const user = useSelector((state) => state.user);
    return (
        <Container>
            <Link href="/">
                <a className="header-logo-wrapper">
                    <AirbnbLogoIcon className="header-logo" />
                    <AirbnbLogoTextIcon />
                </a>
            </Link>
            {!user.isLogged && <HeaderAuths />}
            {user.isLogged && <HeaderUserProfile />}
            <ModalPortal>
                <AuthModal closeModal={closeModal} />
            </ModalPortal>
        </Container>
    );
};

export default Header;
