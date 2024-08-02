import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1722612039524.json";

const Banner = () => {
  return (
    <div className="md:flex justify-center  px-10">
      <div className="w-full my-auto md:text-left text-center md:pt-0 pt-10">
        <h1 className="text-[#f4952a] font-semibold text-5xl tracking-wider">
          MotionWave
        </h1>
        <h2 className=" font-semibold mt-4">
          Seamless Animations, Engaging Experiences
        </h2>
        <p className=" font-semibold mt-2">
          Welcome to MotionWave, your gateway to a world of stunning animations
          and interactive experiences. Our app leverages the power of Lottie
          animations to bring your mobile interactions to life, making every
          tap, swipe, and scroll more engaging and visually appealing. Transform
          the way you interact with your mobile device with MotionWave, where
          every motion tells a story.
        </p>
      </div>
      <div className="w-full  ">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          // style={{ width: 550, height: 550 }}
        />
      </div>
    </div>
  );
};

export default Banner;
