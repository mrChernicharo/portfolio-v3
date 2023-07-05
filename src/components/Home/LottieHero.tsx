import Lottie from "lottie-react";
import TechGuyAnim from "../../assets/anim_tech_guy.json";
import { useScreenWidth } from "../../hooks/useScreenWidth";

interface Props {}

function LottieHero(props: Props) {
  const { breakpoint } = useScreenWidth();
  const isSmall = ["xs", "sm"].includes(breakpoint);

  return (
    <div className={`flex items-center justify-center ${isSmall ? `flex-col mt-6` : ""}`}>
      <section className={isSmall ? "" : `basis-[300px] pl-[24px] shrink-0`}>
        <div>
          <span>Hi, I am Felipe</span>
        </div>
        <h1 className={`${isSmall ? "text-[32px]" : "text-[2rem]"} font-bold -mt-1`}>Frontend Engineer</h1>
        <h1 className={`${isSmall ? "text-[28px]" : "text-[1.65rem]"} font-bold text-right -mt-3`}>
          <span className={`text-sm`}>and</span> Fullstack Developer
        </h1>
        <div className={`text-right`}>
          <span>welcome to my portfolio</span>
        </div>
      </section>

      <section>
        <Lottie animationData={TechGuyAnim} loop={true} style={{ maxWidth: "700px" }} />
      </section>
    </div>
  );
}

export default LottieHero;
