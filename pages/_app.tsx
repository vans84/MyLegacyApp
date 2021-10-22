import "../styles/globals.css";
import Layout from "../components/Layout";
import { DataProvider } from "../store/GlobalState";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );

            registration.addEventListener("updatefound", function () {
              const newWorker = registration.installing;
              var refreshing;

              newWorker.addEventListener("statechange", () => {
                if (newWorker.state == "activated") {
                  if (refreshing) return;
                  window.location.reload();
                  refreshing = true;
                }
              });
            });

            registration.addEventListener("statechange", () => {
              window.location.reload();
            });

            navigator.serviceWorker.addEventListener("message", (event) => {
              window.location.reload();
            });
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp;
