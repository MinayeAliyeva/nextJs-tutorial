import React from "react";
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const TestRoute = async() => {
  await delay(3000);
  return <div>TestRoute</div>;
};

export default TestRoute;
