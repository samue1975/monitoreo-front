import "../assets/css/loader.css";
const Loader = () => {
  return (
    <div className="flex min-h-screen justify-center items-center w-full">
      <span className="loader"></span>
      <span className="loader2 absolute"></span>
      {/* <span className="loader2"></span> */}
    </div>
  );
};

export default Loader;
