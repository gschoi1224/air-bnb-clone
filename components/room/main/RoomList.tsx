import React from 'react';
import styled from 'styled-components';
import { useSelector } from '../../../store';

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    width: 100%;
`;

const RoomList: React.FC = () => {
    const rooms = useSelector(state => state.room.rooms);
    return <Container>{rooms.map(room => '룸카드')}</Container>;
};

export default RoomList;
