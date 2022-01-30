import React from 'react';
import styled from 'styled-components';
import { countryList } from '../../../lib/staticData';
import palette from '../../../styles/palette';
import Button from '../../common/Button';
import Input from '../../common/Input';
import Selector from '../../common/Selector';
import { NavigationIcon } from '../../icons';

const Container = styled.div`
    padding: 62px 30px 100px;
    h2 {
        font-size: 19px;
        font-weight: 800;
        margin-bottom: 56px;
    }
    h3 {
        font-weight: bold;
        color: ${palette.gray_76};
        margin-bottom: 6px;
    }
    .register-room-step-info {
        font-size: 14px;
        max-width: 400px;
        margin-bottom: 24px;
    }
    .register-room-location-button-wrapper {
        width: 190px;
        margin-bottom: 24px;
    }
    .register-room-location-country-selector-wrapper {
        width: 385px;
        margin-bottom: 24px;
    }
`;

const RegisterLocation: React.FC = () => {
    return (
        <Container>
            <h2>숙소의 위치를 알려주세요.</h2>
            <h3>4단계</h3>
            <p className="register-room-step-info">
                정확한 숙소 주소는 게스트가 예약을 완료한 후에만 공개됩니다.
            </p>
            <div className="register-room-location-button-wrapper">
                <Button
                    color="dark_cyan"
                    colorReverse
                    icon={<NavigationIcon />}
                >
                    현재 위치 사용
                </Button>
            </div>
            <div className="register-room-location-country-selector-wrapper">
                <Selector
                    type="register"
                    options={countryList}
                    useValidation={false}
                    defaultValue="국가/지역 선택"
                    disabledOptions={['국가/지역 선택']}
                />
            </div>
            <div className="register-room-location-city-district">
                <Input label="시/도" />
                <Input label="시/군/구" />
            </div>
            <div className="register-room-location-street-address">
                <Input label="도로명주소" />
            </div>
            <div className="register-room-location-detail-address">
                <Input label="동호수(선택 사항" useValidation={false} />
            </div>
            <div className="register-room-location-postcode">
                <Input label="우편번호" />
            </div>
        </Container>
    );
};
export default RegisterLocation;
