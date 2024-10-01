"use client"
import React, { useState, useEffect, useCallback, useMemo,Suspense} from "react";
import { Prestador } from "@/app/interfaces/interfaces";
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData  from "@/app/utils/fetchData";
import PaginationButtons from "@/app/components/Pagination/Pagination"; 
import AddTaskSharpIcon from '@mui/icons-material/AddTaskSharp';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Tab, Tabs } from "react-bootstrap";
const FilterUser = dynamic(() => import('@/app/components/Prestador/Filtros/UseAutocomplete'), {
  ssr: false
});
const FilterEspecialidad = dynamic(() => import('@/app/components/Prestador/Filtros/FilterEspecialidad'), {
  ssr: false
});

const TABS = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Fidelizado', value: 'Fidelizado' },
  { label: 'No Fidelizado', value: 'No Fidelizado' }
];


const apiData = fetchData('/api/Datos/prestadores');

const Prestadores = () => {
  const [prestadores, setPrestadores] = useState<Prestador[]>([]);
  const [filteredDataUser, setFilteredDataUser] = useState<Prestador[]>([]);
  const [filteredDataEspecialidad, setFilteredDataEspecialidad] = useState<Prestador[]>([]);
  const [selectedType, setSelectedType] = useState("Todos");
  const [combinedFilteredData, setCombinedFilteredData] = useState<Prestador[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch data
  const data = apiData.read(); 
  useEffect(() => {
    setPrestadores(data.data);
  }, [data]);

  // Calcular total de páginas
  const maxPage = Math.ceil(combinedFilteredData.length / itemsPerPage);

  // Obtener los prestadores de la página actual
  const currentPrestadores = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return combinedFilteredData.slice(start, end);
  }, [page, combinedFilteredData]);

  // Manejar el cambio de pestaña (filtro fidelización)
  const handleTabChange = useCallback((value: string) => {
    setSelectedType(value);
    setPage(1);
  }, []);

  // Filtrar por fidelización
  useEffect(() => {
    let filtered = prestadores;
  
    // Filtrar por fidelización
    if (selectedType !== 'Todos') {
      const isFidelizado = selectedType === 'Fidelizado';
      filtered = filtered.filter((prestador) =>
        isFidelizado ? prestador.Fidelizado === "1" : prestador.Fidelizado !== "1"
      );
    }
  
    // Filtrar por especialidad si hay una seleccionada
    if (filteredDataEspecialidad.length > 0) {
      filtered = filtered.filter((prestador) =>
        filteredDataEspecialidad.includes(prestador)
      );
    }
  
    // Actualizar los datos combinados
    setCombinedFilteredData(filtered);
    setPage(1); 
  }, [prestadores, selectedType, filteredDataEspecialidad]);

  return (
    <div className="container mx-auto my-8"> 
    <div className="flex flex-col w-full gap-4 md:flex-row md:items-center mb-6">
      <div className="w-full md:w-1/3">
        <FilterUser prestadores={prestadores} setFilteredData={setFilteredDataUser} />
      </div>
      <div className="w-full md:w-1/3">
        <FilterEspecialidad prestadores={prestadores} setFilteredData={setFilteredDataEspecialidad} />
      </div>
    </div>
  
    <div className="w-full flex justify-center mb-4">
      <Tabs
        activeKey={selectedType}
        onSelect={(value) => handleTabChange(value || 'Todos')}
        className="w-full text-sm"
      >
        {TABS.map(({ label, value }) => (
          <Tab key={value} eventKey={value} title={label} />
        ))}
      </Tabs>
    </div>
  
    {/* Tabla */}
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left table-auto border-collapse">
        <thead className=" bg-[#D31D16] text-white">
          <tr>
            <th className="px-4 py-2">Especialidad</th>
            <th className="px-4 py-2">Nombre y Apellido</th>
            <th className="px-4 py-2">Matrícula</th>
            <th className="px-4 py-2">Teléfono</th>
            <th className="px-4 py-2">Dirección</th>
            <th className="px-4 py-2">Fidelizado</th>
          </tr>
        </thead>
        <tbody>
          <Suspense fallback={<div>Loading...</div>}>
          {currentPrestadores.map((prestador) => (
  <tr key={prestador.id} className="border-t">
    <td className="px-4 py-2 text-black">
      <div className="flex items-center"> {/* Contenedor para imagen y texto alineados */}
        <img src="especialidad.svg" className="w-8 h-auto mr-2" alt="especialidad" />
        {prestador.especialidad}
        <ChevronRightOutlinedIcon />
        {prestador.esp1_nom}
        <ChevronRightOutlinedIcon />
        {prestador.esp2_nom}
      </div>
    </td>

    <td className="px-4 py-2 text-black">
      <div className="flex items-center">
        <img src="prestadortable.svg" className="w-8 h-auto mr-2" alt="prestador" />
        {prestador.Nombre}
      </div>
    </td>

    <td className="px-4 py-2 text-black">{prestador.Matricula}</td>

    <td className="px-4 py-2 text-black">
      <div className="flex items-center">
        <img src="telefono.svg" className="w-8 h-auto mr-2" alt="telefono" />
        {prestador.Telefono}
      </div>
    </td>

    <td className="px-4 py-2 text-black">
      <div className="flex items-center">
        <img src="direccion.svg" className="w-8 h-auto mr-2" alt="direccion" />
        {`${prestador.Domicilio} - ${prestador.Localidad}`}
      </div>
    </td>

    <td className="px-4 py-2 text-black">
      {prestador.Fidelizado === "1" ? (
        <div className="flex items-center">
          Fidelizado
          <AddTaskSharpIcon />
        </div>
      ) : (
        <span className="text-red-500 flex items-center">
          No Fidelizado
          <RemoveCircleOutlineIcon className="text-red-500" />
        </span>
      )}
    </td>
  </tr>
))}
          </Suspense>
        </tbody>
      </table>
    </div>
  
    <div className="mt-4">
      <PaginationButtons page={page} setPage={setPage} maxPage={maxPage} data={[]} />
    </div>
  </div>
  

  );
  
};

export default Prestadores;