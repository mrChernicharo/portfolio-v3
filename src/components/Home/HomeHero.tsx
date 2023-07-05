interface Props {}

function HomeHero(props: Props) {
  const {} = props;

  return (
    <div className="text-center py-20">
      {/* <h1 className="h1-text -my-2">Hi, I am Felipe</h1>
      <h1 className="h1-text -my-2">Software Engineer</h1>
      <h1 className="h1-text -my-2">Fullstack Developer</h1> */}

      <h1 className="h1-text -my-2">Coding with love</h1>
      <h1 className="h1-text -my-2">Bringing ideas to life</h1>
      <h1 className="h1-text -my-2">Building for people</h1>

      <h4 className="text-primary-content opacity-60 pt-4 pb-8">...and saving the world from nasty bugs since 2017</h4>

      <button className="btn btn-accent btn-lg">confetti explosion?</button>
    </div>
  );
}

export default HomeHero;
