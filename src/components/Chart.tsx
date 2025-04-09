import React from 'react';
import Plot from 'react-plotly.js';

interface ChartProps {
    data: any; // Define una interfaz más específica basada en tus datos
    layout: any; // Define las opciones de diseño de Plotly
}

const Chart: React.FC<ChartProps> = ({ data, layout }) => {
    console.log("jano",data);
    return <Plot data={data} layout={layout} />;
};

export default Chart;
