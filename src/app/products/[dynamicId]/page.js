import React from "react";

const page = ({ params , searchParams}) => {
  // console.log(searchParams);
  return (
    <div>
      <h1>This is the dynamic page {params.dynamicId} </h1>
    </div>
  );
};

export default page;
