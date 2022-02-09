import React from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { wrapper } from '../../store';
import RoomMain from '../../components/room/main/RoomMain';
import { getRoomListAPI } from '../../lib/api/room';
import { roomActions } from '../../store/room';
import { RoomType } from '../../types/room';

const index: NextPage<{ rooms: RoomType[] }> = ({ rooms }) => {
    const dispatch = useDispatch();
    dispatch(roomActions.setRooms(rooms));
    return <RoomMain />;
};

export const getServerSideProps = wrapper.getServerSideProps(
    store => async req => {
        const {
            checkOutDate,
            adultCount,
            childrenCount,
            latitude,
            longitude,
            limit,
            page = '1',
            checkInDate,
        } = req.query;
        try {
            const { data } = await getRoomListAPI({
                checkInDate,
                checkOutDate,
                adultCount,
                childrenCount,
                latitude,
                longitude,
                limit: limit || '20',
                page: page || '1',
                // 한글은 encode
                location: req.query.location
                    ? encodeURI(req.query.location as string)
                    : undefined,
            });
            store.dispatch(roomActions.setRooms(data));
            return { props: { rooms: data } };
        } catch (e) {
            console.log(e);
        }
        return { props: null };
    }
);

export default index;
