import '../pages/style.css';
import NewTable from "../components/NewTable";

export default function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} />
  <NewTable/> 
  </>;
}