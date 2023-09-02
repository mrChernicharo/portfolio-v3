export default function Lettering() {
  return (
    <>
      <h1 className="h1-text text-center">Work Experience</h1>

      <div className="relative mb-8 md:mb-32 lg:mb-36">
        <h3 className="h3-text m-auto md:absolute w-[320px] right-0 md:right-16 lg:right-32 xl:right-64 md:-top-8 lg:-top-4 xl:-top-0">
          <div className="relative">
            <span className="text-md absolute top-[16px] left-[200px]">Now,</span>
            <br />
            <span className="text-sm absolute top-[46px] left-[140px]">why don't you</span>
            <br />
          </div>
          <div className="relative">
            <span className="text-md absolute left-[82px] bottom-[16px]">take a look</span>{" "}
            <span className="text-sm absolute left-[206px] bottom-[22px]">at my</span>
            <br />
          </div>
          <div className="relative">
            <span className="h2-text absolute -bottom-[15px]">professional</span>
            <span className="h4-text absolute left-[190px] -bottom-[8px]">background?</span>
          </div>
          <div className="h-8"></div>
        </h3>
      </div>
    </>
  );
}
