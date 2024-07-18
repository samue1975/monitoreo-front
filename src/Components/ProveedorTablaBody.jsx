const ProveedorTablaBody = ({
  nombre,
  rif,
  ubicacion,
  telefono,
  email,
  codigo,
}) => {
  return (
    <tbody className="text-gray-700 overflow-x-scroll">
      <tr>
        <td className="text-center uppercase font-semibold text-sm max-sm:px-4 border-x">
          <div className="max-sm:overflow-x-auto max-sm:max-w-32 py-3">
            <p className="max-sm:min-w-max">{nombre}</p>
          </div>
        </td>
        <td className="text-center uppercase font-semibold text-sm max-sm:px-4 border-x">
          <div className="max-sm:overflow-x-auto max-sm:max-w-32 py-3">
            <p className="max-sm:min-w-max">{rif}</p>
          </div>
        </td>
        <td className="text-center uppercase font-semibold text-sm max-sm:px-4 border-x">
          <div className="max-sm:overflow-x-auto max-sm:max-w-32 py-3">
            <p className="max-sm:min-w-max">{ubicacion}</p>
          </div>
        </td>
        <td className="text-center uppercase font-semibold text-sm max-sm:px-4 border-x">
          <div className="max-sm:overflow-x-auto max-sm:max-w-32 py-3">
            <p className="max-sm:min-w-max">{telefono}</p>
          </div>
        </td>
        <td className="text-center uppercase font-semibold text-sm max-sm:px-4 border-x">
          <div className="max-sm:overflow-x-auto max-sm:max-w-32 py-3">
            <p className="max-sm:min-w-max">{email}</p>
          </div>
        </td>
        <td className="text-center uppercase font-semibold text-sm max-sm:px-4 border-x">
          <div className="max-sm:overflow-x-auto max-sm:max-w-32 py-3">
            <p className="max-sm:min-w-max">{codigo}</p>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ProveedorTablaBody;
