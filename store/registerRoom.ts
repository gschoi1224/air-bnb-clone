import { createSlice } from '@reduxjs/toolkit';

type RegisterRoomState = {
    // 건물 유형 큰 범주
    largeBuildingType: string | null;
    // 건물 유형
    buildingType: string | null;
    // 숙소 유형
    roomType: string | null;
    // 게스트만을 위해 만들어진 숙소인가
    isSetUpForGuest: boolean | null;
};

// 초기 상태
const initialState: RegisterRoomState = {
    largeBuildingType: null,
    buildingType: null,
    roomType: null,
    isSetUpForGuest: null,
};

const registerRoom = createSlice({
    name: 'registerRoom',
    initialState,
    reducers: {},
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
