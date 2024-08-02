import mobile from "../../assets/mobile.png";
const AboutUs = () => {
  return (
    <div>
      <div className="md:flex justify-center  px-10">
        <div className="w-full my-auto md:text-left text-center md:pt-0 pt-10 lg:ml-28">
          <h1 className="text-[#f4952a] font-semibold text-5xl tracking-wider">
            About Us
          </h1>

          <p className=" font-semibold mt-2">
            At MotionWave, we are passionate about bringing creativity and
            interactivity to the mobile app experience. Founded by a team of
            design and technology enthusiasts, our mission is to revolutionize
            the way users engage with their devices through the power of Lottie
            animations. We believe that every interaction should be delightful
            and intuitive, and our app is designed to make that a reality.
            <br />
            <br />
            Our team is dedicated to providing a seamless platform for
            developers and designers to integrate beautiful animations
            effortlessly into their projects. We understand the importance of
            both aesthetics and functionality, which is why we offer a robust
            library of animations that can be easily customized to fit any need.
          </p>
        </div>
        <div className="w-full  ">
          <img src={mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
