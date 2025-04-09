import React from 'react';

interface NavBarProps {
    onIndicatorChange: (indicator: string) => void;
    onYearChange: (year: number) => void;
    onMonthChange: (month: number) => void;
    indicators: indicator[];
    years: number[]; // Lista de años disponibles
    months: string[]; // Lista de meses, puede ser constante o dependiendo del indicador
}

const NavBar: React.FC<NavBarProps> = ({
    onIndicatorChange,
    onYearChange,
    onMonthChange,
    indicators,
    years,
    months
}) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex justify-between items-center">

              <div className="mr-2">
                  <label htmlFor="indicator" className="block text-sm font-medium text-gray-700">Indicador</label>
                  <select
                      id="indicator"
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      onChange={(e) => onIndicatorChange(e.target.value)}
                    >
                      {indicators.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
              </div>


              <div className="mr-2">
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700">Año</label>
                  <select id="year" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  onChange={(e) => onYearChange(parseInt(e.target.value))}>
                    <option key="0" value="0">--- Selecciona una opción ---</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
              </div>


              <div>
                  <label htmlFor="month" className="block text-sm font-medium text-gray-700">Mes</label>
                  <select id="month" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  onChange={(e) => onMonthChange(parseInt(e.target.value))}>
                    <option key="0" value="0">--- Selecciona una opción ---</option>
                    {months.map((month, index) => (
                        <option key={index} value={month.value}>{month.label}</option>
                    ))}
                  </select>
              </div>
          </div>
      </nav>

    );
};

export default NavBar;
