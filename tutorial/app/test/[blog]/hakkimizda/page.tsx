import React from "react";

const Hakkimizda = async (props: any) => {
  const prop = await props?.params;
  const searchParams = await props?.searchParams;
  console.log("PROPS", { prop, searchParams });
  return <div>Hakkimizda</div>;
};

export default Hakkimizda;
