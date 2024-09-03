"use client"
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Prestador } from "@/app/interfaces/interfaces";
import { Card, CardHeader, Typography, CardBody, CardFooter, Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import dynamic from 'next/dynamic';
// import PaginationButtons from "../../components/Pagination/Pagination";

// const FilterUser = dynamic(() => import('./Filtros/UseAutocomplete'), {
//   ssr: false
// });
// const FilterEspecialidad = dynamic(() => import('./Filtros/FilterEspecialidad'), {
//   ssr: false
// });

const TABS = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Fidelizado', value: 'Fidelizado' },
  { label: 'No Fidelizado', value: 'No Fidelizado' }
];

const TABLE_HEAD = ["Prestador", "Especialidad", "Teléfono", "Direccion", "Tipo"];

const Prestadores = () => {
  const [prestadores, setPrestadores] = useState<Prestador[]>([]);
  const [filteredDataUser, setFilteredDataUser] = useState<Prestador[]>([]);
  const [filteredDataEspecialidad, setFilteredDataEspecialidad] = useState<Prestador[]>([]);
  const [combinedFilteredData, setCombinedFilteredData] = useState<Prestador[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("Todos");
  const [page, setPage] = useState(1);
  const perPage = 8;

  const fetchPrestadores = useCallback(async () => {
    try {
      const url = '/api/Datos/prestadores';
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const responseData = await response.json();
      if (Array.isArray(responseData.data)) {
        const formattedData = responseData.data.map((prestador: {
          IdPrestador: any; Domicilio: string; Localidad: string; Fidelizado: string | null; Telefono: string; Nombre: string; especialidad: string;
        }) => {
          const address = `${prestador.Domicilio}, ${prestador.Localidad}`;
          const tipo = (prestador.Fidelizado === "0" || prestador.Fidelizado === null) ? "No Fidelizado" : "Fidelizado";
          const phoneOpc = prestador.Telefono;
          const name = prestador.Nombre;
          const especialidad = prestador.especialidad;
          const id = prestador.IdPrestador;
          return {
            ...prestador,
            address: address,
            tipo,
            phoneOpc,
            name,
            especialidad,
            id
          };
        });
        setPrestadoresAndLoading(formattedData, false);
      } else {
        console.error('La respuesta de la API no es un arreglo:', responseData);
      }
    } catch (error) {
      console.error('Error al obtener los prestadores:', error);
      setLoading(false);
    }
  }, []);

  const setPrestadoresAndLoading = (prestadoresData: Prestador[], isLoading: boolean) => {
    setPrestadores(prestadoresData);
    setFilteredDataUser(prestadoresData);
    setFilteredDataEspecialidad(prestadoresData);
    setLoading(isLoading);
  };

  useEffect(() => {
    fetchPrestadores();
  }, [fetchPrestadores]);

  useEffect(() => {
    const totalPages = Math.ceil(prestadores.length / perPage);
    if (totalPages === 0 || page > totalPages) {
      setPage(totalPages);
      return;
    }
    setLoading(false);
  }, [prestadores, page, perPage]);

  useEffect(() => {
    if (selectedType === 'Todos') {
      setFilteredDataUser(prestadores);
      setFilteredDataEspecialidad(prestadores);
    } else {
      const filtered = prestadores.filter((prestador) => prestador.tipo.toLowerCase() === selectedType.toLowerCase());
      setFilteredDataUser(filtered);
      setFilteredDataEspecialidad(filtered);
    }
  }, [prestadores, selectedType]);

  useEffect(() => {
    const combined = filteredDataUser.filter((prestador) =>
      filteredDataEspecialidad.includes(prestador)
    );
    setCombinedFilteredData(combined);
  }, [filteredDataUser, filteredDataEspecialidad]);

  const handleTabChange = useCallback((value: string) => {
    setSelectedType(value);
    setPage(1);
  }, []);

  const maxPage = useMemo(() => Math.ceil(combinedFilteredData.length / perPage), [combinedFilteredData.length, perPage]);

  return (
    <Card className="w-full h-screen mx-auto">
      <div className="sticky top-0 z-10 bg-white">
        <CardHeader floated={false} shadow={false} className="rounded bg-gray-300">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Lista de Prestadores
              </Typography>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value} onClick={() => handleTabChange(value)}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="flex flex-col items-center w-full md:flex-row md:w-auto gap-4">
              <div className="w-full flex-grow">
                {/* <FilterUser prestadores={prestadores} setFilteredData={setFilteredDataUser} /> */}
              </div>
              <div className="w-full flex-grow mb-2">
                {/* <FilterEspecialidad prestadores={prestadores} setFilteredData={setFilteredDataEspecialidad} /> */}
              </div>
            </div>
          </div>
        </CardHeader>
      </div>
      <CardBody className="px-0 overflow-auto">
        {loading ? (
          <div className="overflow-auto">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                      <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Aquí podrías agregar los skeletons si aún los necesitas */}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-auto">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <tbody>
                {combinedFilteredData.slice((page - 1) * perPage, page * perPage).map((prestador, index) => {
                  const { id, name, phone, phoneOpc, especialidad, address, tipo } = prestador;
                  const displayTipo = tipo.replace("_", " ").toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase());
                  const rowClass = index % 2 === 0 ? "bg-gray-50" : "bg-gray-300";
                  return (
                    <tr key={id} className={rowClass}>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                              {name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <Typography variant="small" color="blue-gray" className="font-normal">
                            {especialidad}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="w-max">
                          <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                            {phone} {phoneOpc && ` / ${phoneOpc}`}
                          </Typography>
                        </div>
                      </td>
                      <td className="p-4">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {address}
                        </Typography>
                      </td>
                      <td className="p-4">
                        {displayTipo}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </CardBody>
      <CardFooter>
        {/* <PaginationButtons page={page} setPage={setPage} maxPage={maxPage} data={combinedFilteredData} /> */}
      </CardFooter>
    </Card>
  );
}

export default Prestadores;
