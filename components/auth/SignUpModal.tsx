import React, { useState } from 'react';
import styled from 'styled-components';
import CloseXIcon from '../../public/static/svg/modal/modal-close-x-icon.svg';
import MailIcon from '../../public/static/svg/auth/mail.svg';
import PersonIcon from '../../public/static/svg/auth/person.svg';
import OpenedEyeIcon from '../../public/static/svg/auth/opened-eye.svg';
import ClosedEyeIcon from '../../public/static/svg/auth/closed-eye.svg';
import palette from '../../styles/palette';
import Input from '../Input';

const Container = styled.form`
    width: 568px;
    padding: 32px;
    background-color: white;
    z-index: 11;

    .modal-close-x-icon {
        cursor: pointer;
        display: block;
        margin: 0 0 40px auto;
    }

    .input-wrapper {
        position: relative;
        margin-bottom: 16px;
    }
    .sign-up-password-input-wrapper {
        svg {
            cursor: pointer;
        }
    }
`;

const SignUpModal: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [hidePassword, setHidePassword] = useState<boolean>(true);

    // 이메일 변경 시
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    // 이름 변경 시
    const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(event.target.value);
    };

    // 성 변경 시
    const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(event.target.value);
    };

    // 비밀번호 변경 시
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    // 비밀번호 숨김 토글하기
    const toggleHidePassword = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <Container>
            <CloseXIcon className="modal-close-x-icon" />
            <div className="input-wrapper">
                <Input
                    placeholder="이메일 주소"
                    type="email"
                    icon={<MailIcon />}
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                />
            </div>
            <div className="input-wrapper">
                <Input
                    placeholder="이름(예:길동)"
                    icon={<PersonIcon />}
                    value={lastname}
                    onChange={onChangeLastname}
                />
            </div>
            <div className="input-wrapper">
                <Input
                    placeholder="성(예:홍)"
                    icon={<PersonIcon />}
                    value={firstname}
                    onChange={onChangeFirstname}
                />
            </div>
            <div className="input-wrapper sign-up-password-input-wrapper">
                <Input
                    placeholder="비밀번호 설정하기"
                    type={hidePassword ? 'password' : 'text'}
                    icon={
                        hidePassword ? (
                            <ClosedEyeIcon onClick={toggleHidePassword} />
                        ) : (
                            <OpenedEyeIcon onClick={toggleHidePassword} />
                        )
                    }
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
        </Container>
    );
};

export default SignUpModal;
