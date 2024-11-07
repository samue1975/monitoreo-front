import "../assets/css/nav.css";

// eslint-disable-next-line react/prop-types
const NavButtons = ({ icon, title, option }) => {
  return (
    <div>
      <div onClick={option} className="flex justify-between items-center px-4 py-1 rounded-r-full bg-white text-[#292929] cursor-pointer element pr-6 hover:pr-4 duration-200 selection:bg-transparent">
        <div className=" flex items-center gap-2 text-lg">
          <span className="text-3xl">{icon}</span>
          <p>{title}</p>
        </div>
        <div
          className="bg-[#292929] rounded-full duration-200"
          id="pelota"
        ></div>
      </div>
    </div>
  );
};

export default NavButtons;
