import { Link } from "react-router-dom";

const CTA_main = ({ color, texto, icon, dir, option }) => {
  return (
    <Link
    onClick={option}
      to={`${dir}`}
      className={`${color} hover:saturate-50 min-w-max w-1/4 max-[457px]:w-full max-[667px]:w-1/2 h-36 hover:shadow-xl shadow-md shadow-gray-400 p-6 cursor-pointer rounded-xl items-center text-center text-xl font-poppins text-white uppercase font-semibold`}
    >
      {texto} {icon}
    </Link>
  );
};

export default CTA_main;