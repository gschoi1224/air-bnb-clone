import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { format } from 'date-fns';
import { useSelector } from '../../../store';
import palette from '../../../styles/palette';
import { MapIcon } from '../../icons';
import RoomList from './RoomList';

const RoomListMap = dynamic(() => import('./RoomListMap'), { ssr: false });

const Container = styled.div<{ showMap: boolean }>`
    padding: 50px 88px;
    margin: auto;

    .room-list-info {
        margin-bottom: 8px;
    }
    .room-list-title {
        font-size: 32px;
        font-weight: 800;
        margin-bottom: 24px;
    }
    .room-list-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .room-list-buttons-left-side {
            display: flex;
            button {
                height: 36px;
                padding: 0 16px;
                margin-right: 8px;
                border-radius: 30px;
                border: 1px solid ${palette.gray_b0};
                background-color: white;
                cursor: pointer;
                outline: none;
                &:hover {
                    border-color: ${palette.black};
                }
            }
        }
        .room-list-show-map-button {
            display: flex;
            align-items: center;
            height: 42px;
            padding: 12px;
            background-color: white;
            border-radius: 8px;
            border: 0;
            background-color: white;
            cursor: pointer;
            outline: none;
            &:hover {
                background-color: ${palette.gray_f7};
            }
            svg {
                margin-right: 8px;
            }
        }
    }
    .room-list-wrapper {
        display: flex;
    }

    ${({ showMap }) =>
        showMap &&
        css`
            width: 848px;
            padding: 50px 24px;
            margin: 0;
        `}
    .flex {
        display: flex;
    }
`;

const RoomMain: React.FC = () => {
    const rooms = useSelector(state => state.room.rooms);
    const checkInDate = useSelector(state => state.searchRoom.checkInDate);
    const checkOutDate = useSelector(state => state.searchRoom.checkOutDate);

    const [showMap, setShowMap] = useState<boolean>(false);

    const checkInStr = checkInDate
        ? `${checkInDate ? format(new Date(checkInDate), 'MM??? dd???') : ''}`
        : '';

    const checkOutStr = checkInDate
        ? `${checkOutDate ? format(new Date(checkOutDate), 'MM??? dd???') : ''}`
        : '';

    const getRoomListInfo = `${rooms.length}?????? ?????? ${checkInStr} - ${checkOutStr}`;

    return (
        <Container showMap={showMap}>
            <p className="room-list-info">{getRoomListInfo}</p>
            <h1 className="room-list-title">??????</h1>
            <div className="room-list-buttons">
                <div className="room-list-buttons-left-side">
                    <button type="button">?????? ??????</button>
                    <button type="button">??????</button>
                </div>
                {!showMap && (
                    <button
                        type="button"
                        className="room-list-show-map-button"
                        onClick={() => {
                            setShowMap(!showMap);
                        }}
                    >
                        <MapIcon /> ?????? ????????????
                    </button>
                )}
            </div>
            <div className="room-list-wrapper">
                <RoomList showMap={showMap} />
                {showMap && (
                    <RoomListMap showMap={showMap} setShowMap={setShowMap} />
                )}
            </div>
        </Container>
    );
};

export default RoomMain;
