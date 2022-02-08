// 침대 유형
declare type BedType =
    | '다른 침대 추가'
    | '소파'
    | '에어 매트릭스'
    | '요와 이불'
    | '싱글'
    | '더블'
    | '퀸'
    | '이층 침대'
    | '바닥용 에어매트릭스'
    | '유아 침대'
    | '유아용 침대'
    | '해먹'
    | '물침대';

declare type StoredRoomType = {
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
    // 욕실 개수
    bathroomCount: number;
    // 욕실 유형
    bathroomType: 'private' | 'public' | null;
    // 국가 지역
    country: string;
    // 시/도
    city: string;
    // 시/군/구
    district: string;
    // 도로명주소
    streetAddress: string;
    // 도로명주소
    detailAddress: string;
    // 우편번호
    postcode: string;
    // 위도
    latitude: number;
    // 경도
    longitude: number;
    // 편의 시설
    amentites: string[];
    // 편의공간
    conveniences: string[];
    // 숙소 사진
    photos: string[];
    // 숙소 설명
    description: string;
    // 숙소 제목
    title: string;
    // 숙소 요금
    price: number;
    // 예약 시작 날짜
    startDate: string | null;
    // 예약 마감 날짜
    endDate: string | null;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    hostId: number;
};

declare type RegisterRoomState = {
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
    // 욕실 개수
    bathroomCount: number;
    // 욕실 유형
    bathroomType: 'private' | 'public' | null;
    // 국가 지역
    country: string;
    // 시/도
    city: string;
    // 시/군/구
    district: string;
    // 도로명주소
    streetAddress: string;
    // 도로명주소
    detailAddress: string;
    // 우편번호
    postcode: string;
    // 위도
    latitude: number;
    // 경도
    longitude: number;
    // 편의 시설
    amentites: string[];
    // 편의공간
    conveniences: string[];
    // 숙소 사진
    photos: string[];
    // 숙소 설명
    description: string;
    // 숙소 제목
    title: string;
    // 숙소 요금
    price: number;
    // 예약 시작 날짜
    startDate: string | null;
    // 예약 마감 날짜
    endDate: string | null;
};

export type RoomType = {
    id: number;
    largeBuildingType: string | null;
    buildingType: string | null;
    roomType: string | null;
    isSetUpForGuest: number;
    maximumGuestCount: number;
    bedroomCount: number;
    bedCount: number;
    bedList: { id: number; beds: { type: BedType; count: number }[] }[];
    publicBedList: { type: BedType; count: number }[];
    bathroomCount: number;
    bathroomType: 'private' | 'public';
    latitude: number;
    longitude: number;
    country: string;
    city: string;
    district: string;
    streetAddress: string;
    detailAddress: string;
    postcode: string;
    amentities: string[];
    conveniences: string[];
    photos: string[];
    description: string;
    title: string;
    price: string;
    startDate: string;
    endDate: string;
    createdAt: string;
    updatedAt: string;
    host: UserType;
};
