import Lottie from "lottie-react";
import TechGuyAnim from "../../assets/anim_tech_guy.json";

interface Props {}

function LottieHero(props: Props) {
  const {} = props;

  return (
    <div className="flex items-center justify-center">
      <section>
        <div>
          <span>Hi, I am Felipe</span>
        </div>
        <h1 className="text-[2rem] font-bold -mt-1">Frontend Engineer</h1>
        <h1 className="text-[1.65rem] font-bold text-right -mt-3">
          <span className="text-sm font-normal">and</span> Fullstack Developer
        </h1>
        <div className="text-right">
          <span>welcome to my portfolio</span>
        </div>
      </section>

      <Lottie animationData={TechGuyAnim} loop={true} />
    </div>
  );
}

export default LottieHero;
