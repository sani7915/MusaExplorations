import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TagManager from "react-gtm-module";
import { useTranslation } from "react-i18next";

function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [t] = useTranslation("global");

  const handleAcceptedCookies = () => {
    setShowBanner(false);
    localStorage.setItem("accepted-cookies", JSON.stringify(true));
    TagManager.initialize({ gtmId: "GTM-T9QKL2PR" });
    TagManager.dataLayer({ dataLayer: { event: "cookies-aceptadas" } });
  };
  const handleRejectedCookies = () => {
    setShowBanner(false);
    localStorage.setItem("rejected-cookies", JSON.stringify(true));
  };

  useEffect(() => {
    // let timeOut;
    const getAcceptedCookies = JSON.parse(
      localStorage.getItem("accepted-cookies")
    );
    const getRejectedCookies = JSON.parse(
      localStorage.getItem("rejected-cookies")
    );

    if (!getAcceptedCookies) {
      if (!getRejectedCookies) setShowBanner(true);
    } else {
      setShowBanner(false);
    }
    // const handleTimeOut = () => {
    //   clearTimeout(timeOut);
    //   timeOut = setTimeout(() => {
    //     setShowBanner(true);
    //   }, 5000);
    // };
    // const handleShowBanner = () => {
    //   if (!getLS) {
    //     showBanner(false)
    //   } else {
    //     TagManager.initialize({ gtmId: "GTM-T9QKL2PR" });
    //     TagManager.dataLayer({ dataLayer: { event: "cookies-aceptadas" } });
    //   }
    // };
    // handleShowBanner();

    const handleScroll = () => {
      if (!getAcceptedCookies) {
        if (!getRejectedCookies)
        handleAcceptedCookies();
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBanner]);

  return (
    <div
      className={`cookies-banner ${showBanner ? "d-block" : "d-none"}`}
    >
      <div className="d-flex flex-wrap justify-content-center">
        <p className="text-center  m-0 fs-14">
          {t("cookiesBanner.text")}
          <Link
            to={"/privacy-policy#cookies"}
            className="nav-link d-inline mt-2 ms-1"
          >
            {t("cookiesBanner.link")}
          </Link>
        </p>
        <div className="d-flex w-100 justify-content-center mt-2">
          <button
            className="banner_button mx-1"
            onClick={handleAcceptedCookies}
          >
            {t("cookiesBanner.button")}
          </button>
          <button
            className="banner_button_ghost"
            onClick={handleRejectedCookies}
          >
            rechazar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookiesBanner;
