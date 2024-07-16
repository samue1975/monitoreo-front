const ProveedorTablaBody = ({nombre, rif, ubicacion, telefono, email, codigo}) => {
  return (
    
      <tbody className="text-gray-700 overflow-x-scroll">
        <tr>
          <td className="text-center p-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
            {nombre}
          </td>
          <td className="text-center p-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
            {rif}
          </td>
          <td className="text-center p-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
            {ubicacion}
          </td>
          <td className="text-center p-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
            {telefono}
          </td>
          <td className="text-center p-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
            {email}
          </td>
          <td className="text-center p-3 uppercase font-semibold text-sm max-sm:overflow-x-auto max-sm:max-w-32">
            {codigo}
          </td>
        </tr>
      </tbody>
    
  );
};

export default ProveedorTablaBody;
