import "./Sample.css";

const Sample = () => {
  return (
    <div className="hero w sample h-96 my-10">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-black text-center bg-white rounded-sm w-2/3">
        <div className="px-10">
          <h1 className="mb-5 text-5xl font-bold">Moshla House</h1>
          <p className="mb-5">
            Red chilli powder adds spice and heat to food, enhancing its flavor.
            It also contains vitamin C and antioxidants, which help boost
            immunity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sample;
