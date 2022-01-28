import React from 'react';
import styled from 'styled-components';
import { BedType } from '../../types/room';
import RegisterRoomBedTypes from './RegisterRoomBedTypes';

const Container = styled.ul`
    width: 548px;
`;

interface IProps {
    bedList: { id: number; beds: { type: BedType; count: number }[] }[];
}

const RegisterRoomBedList: React.FC<IProps> = ({ bedList }) => {
    return (
        <Container>
            {bedList.map((bedroom) => (
                <RegisterRoomBedTypes bedroom={bedroom} key={bedroom.id} />
            ))}
        </Container>
    );
};

export default RegisterRoomBedList;
