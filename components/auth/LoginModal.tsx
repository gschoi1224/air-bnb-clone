import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import CloseXIcon from '../icons/CloseXIcon';
import MailIcon from '../icons/MailIcon';
import ClosedEyeIcon from '../icons/ClosedEyeIcon';
import OpenedEyeIcon from '../icons/OpenedEyeIcon';
import palette from '../../styles/palette';
import Button from '../common/Button';
import Input from '../common/Input';
import { authActions } from '../../store/auth';
import { loginAPI } from '../../lib/api/auth';
import useValidateMode from '../../hooks/useValidateMode';
import { userActions } from '../../store/user';

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
    .login-input-wrapper {
        position: relative;
        margin-bottom: 16px;
    }
    .login-password-input-wrapper {
        svg {
            cursor: pointer;
        }
    }
    .login-modal-submit-button-wrapper {
        margin-bottom: 16px;
        padding-bottom: 16px;
        border-bottom: 1px solid ${palette.gray_eb};
    }
    .login-modal-set-signup {
        color: ${palette.dark_cyan};
        margin-left: 8px;
        cursor: pointer;
    }
`;

interface IProps {
    closeModal: () => void;
}

const LoginModal: React.FC<IProps> = ({ closeModal }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordHided, setIsPasswordHided] = useState<boolean>(true);

    // 이메일 주소 변경 시
    const onChangeEmail = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        },
        []
    );
    // 비밀번호 변경 시
    const onChangePassword = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
        },
        []
    );
    // 비밀번호 보이기 변경
    const togglePasswordHiding = useCallback(() => {
        setIsPasswordHided(!isPasswordHided);
    }, [isPasswordHided]);

    const dispatch = useDispatch();
    // 회원가입 모달로 변경하기
    const changeToSignUpModal = useCallback(() => {
        dispatch(authActions.setAuthMode('signup'));
    }, []);

    const { setValidateMode } = useValidateMode();

    // 로그인 클릭시
    const onSubmitLogin = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setValidateMode(true);
            if (!email || !password) {
                alert('이메일과 비밀번호를 입력해주세요.');
            } else {
                const loginBody = { email, password };
                try {
                    const { data } = await loginAPI(loginBody);
                    dispatch(userActions.setLoggedUser(data));
                    closeModal();
                    console.log(data);
                } catch (e) {
                    console.log(e);
                }
            }
        },
        [email, password]
    );

    // 클린업 validateMode 초기화
    useEffect(() => {
        return () => {
            setValidateMode(false);
        };
    }, []);
    return (
        <Container onSubmit={onSubmitLogin}>
            <CloseXIcon className="modal-close-x-icon" onClick={closeModal} />
            <div className="login-input-wrapper">
                <Input
                    placeholder="이메일 주소"
                    name="email"
                    type="email"
                    icon={<MailIcon />}
                    value={email}
                    onChange={onChangeEmail}
                    isValid={!!email}
                    errorMessage="이메일이 필요합니다."
                    useValidation
                />
            </div>
            <div className="login-input-wrapper login-password-input-wrapper">
                <Input
                    placeholder="비밀번호 설정하기"
                    icon={
                        isPasswordHided ? (
                            <ClosedEyeIcon onClick={togglePasswordHiding} />
                        ) : (
                            <OpenedEyeIcon onClick={togglePasswordHiding} />
                        )
                    }
                    type={isPasswordHided ? 'password' : 'text'}
                    value={password}
                    onChange={onChangePassword}
                    isValid={!!password}
                    errorMessage="비밀번호를 입력하세요."
                    useValidation
                />
            </div>
            <div className="login-modal-submit-button-wrapper">
                <Button type="submit">로그인</Button>
            </div>
            <p>
                이미 에어비앤비 계정이 있나요?
                <span
                    onClick={changeToSignUpModal}
                    className="login-modal-set-signup"
                    role="presentation"
                >
                    회원가입
                </span>
            </p>
        </Container>
    );
};

export default LoginModal;
