import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { UserProvider } from "@auth0/nextjs-auth0/client";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </UserProvider>
  );
}

export default MyApp;
