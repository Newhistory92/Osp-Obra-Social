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

    if (selectedType === 'Todos') {
      setFilteredDataUser(prestadores);
      setFilteredDataEspecialidad(prestadores);
    } else {
      const isFidelizado = selectedType === 'Fidelizado';
      const filtered = prestadores.filter((prestador) =>
        isFidelizado ? prestador.Fidelizado === "1" : prestador.Fidelizado !== "1"
      );
      setFilteredDataUser(filtered);
      setFilteredDataEspecialidad(filtered);
    }

    setPage(1);
  }, [prestadores, selectedType]);

  // Combinar filtros de usuario y especialidad
  useEffect(() => {
    const combined = filteredDataUser.filter((prestador) =>
      filteredDataEspecialidad.includes(prestador)
    );
    setCombinedFilteredData(combined);
  }, [filteredDataUser, filteredDataEspecialidad]);


  return (
    <div className="container mx-auto my-8"> 
      
      <div className="flex flex-col items-center w-full gap-4 md:flex-row md:gap-4 mb-6">
        <div className="w-full md:w-1/3">
          <FilterUser prestadores={prestadores} setFilteredData={setFilteredDataUser} />
        </div>
        <div className="w-full md:w-1/3 ">
          <FilterEspecialidad prestadores={prestadores} setFilteredData={setFilteredDataEspecialidad} />
        </div>
        <div className="w-full md:w-1/3 flex justify-center mb-3 bg-blue-500 shadow-lg shadow-blue-500/50">
          <Tabs
            activeKey={selectedType}
            onSelect={(value) => handleTabChange(value || 'Todos')}
          >
            {TABS.map(({ label, value }) => (
              <Tab
                key={value}
                eventKey={value}
                title={label}
                
              />
            ))}
          </Tabs>
        </div>
      </div>
  
      {/* Tabla */}
      <table className="table table-striped-columns mx-auto"> {/* Centramos la tabla */}
        <thead className="table-dark">
          <tr>
            <th scope="col">Especialidad</th>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">Matricula</th>
            <th scope="col">Telefono</th>
            <th scope="col">Direccion</th>
            <th scope="col">Fidelizado</th>
          </tr>
        </thead>
        <tbody>
          <Suspense fallback={<div>Loading...</div>}>
            {currentPrestadores.map((prestador) => (
              <tr key={prestador.id}>
                <th scope="row">
                  {prestador.especialidad}<ChevronRightOutlinedIcon /> {prestador.esp1_nom}<ChevronRightOutlinedIcon /> {prestador.esp2_nom}
                </th>
                <td>{prestador.Nombre}</td>
                <td>{prestador.Matricula}</td>
                <td>{prestador.Telefono}</td>
                <td>{`${prestador.Domicilio} - ${prestador.Localidad}`}</td>
                <td>
                  {prestador.Fidelizado === "1"
                    ? <>Fidelizado <AddTaskSharpIcon /></>
                    : <>No Fidelizado <RemoveCircleOutlineIcon /></>}
                </td>
              </tr>
            ))}
          </Suspense>
        </tbody>
      </table>
  
      {/* Paginación */}
      <div className="mt-4">
        <PaginationButtons page={page} setPage={setPage} maxPage={maxPage} data={[]} />
      </div>
    </div>
  );
  
};

export default Prestadores;