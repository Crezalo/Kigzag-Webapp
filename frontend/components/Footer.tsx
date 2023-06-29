import Link from "next/link";
import Image from "next/image";
import kigzaglogo from "../public/crezalo-logo-box-full.png";
import React from "react";
import { useScreenSize } from "../services/utility";
import { clickEvent } from "../services/analytics";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const url = router.asPath;
  const ismobile = useScreenSize()?.width < useScreenSize()?.height;
  const atCreatorProfile = () => {
    return url.includes("/creatorprofile/");
  };

  return (
    <div>
      {atCreatorProfile() ? (
        <footer
          className="blueTextBlackBackground"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10vh",
            fontSize: "10px",
          }}
        >
          <Link legacyBehavior href="/">
            <a
              style={{ marginTop: "2px" }}
              onClick={() => clickEvent("Footer_RedirectToInfoWebsite")}
            >
              <div>
                <span style={{ color: "white", paddingLeft: "5px" }}>
                  Powered By
                </span>
                <Image
                  src={kigzaglogo}
                  alt="Crezalo Logo"
                  width={70}
                  height={20}
                />
              </div>
            </a>
          </Link>
        </footer>
      ) : (
        <footer>
          {ismobile ? (
            <></>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  fontSize: "10px",
                  margin: "15vh 5px 5px 5px",
                }}
              >
                <Link
                  legacyBehavior
                  href={process.env.NEXT_STATIC_TOS_WEBSITE_URL}
                >
                  <a
                    style={{ marginTop: "2px" }}
                    onClick={() => clickEvent("Footer_RedirectToToS")}
                  >
                    <span
                      style={{
                        color: "#3B82F6",
                        textDecoration: "underline",
                        paddingRight: "10px",
                      }}
                    >
                      Terms & Conditions
                    </span>
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href={process.env.NEXT_STATIC_PP_WEBSITE_URL}
                >
                  <a
                    style={{ marginTop: "2px" }}
                    onClick={() => clickEvent("Footer_RedirectToPP")}
                  >
                    <span
                      style={{
                        color: "#3B82F6",
                        textDecoration: "underline",
                        paddingRight: "10px",
                      }}
                    >
                      Privacy Policy
                    </span>
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href={process.env.NEXT_STATIC_TOS_RP_WEBSITE_URL}
                >
                  <a
                    style={{ marginTop: "2px" }}
                    onClick={() => clickEvent("Footer_RedirectToRP")}
                  >
                    <span
                      style={{
                        color: "#3B82F6",
                        textDecoration: "underline",
                        paddingRight: "10px",
                      }}
                    >
                      Return Policy
                    </span>
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href={process.env.NEXT_STATIC_AU_WEBSITE_URL}
                >
                  <a
                    style={{ marginTop: "2px" }}
                    onClick={() => clickEvent("Footer_RedirectToAU")}
                  >
                    <span
                      style={{
                        color: "#3B82F6",
                        textDecoration: "underline",
                        paddingRight: "10px",
                      }}
                    >
                      About Us
                    </span>
                  </a>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  fontSize: "10px",
                }}
              >
                <span
                  style={{
                    color: "lightgrey",
                    paddingRight: "10px",
                    fontSize: "9px",
                    textAlign: "center",
                    opacity: "50%",
                  }}
                >
                  2023 © Copyright, Gandhi Rajeshkumar Champaklal HUF. All
                  rights reserved.
                </span>
              </div>
            </>
          )}
        </footer>
      )}
    </div>
  );
};
export default Footer;
