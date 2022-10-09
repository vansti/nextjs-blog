import { AppProps } from 'next/app';
import { FC, memo } from 'react';
import '../styles/global.css';

const App: FC<AppProps> = memo(({ Component, pageProps }) => {
	return (
		<Component {...pageProps} />
	)
});

export default App;