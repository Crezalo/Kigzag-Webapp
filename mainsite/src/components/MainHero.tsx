// import axios from "axios";
import React from "react";
// import styles from "../styles/Home.module.css";

import config from "../config/index.json";

const MainHero = () => {
  const { mainHero } = config;

  // const [email, setEmail] = useState("");
  // const [hasSubmitted, setHasSubmitted] = useState(false);
  // const [error, setError] = useState(null);

  // const submit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   try {
  //     const data = { email: email };
  //     let response = await axios.post(config.waitlisturl, {
  //       data,
  //     });
  //     if (response.data.isSuccessful) {
  //       setHasSubmitted(true);
  //     } else {
  //       setError(response.data.errorMsg);
  //     }
  //   } catch (err) {
  //     setHasSubmitted(true);
  //     console.log(err);
  //   }
  // };

  return (
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">{mainHero.title}</span>{" "}
          <span className={`block text-primary xl:inline`}>
            {mainHero.subtitle}
          </span>
        </h1>
        <p className="mt-3 text-secondary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          {mainHero.description}
        </p>
        {/* Join Waitlist */}
        {/* {hasSubmitted ? (
          <div className={styles.formWrapper}>
            <span className={styles.subtitle}>
              Thanks for signing up! We will be in touch soon.
            </span>
          </div>
        ) : (
          <form className={styles.formWrapper} onSubmit={submit}>
            <input
              type="email"
              required
              placeholder="Email"
              className={[styles.formInput, styles.formTextInput].join(" ")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className={[styles.formInput, styles.formSubmitButton].join(" ")}
            >
              Join Waitlist
            </button>

            {error ? <div className={styles.error}>{error}</div> : null}
          </form>
        )} */}
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a
              href={mainHero.primaryAction.href}
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
            >
              {mainHero.primaryAction.text}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainHero;
