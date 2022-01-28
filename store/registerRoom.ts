import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BedType } from '../types/room';

type RegisterRoomState = {
    // 건물 유형 큰 범주
    largeBuildingType: string | null;
    // 건물 유형
    buildingType: string | null;
    // 숙소 유형
    roomType: string | null;
    // 게스트만을 위해 만들어진 숙소인가
    isSetUpForGuest: boolean | null;
    // 최대 숙박 인원
    maximumGuestCount: number;
    // 침실 개수
    bedroomCount: number;
    // 침대 개수
    bedCount: number;
    // 침대 유형
    bedList: { id: number; beds: { type: BedType; count: number }[] }[];
    // 공용공간 침대 유형
    publicBedList: { type: BedType; count: number }[];
};

// 초기 상태
const initialState: RegisterRoomState = {
    largeBuildingType: null,
    buildingType: null,
    roomType: null,
    isSetUpForGuest: null,
    maximumGuestCount: 1,
    bedroomCount: 0,
    bedCount: 1,
    bedList: [],
    publicBedList: [],
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
        setMaximumGuestCount(state, action: PayloadAction<number>) {
            state.maximumGuestCount = action.payload;
            return state;
        },
        setBedroomCount(state, action: PayloadAction<number>) {
            state.bedroomCount = action.payload;
            return state;
        },
        setBedCount(state, action: PayloadAction<number>) {
            state.bedCount = action.payload;
            return state;
        },
    },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
