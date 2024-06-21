import { TbListDetails, TbTrash } from "react-icons/tb";

const BodyTable = ({ cod_nombre, cod_sistema, cod_lote, cod_cantidad }) => {
  return (
    <tr>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_nombre}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_sistema}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        <input type="date" />
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_lote}
      </td>
      <td className="text-center py-3 uppercase font-semibold text-sm">
        {cod_cantidad}
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
