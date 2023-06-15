import React from "react";

interface Props {}

function HomeHero(props: Props) {
  const {} = props;

  return (
    <div className="text-center py-16">
      <h1 className="text-[4rem] font-bold -my-4">Build a website</h1>
      <h1 className="text-[4rem] font-bold -my-4">in 30 seconds using</h1>
      <h1 className="text-[4rem] font-bold -my-4">artificial intelligence</h1>

      <h4 className="text-gray-400 py-6">Get your business online today with the #1 AI website builder.</h4>

      <button className="btn btn-accent btn-lg">Check out</button>
    </div>
  );
}

export default HomeHero;
