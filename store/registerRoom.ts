import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    bathroomCount: 1,
    bathroomType: null,
    country: '',
    city: '',
    district: '',
    streetAddress: '',
    detailAddress: '',
    postcode: '',
    latitude: 0,
    longitude: 0,
    amentites: [],
    conveniences: [],
    photos: [],
    description: '',
    title: '',
    price: 0,
    startDate: null,
    endDate: null,
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
            const bedroomCount = action.payload;
            let { bedList } = state;
            state.bedroomCount = bedroomCount;
            if (bedroomCount < bedList.length) {
                // 기존 침대 개수가 더 많으면 초과 부분 잘라내기
                bedList = state.bedList.slice(0, bedroomCount);
            } else {
                // 변경될 침대 개수가 더 많으면 나머지 침실 채우기
                for (let i = bedList.length + 1; i < bedroomCount + 1; i++) {
                    bedList.push({ id: i, beds: [] });
                }
            }
            state.bedList = bedList;
            return state;
        },
        setBedCount(state, action: PayloadAction<number>) {
            state.bedCount = action.payload;
            return state;
        },
        setBedTypeCount(
            state,
            action: PayloadAction<{
                bedroomId: number;
                type: BedType;
                count: number;
            }>
        ) {
            const { bedroomId, type, count } = action.payload;
            const bedroom = state.bedList[bedroomId - 1];
            const prevBeds = bedroom.beds;
            const index = prevBeds.findIndex((bed) => bed.type === type);
            if (index === -1) {
                // 타입이 없다면
                state.bedList[bedroomId - 1].beds = [
                    ...prevBeds,
                    { type, count },
                ];
                return state;
            }
            // 타입이 존재한다면
            if (count === 0) {
                state.bedList[bedroomId - 1].beds.splice(index, 1);
            } else {
                state.bedList[bedroomId - 1].beds[index].count = count;
            }
            return state;
        },
        setPublicBedTypeCount(
            state,
            action: PayloadAction<{ type: BedType; count: number }>
        ) {
            const { type, count } = action.payload;
            const index = state.publicBedList.findIndex(
                (bed) => bed.type === type
            );
            if (index === -1) {
                state.publicBedList = [...state.publicBedList, { type, count }];
                return state;
            }
            if (count === 0) {
                state.publicBedList.splice(index, 1);
            } else {
                state.publicBedList[index].count = count;
            }
            return state;
        },
        setBathroomCount(state, action: PayloadAction<number>) {
            state.bathroomCount = action.payload;
            return state;
        },
        setBathroomType(state, action: PayloadAction<'private' | 'public'>) {
            state.bathroomType = action.payload;
            return state;
        },
        setCountry(state, action: PayloadAction<string>) {
            state.country = action.payload;
            return state;
        },
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
            return state;
        },
        setDistrict(state, action: PayloadAction<string>) {
            state.district = action.payload;
            return state;
        },
        setStreetAddress(state, action: PayloadAction<string>) {
            state.streetAddress = action.payload;
            return state;
        },
        setDetailAddress(state, action: PayloadAction<string>) {
            state.detailAddress = action.payload;
            return state;
        },
        setPostcode(state, action: PayloadAction<string>) {
            state.postcode = action.payload;
            return state;
        },
        setLatitude(state, action: PayloadAction<number>) {
            state.latitude = action.payload;
            return state;
        },
        setLongitude(state, action: PayloadAction<number>) {
            state.longitude = action.payload;
            return state;
        },
        setAmentites(state, action: PayloadAction<string[]>) {
            state.amentites = action.payload;
            return state;
        },
        setConveniences(state, action: PayloadAction<string[]>) {
            state.conveniences = action.payload;
            return state;
        },
        setPhotos(state, action: PayloadAction<string[]>) {
            state.photos = action.payload;
        },
        setDescription(state, action: PayloadAction<string>) {
            state.description = action.payload;
            return state;
        },
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
            return state;
        },
        setPrice(state, action: PayloadAction<number>) {
            state.price = action.payload;
            return state;
        },
        setStartDate(state, action: PayloadAction<string | null>) {
            state.startDate = action.payload;
            return state;
        },
        setEndDate(state, action: PayloadAction<string | null>) {
            state.endDate = action.payload;
            return state;
        },
    },
});

export const registerRoomActions = { ...registerRoom.actions };

export default registerRoom;
