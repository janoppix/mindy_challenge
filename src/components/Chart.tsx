import React from 'react';
import Plot from 'react-plotly.js';

interface Serie {
  fecha: string;
  valor: number;
}

interface ChartProps {
  data: Serie[];
  title: string;
}

const Chart: React.FC<ChartProps> = ({ data, title }) => {
  const fechas = data.map((punto) => new Date(punto.fecha));
  const valores = data.map((punto) => punto.valor);
  
  return (
    <div className="w-full">
      <Plot
        data={[
          {
            x: fechas,
            y: valores,
            type: 'scatter',
            mode: 'lines',
            line: {
              color: '#3b82f6',
              width: 2,
            },
          },
        ]}
        layout={{
          title: {
            text: title
          },
          xaxis: {
            tickformat: '%b %d %Y',
            tickfont: { size: 12 },
          },
          yaxis: {
            title: {
              text: 'Valor en pesos'
            }
          },
          margin: { l: 60, r: 30, t: 60, b: 50 },
          plot_bgcolor: '#fff',
          paper_bgcolor: '#f8fafc',
        }}
        config={{ responsive: true }}
        useResizeHandler

      />
    </div>
  );
};

export default Chart;
