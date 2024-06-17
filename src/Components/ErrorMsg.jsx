const ErrorMsg = ({ display }) => {
  return (
    <div className={`text-end text-[#ff0000ad] text-xs ${display}`}>
      *Completa los campos vacíos*
    </div>
  );
};

export default ErrorMsg;
