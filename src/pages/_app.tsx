import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Space_Mono } from "next/font/google";

const font = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
