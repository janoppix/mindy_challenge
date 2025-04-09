// useFetchData.ts
import { useState, useEffect } from 'react';

interface Data {
    // Definir la estructura de tus datos aquí
}

interface FetchDataHook {
    data: Data | null;
    loading: boolean;
    error: Error | null;
}

const useFetchData = (indicator: string, year: number, month: number): FetchDataHook => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);


      useEffect(() => {
          if (!indicator || year <= 0 || month <= 0) return;
          setLoading(true);
          const fetchData = async () => {
              setError(null);
              try {
                  const response = await fetch(`https://mindicador.cl/api/${indicator}/${year}/`);
                  const json = await response.json();
                  console.log("jano PASS",response);
                  setData(json);
              } catch (e) {
                  setError(e instanceof Error ? e : new Error('Error desconocido al cargar datos'));
              } finally {
                  setLoading(false);
              }
          };

          fetchData();
      }, [indicator, year, month]);
      return { data, loading, error };

};

export default useFetchData;
