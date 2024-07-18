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
        <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32 border-x">
          <p className="max-sm:min-w-max">{nombre}</p>
        </td>
        <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32 border-x">
          <p className="max-sm:min-w-max">{rif}</p>
        </td>
        <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32 border-x">
          <p className="max-sm:min-w-max">{ubicacion}</p>
        </td>
        <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32 border-x">
          <p className="max-sm:min-w-max">{telefono}</p>
        </td>
        <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32 border-x">
          <p className="max-sm:min-w-max">{email}</p>
        </td>
        <td className="text-center py-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32 border-x">
          <p className="max-sm:min-w-max">{codigo}</p>
        </td>
      </tr>
    </tbody>
  );
};

export default ProveedorTablaBody;
