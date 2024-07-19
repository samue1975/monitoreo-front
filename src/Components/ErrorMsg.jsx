// eslint-disable-next-line react/prop-types
const ErrorMsg = ({ text }) => {
  return (
    <div className={`text-end text-[#ff0000ad] text-xs`}>
      {text}
    </div>
  );
};

export default ErrorMsg;
