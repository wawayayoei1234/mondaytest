
import { DataProvider } from '@/context';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return ( 
    <div>
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </div>
   );
 }