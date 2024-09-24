export const GET_FORMAT_DATE_PAY = (fechaISO:string) => {
    const fecha: Date = new Date(fechaISO);

    const opcionesDia: Intl.DateTimeFormatOptions = { day: '2-digit' };
    const opcionesMes: Intl.DateTimeFormatOptions = { month: 'long' };
    const opcionesAnio: Intl.DateTimeFormatOptions = { year: 'numeric' };
    
    const dia: string = fecha.toLocaleDateString('es-ES', opcionesDia).trim();
    const mes: string = fecha.toLocaleDateString('es-ES', opcionesMes).trim();
    const anio: string = fecha.toLocaleDateString('es-ES', opcionesAnio).trim();
    
    const resultado: string = `${dia} - ${mes} - ${anio}`;

    return resultado
}