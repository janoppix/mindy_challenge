export function filtrarSerie(
  serie: { fecha: string; valor: number }[],
  year: number,
  month: number
): { fecha: string; valor: number }[] {
  return serie.filter((item) => {
    const fecha = new Date(item.fecha);
    return (
      fecha.getFullYear() === year &&
      fecha.getMonth() + 1 === month // getMonth() es 0-indexado
    );
  });
}
