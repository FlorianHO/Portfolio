import { useRouter } from "next/router";
import fr from "../content/Fr.jsx";
import en from "../content/En.jsx";

const Loader = () => {
  const router = useRouter();
  const { locale } = router;
  const language = locale === "fr" ? fr : en;

  return (
    <>
      <main id="Loader">
        <div className="container-loader">
          <h1>{language.load}</h1>
        </div>
      </main>
    </>
  );
};

export default Loader;
