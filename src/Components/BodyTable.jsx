import { TbListDetails, TbTrash } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
const BodyTable = ({ cod_nombre, cod_sistema, cod_cantidad, descript, ingreso, caducidad, proveedor, ubicacion }) => {
  return (
    <tr>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_nombre}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_sistema}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {proveedor}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {ingreso}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {caducidad}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_cantidad}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {descript}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {ubicacion}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm flex gap-6 justify-center">
        <button>
          <TbListDetails />
        </button>
        <button>
          <TbTrash />
        </button>
      </td>
    </tr>
  );
};

export default BodyTable;
