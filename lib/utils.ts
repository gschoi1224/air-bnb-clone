// token=value를 {token: value}로 바꾸는 함수
export const cookieStringToObject = (cookieString: string | undefined) => {
    const cookies: { [key: string]: string } = {};
    if (cookieString) {
        const itemString = cookieString?.split(/\s*;\s*/);
        itemString.forEach(pairs => {
            const pair = pairs.split(/\s*=\s*/);
            cookies[pair[0]] = pair.splice(1).join('=');
        });
    }
    return cookies;
};

// string에서 number 만 return 하는 함수
export const getNumber = (string: string) => {
    const numbers = string.match(/\d/g)?.join('');
    if (numbers) {
        return Number(numbers);
    }
    return null;
};

// ,가 포함된 금액 형식으로 입력값 변경하는 함수
export const makeMoneyString = (money: number) => money.toLocaleString();

// query string 만들기
export const makeQueryString = (
    baseUrl: string,
    queriesObject: Object & { [key: string]: any }
) => {
    const keys = Object.keys(queriesObject);
    const values = Object.values(queriesObject);
    if (keys.length === 0) {
        return baseUrl;
    }
    let queryString = `${baseUrl}?`;
    keys.forEach((key, i) => {
        if (queriesObject[key]) {
            queryString += `${keys[i]}=${values[i]}&`;
        }
    });
    // 마지막 & 제거
    return queryString.slice(0, -1);
};
