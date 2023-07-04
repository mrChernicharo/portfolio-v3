interface Props {}

function HomeHero(props: Props) {
  const {} = props;

  return (
    <div className="text-center py-20">
      <h1 className="text-[4rem] font-bold -my-2">Hi, I am Felipe</h1>
      <h1 className="text-[4rem] font-bold -my-2">Software Engineer</h1>
      <h1 className="text-[4rem] font-bold -my-2">Fullstack Developer</h1>

      <h4 className="text-gray-400 pt-4 pb-8">Get your business online today with the #1 AI website builder.</h4>

      <button className="btn btn-accent btn-lg">Check out</button>
    </div>
  );
}

export default HomeHero;
