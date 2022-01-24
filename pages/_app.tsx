import App, { AppContext, AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../store';
import { cookieStringToObject } from '../lib/utils';
import axios, { CommonHeaderProperties } from '../lib/api';

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
            <div id="root-modal" />
        </>
    );
};

app.getInitialProps = async (context: AppContext) => {
    const appInitialProps = await App.getInitialProps(context);
    const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
    axios.defaults.headers = {
        cookie: cookieObject.access_token,
    } as CommonHeaderProperties;
    console.log(cookieObject);
    return { ...appInitialProps };
};

export default wrapper.withRedux(app);
