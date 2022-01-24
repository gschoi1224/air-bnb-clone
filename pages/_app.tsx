import App, { AppContext, AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../store';
import { cookieStringToObject } from '../lib/utils';
import axios, { CommonHeaderProperties } from '../lib/api';
import { meAPI } from '../lib/api/auth';
import { userActions } from '../store/user';

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
            <div id="root-modal" />
        </>
    );
};

app.getInitialProps = wrapper.getInitialAppProps(
    (store) => async (context: AppContext) => {
        const appInitialProps = await App.getInitialProps(context);
        const cookieObject = cookieStringToObject(
            context.ctx.req?.headers.cookie
        );
        const { isLogged } = store.getState().user;
        try {
            // 리덕스 스토어의 isLogged가 true이거나 access_token이 없다면 api 보내지 않음
            if (!isLogged && cookieObject.access_token) {
                axios.defaults.headers = {
                    cookie: cookieObject.access_token,
                } as CommonHeaderProperties;
                const { data } = await meAPI();
                store.dispatch(userActions.setLoggedUser(data));
            }
        } catch (e) {
            console.log(e);
        }
        return { ...appInitialProps };
    }
);

export default wrapper.withRedux(app);
