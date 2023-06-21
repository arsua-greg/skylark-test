import React, { Fragment } from "react";

import { useRouter } from "next/dist/client/router";

const TopPage = () => {
  const router = useRouter();

  const submitFormHandler = (e: any) => {
    e.preventDefault();

    router.push({
      pathname: "/shop",
    });
  };

  return (
    <Fragment>
      <button onClick={submitFormHandler}>Go to Shop</button>
    </Fragment>
  );
};

export default TopPage;
