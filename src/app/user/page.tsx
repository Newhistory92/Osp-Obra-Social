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
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const data = apiData.read(); 
  useEffect(() => {
    setPrestadores(data.data);
  }, [data]);

 
  const maxPage = Math.ceil(prestadores.length / itemsPerPage);

  
  const currentPrestadores = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return prestadores.slice(start, end);
  }, [page, prestadores]);

  const handleTabChange = useCallback((value: string) => {
    setSelectedType(value);
    setPage(1);
  }, []);



  return (
    <>
      <div className="flex flex-col items-center w-full gap-4 md:flex-row md:items-center md:gap-4">
  <div className="w-full md:w-1/3">
    <FilterUser prestadores={prestadores} setFilteredData={setFilteredDataUser} />
  </div>
  <div className="w-full md:w-1/3">
    <FilterEspecialidad prestadores={prestadores} setFilteredData={setFilteredDataEspecialidad} />
  </div>
  <div className="w-full md:w-1/3 flex justify-center">
  <Tabs  className="mb-3">
       {TABS.map(({ label, value }) => (
        <Tab
        key={value}
        eventKey={value}
        title={label}  
        onClick={() => handleTabChange(value)}
      ></Tab>
       
    ))}
  </Tabs>
  </div>
</div>

      <table className="table  table-striped-columns">
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
                {prestador.especialidad}<ChevronRightOutlinedIcon/> {prestador.esp1_nom}<ChevronRightOutlinedIcon /> {prestador.esp2_nom}
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
     
  <PaginationButtons page={page} setPage={setPage} maxPage={maxPage} data={[]} />
    
     
    </>
  );
};

export default Prestadores;