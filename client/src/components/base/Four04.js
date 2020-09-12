import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import api from "api";

const dailylogAPI = api("dailylog");

export const Four04 = () => {
  const [dailylog, setDailylog] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await dailylogAPI
        .showDailylog()
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using `.json()`
          return response.json();
        })
        .then(function (data) {
          setDailylog(data);
          // `data` is the parsed version of the JSON returned from the above endpoint.
          // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        });
    })();
  }, []);

  console.log(dailylog);

  return (
    <section className="container has-text-centered">
      <h2 className="is-size-1">404! THIS PAGE IS UNDER CONSTRUCION</h2>
      <p className="has-text-danger">We can&apos;t find that page</p>
      <Link to="/">
        Wanna go home&nbsp;
        <span role="img" aria-label="house"></span>?
      </Link>
    </section>
  );
};
