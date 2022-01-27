import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    reducers: {
        setLargeBuildingType(state, action: PayloadAction<string>) {
            if (action.payload === '') {
                state.largeBuildingType = null;
            } else {
                state.largeBuildingType = action.payload;
            }
            return state;
        },
        setBuildingType(state, action: PayloadAction<string>) {
            if (action.payload === '') {
                state.buildingType = null;
            } else {
                state.buildingType = action.payload;
            }
            return state;
        },
        setRoomType(
            state,
            action: PayloadAction<'entire' | 'private' | 'public'>
        ) {
            state.roomType = action.payload;
            return state;
        },
        setIsSetUpForGuest(state, action: PayloadAction<boolean>) {
            state.isSetUpForGuest = action.payload;
            return state;
        },
    },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
