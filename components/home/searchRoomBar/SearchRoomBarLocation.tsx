import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import isEmpty from 'lodash/isEmpty';
import { useSelector } from '../../../store';
import { serachRoomActions } from '../../../store/searchRoom';

import palette from '../../../styles/palette';
import { getPlaceAPI, searchPlacesAPI } from '../../../lib/api/map';
import useDebounce from '../../../hooks/useDebounce';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    border: 2px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
        border-color: ${palette.gray_dd};
    }
    .search-room-bar-location-texts {
        position: absolute;
        width: calc(100% - 40px);
        top: 16px;
        left: 20px;
        .search-room-bar-location-label {
            font-size: 10px;
            font-weight: 800;
            margin-bottom: 4px;
        }
        input {
            width: 100%;
            border: 0;
            font-size: 14px;
            font-weight: 600;
            outline: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &::placeholder {
                font-size: 14px;
                opacity: 0.7;
            }
        }
    }
    .search-room-bar-location-results {
        position: absolute;
        background-color: white;
        top: 78px;
        width: 500px;
        padding: 16px 0;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        border-radius: 32px;
        cursor: default;
        overflow: hidden;
        z-index: 10;
        li {
            display: flex;
            align-items: center;
            height: 64px;
            padding: 8px 32px;
            cursor: pointer;
            &:hover {
                background-color: ${palette.gray_f7};
            }
        }
    }
`;

const SearchRoomBarLocation: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const location = useSelector(state => state.searchRoom.location);
    const dispatch = useDispatch();

    // ?????? ??????
    const [results, setResults] = useState<
        { description: string; placeId: string }[]
    >([]);

    // ?????? ?????? Dispatch
    const setLocationDispatch = (value: string) => {
        dispatch(serachRoomActions.setLocation(value));
    };

    // ?????? ??????
    const setLatitudeDispatch = (value: number) => {
        dispatch(serachRoomActions.setLatitude(value));
    };

    // ?????? ??????
    const setLongitudeDispatch = (value: number) => {
        dispatch(serachRoomActions.setLongitude(value));
    };

    // ?????? ?????? ?????? ?????? ???
    const [popupOpened, setPopupOpened] = useState<boolean>(false);
    const onClickNearPlace = () => {
        setPopupOpened(false);
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                setLocationDispatch('?????? ?????? ??????');
                setLatitudeDispatch(coords.latitude);
                setLongitudeDispatch(coords.longitude);
            },
            e => {
                console.log(e);
            }
        );
    };

    const onClickInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        setPopupOpened(true);
    };

    const searchKeyword = useDebounce(location, 150);

    const searchPlaces = async () => {
        try {
            const { data } = await searchPlacesAPI(encodeURI(location));
            setResults(data);
        } catch (e) {
            console.log(e);
        }
    };

    // ???????????? ????????? ????????? ??????
    useEffect(() => {
        if (!searchKeyword) {
            setResults([]);
        }
        if (searchKeyword) {
            searchPlaces();
        }
    }, [searchKeyword]);

    // ????????? ?????? ?????????
    const onClickResult = async (placeId: string) => {
        try {
            const { data } = await getPlaceAPI(placeId);
            setLocationDispatch(data.location);
            setLatitudeDispatch(data.latitude);
            setLongitudeDispatch(data.longitude);
            setPopupOpened(false);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Container onClick={onClickInput}>
            <OutsideClickHandler onOutsideClick={() => setPopupOpened(false)}>
                <div className="search-room-bar-location-texts">
                    <p className="search-room-bar-location-label">??????</p>
                    <input
                        ref={inputRef}
                        value={location}
                        onChange={e => setLocationDispatch(e.target.value)}
                        placeholder="????????? ?????? ??????????"
                    />
                </div>
                {popupOpened && location !== '?????? ?????? ??????' && (
                    <ul className="search-room-bar-location-results">
                        {!location && (
                            <li
                                role={'presentation'}
                                onClick={onClickNearPlace}
                            >
                                ?????? ?????? ??????
                            </li>
                        )}
                        {!isEmpty(results) &&
                            results.map((result, index) => (
                                <li
                                    key={index}
                                    onClick={() => {
                                        onClickResult(result.placeId);
                                    }}
                                    role="presentation"
                                >
                                    {result.description}
                                </li>
                            ))}
                        {location && isEmpty(results) && (
                            <li>?????? ????????? ????????????.</li>
                        )}
                    </ul>
                )}
            </OutsideClickHandler>
        </Container>
    );
};

export default SearchRoomBarLocation;
