import { UserType } from './user';

// 유저 redux state
declare type UserState = UserType & {
    isLogged: boolean;
};

// 공통 redux state
declare type CommonState = {
    validateMode: boolean;
};
