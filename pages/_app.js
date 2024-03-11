
import { MyProvider } from '@/context';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return ( 
    <div>
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    </div>
   );
 }