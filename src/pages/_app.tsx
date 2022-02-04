import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { AuthProvider } from '../service/context/AuthContext';
import { ChatProvider } from '../service/context/ChatContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChatProvider>
        <Component {...pageProps} />
      </ChatProvider>
    </AuthProvider>
  );
}

export default MyApp;
