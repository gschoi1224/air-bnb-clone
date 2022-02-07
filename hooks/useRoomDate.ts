import { useDispatch } from 'react-redux';
import { useSelector } from '../store';
import { serachRoomActions } from '../store/searchRoom';

const useSearchRoomDate = () => {
    const checkInDate = useSelector(state => state.searchRoom.checkInDate);
    const checkOutDate = useSelector(state => state.searchRoom.checkOutDate);

    const dispatch = useDispatch();

    // 체크인 날짜 변경
    const setCheckInDateDispatch = (date: Date | null) => {
        if (date) {
            dispatch(serachRoomActions.setStartDate(date.toISOString()));
        } else {
            dispatch(serachRoomActions.setEndDate(null));
        }
    };

    // 체크아웃 날짜 변경
    const setCheckOutDateDispatch = (date: Date | null) => {
        if (date) {
            dispatch(serachRoomActions.setEndDate(date.toISOString()));
        } else {
            dispatch(serachRoomActions.setStartDate(null));
        }
    };

    return {
        checkInDate: checkInDate ? new Date(checkInDate) : null,
        checkOutDate: checkOutDate ? new Date(checkOutDate) : null,
        setCheckInDateDispatch,
        setCheckOutDateDispatch,
    };
};

export default useSearchRoomDate;
