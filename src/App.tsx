import React, { useState } from 'react';

import NavBar from './components/NavBar';
import Chart from './components/Chart';

import { indicators } from './constants/indicators'; // o el path correcto
import { yearsByIndicator } from './constants/yearsByIndicator';
import { months } from './constants/dateOptions';

import useFetchData from './hooks/useFetchData';

import { filtrarSerie } from './utils/filtrarSerie';


const App = () => {
    const [indicator, setIndicator] = useState<string>(false);
    const [year, setYear] = useState<number>(0);
    const [month, setMonth] = useState<number>(0);

    const years = yearsByIndicator[indicator] || [];

    const { data, loading, error } = useFetchData(indicator, year, month);

    const datosFiltrados = data?.serie
    ? filtrarSerie(data.serie, year, month)
    : [];

    const statusClass = data == null ? 'orange' : 'teal';

    return (
        <div>
            <NavBar
                onIndicatorChange={setIndicator}
                onYearChange={setYear}
                onMonthChange={setMonth}
                indicators={indicators}
                years={years}
                months={months}
            />
            <div className="flex flex-col items-center justify-center space-y-4 p-6 rounded-lg mb-4">

              <div className="w-full bg-gray-500 h-12 ">
                <div className={`bg-${statusClass}-100 border-${statusClass}-500 text-${statusClass}-900 rounded-sm border-t-4 px-4 py-3 shadow-md`} role="alert">
                  <div className="flex">
                    <div className="py-1">
                      {data == null || !datosFiltrados.length ?
                        <svg className={`fill-current h-6 w-6 text-${statusClass}-500 mr-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                        </svg>
                        :
                        <svg className={`fill-current h-6 w-6 text-${statusClass}-500 mr-4`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                        </svg>
                      }


                    </div>
                    <div>
                      <p className="font-bold">Mindy Challenge</p>
                      {loading ? <p>Cargando...</p> :
                       error ? <p>Error al cargar los datos.</p> :
                       !indicator ? <p>Seleccione un indicador año y mes...</p> :
                       !year ? <p>Seleccione un año...</p> :
                       !month ? <p>Seleccione un mes...</p> :
                       !datosFiltrados.length ? <p>No se encontraron datos para el período especificado...</p> : '' }
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 p-6">
                <div className="flex-1 bg-white p-4 rounded">

                  {!loading && !error && indicator && year && month && datosFiltrados.length ?
                    <Chart data={datosFiltrados} layout={{ title: `Datos de ${indicator} ${year}/${month}` }} /> : ''
                  }
                </div>

                <div className="flex-1 bg-white p-4 rounded">
                  <pre className="p-4 rounded text-sm overflow-x-auto">
                    {data != null ? JSON.stringify(data, null, 2) : ''}
                  </pre>
                </div>
              </div>


            </div>

        </div>
    );
};

export default App;
