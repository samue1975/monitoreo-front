import React, { useState } from "react";

const SelectImg = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result); // Actualiza el estado con la URL de la imagen
    };

    reader.readAsDataURL(file);
  };
  return (
    <div>
      <form className="flex items-center space-x-6">
        <div className="shrink-0">
          {selectedImage ? ( // Comprueba si selectedImage existe
            <img
              className="size-10 object-cover rounded-full"
              src={selectedImage}
              alt="Foto de perfil seleccionada"
            />
          ) : (
            // Muestra el marcador de posición o la imagen predeterminada si no está seleccionada
            <img
              className="size-10 object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Lm3f1Dm02b5KdiqPI7-yNKuEvxwbQXYv9kxvBf7aG8Nj7YYBXOsoGmM9ry4SZKiYyAU&usqp=CAU"
              alt="Foto de perfil actual"
            />
          )}
        </div>
        <label className="block">
          <span className="sr-only">Elegir foto de perfil</span>
          <input
            type="file"
            required="required"
            className="file:hover:cursor-pointer block w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-violet-50 file:text-[#292929]
          hover:file:bg-violet-100"
            onChange={handleFileChange}
          />
        </label>
      </form>
    </div>
  );
};

export default SelectImg;
