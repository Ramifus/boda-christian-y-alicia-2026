// src/datos.ts
// Todos los datos de la boda en un solo lugar, copiados de información.txt.
// Si algo de acá no coincide con ese archivo, manda el archivo.

export const novios = {
    el: "Christian",
    ella: "Alicia",
    // Las letras del sello del sobre.
    iniciales: ["C", "A"],
};

export const nombresJuntos = `${novios.el} & ${novios.ella}`;

// El título de la pestaña del navegador.
export const tituloPagina = `${nombresJuntos} | 17 de octubre de 2026`;

// Hora de Bolivia (UTC-4). La usa la cuenta regresiva.
export const fechaISO = "2026-10-17T11:30:00-04:00";
export const fechaLarga = "Sábado 17 de octubre de 2026";
// Para los títulos en cursiva: el número va aparte, en otra letra, porque
// en Ephesis los números se confunden (el 9 parece un 7).
export const fechaTitulo = { dia: "Sábado", numero: "17", mes: "de octubre" };
// La tarjeta de la portada: día | número y mes | hora, en tres columnas.
export const fechaPortada = {
    dia: "Sábado",
    numero: "17",
    // Los dos días de la fiesta (sábado y domingo), para la tarjeta de la portada.
    numeros: "17 - 18",
    mes: "Octubre",
    anio: "2026",
    hora: "11:30",
    periodo: "AM",
};

export const versiculo = {
    parrafos: [
        "El amor es paciente, es bondadoso. El amor no es envidioso ni presumido ni orgulloso.",
        "Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta.",
    ],
    cierre: "El amor jamás se extingue.",
    cita: "1 Corintios 13:4-7",
};

// La fecha en un renglón, para la página del contador.
export const fechaConHora = `${fechaPortada.dia} ${fechaPortada.numero} de ${fechaPortada.mes} de ${fechaPortada.anio} · ${fechaPortada.hora} ${fechaPortada.periodo}`;

// fallecido: true dibuja la cruz al lado del nombre (en el archivo, "(+)").
export const padres = {
    novio: [
        { nombre: "Limbert Mayta Mamani" },
        { nombre: "Claudia Choque Callisaya" },
    ],
    novia: [
        { nombre: "Gregorio Sanga Laura" },
        { nombre: "Basilia Huanca" },
    ],
};

// Los padrinos, por grupo, en el orden de información.txt.
export const padrinos = [
    { grupo: "Padrinos de Religión y Civil", nombres: ["Deybid Poma Balboa", "Zoraida Mamani Quispe"] },
    { grupo: "Padrinos de Torta", nombres: ["Roberto Huanaco Mamani", "Rosario Salazar de Huanaco"] },
    { grupo: "Padrinos de Conteo", nombres: ["Edwin Aguilar Mayta", "Nilda Choque de Aguilar"] },
    { grupo: "Padrinos de Sorpresa", nombres: ["Jhonny Choque Tudela", "Gudelia Vargas Quispe"] },
];

export const ceremonia = {
    titulo: "Ceremonia Religiosa",
    lugar: "Parroquia San Sebastián",
    direccion: "Plaza Alonso de Mendoza – Ciudad de La Paz",
    hora: "11:30",
    periodo: "AM",
    mapa: "https://maps.app.goo.gl/JvwFKTZixvqNScog6",
    // La foto de la iglesia que mandaron los novios (va entera, sin recortar).
    foto: "/imagenes/iglesia.jpeg",
    fotoAncho: 494,
    fotoAlto: 404,
};

export const recepcion = {
    titulo: "Recepción Social",
    lugar: "Parqueo Mejillones",
    direccion: "Zona Villa Bolívar “C”, detrás del Surtidor Candelaria, Av. 6 de Marzo – Ciudad de El Alto",
    hora: "15:00",
    periodo: "PM",
    mapa: "https://maps.app.goo.gl/6PSG4KiQb5cwLGZT8",
    // La captura del mapa que mandaron los novios (va entera, sin recortar).
    foto: "/imagenes/recepcion.webp",
    fotoAncho: 772,
    fotoAlto: 423,
};

// El conteo de regalos: el domingo, en el mismo lugar de la recepción.
export const conteo = {
    dia: "Domingo",
    numero: "18",
    mes: "de Octubre",
    titulo: "Conteo de Regalos",
    hora: "15:00",
    periodo: "PM",
    lugar: recepcion.lugar,
    direccion: recepcion.direccion,
    mapa: recepcion.mapa,
};

// El itinerario, como viene en información.txt: el sábado la ceremonia y
// la recepción; el domingo el conteo de regalos.
export const itinerario = [
    { momento: "Ceremonia Religiosa", hora: `Sábado 17 · ${ceremonia.hora}`, icono: "/iconos/iglesia.png" },
    { momento: "Recepción Social", hora: `Sábado 17 · ${recepcion.hora}`, icono: "/iconos/recepcion.png" },
    { momento: "Conteo de Regalos", hora: `Domingo 18 · ${conteo.hora}`, icono: "/iconos/lluvia-sobre.png" },
];

// Las fotos de la galería (el carrusel), en el orden en que se muestran.
// Con la lista vacía la galería no se dibuja.
export const galeria = [
    { foto: "/imagenes/foto1.webp", ancho: 667, alto: 1000 },
    { foto: "/imagenes/foto2.webp", ancho: 598, alto: 1000 },
    { foto: "/imagenes/foto3.webp", ancho: 563, alto: 1000 },
    { foto: "/imagenes/foto4.webp", ancho: 1000, alto: 563 },
];

// La cartelera musical, por día y en el orden en que los pasaron los novios.
export const cartelera = [
    { dia: "sabado", nombre: "Águilas de América", detalle: "", imagen: "/imagenes/grupos/3-aguilas.webp", ancho: 274, alto: 387 },
    { dia: "sabado", nombre: "Helena", detalle: "Agrupación", imagen: "/imagenes/grupos/7-agrupacion-helena.webp", ancho: 271, alto: 211 },
    { dia: "sabado", nombre: "Grupo Yoga", detalle: "De Tarija", imagen: "/imagenes/grupos/9-grupo-yoga-de-tarija.webp", ancho: 272, alto: 171 },
    { dia: "sabado", nombre: "Yamali", detalle: "", imagen: "/imagenes/grupos/8-yamali.webp", ancho: 265, alto: 130 },
    { dia: "sabado", nombre: "Vicente Fernández", detalle: "De Yo me llamo", imagen: "/imagenes/grupos/10-mariachi-vicente-fernandez.webp", ancho: 560, alto: 343 },
    { dia: "domingo", nombre: "Eclipse", detalle: "Eduardo Balderrama", imagen: "/imagenes/grupos/1-eclipse.webp", ancho: 268, alto: 385 },
    { dia: "domingo", nombre: "La Banda de Lechuga", detalle: "", imagen: "/imagenes/grupos/4-labandadelechuga.webp", ancho: 268, alto: 383 },
    { dia: "domingo", nombre: "Los Internacionales Iberia", detalle: "El orgullo de América", imagen: "/imagenes/grupos/2-iberia.webp", ancho: 275, alto: 388 },
    { dia: "domingo", nombre: "Jheyson Coraje", detalle: "", imagen: "/imagenes/grupos/5-jheyson-coraje.webp", ancho: 267, alto: 251 },
    { dia: "domingo", nombre: "Vennuz de Amor", detalle: "Agrupación", imagen: "/imagenes/grupos/6-agrupacion-vennuz-de-amor.webp", ancho: 272, alto: 211 },
];

// Producciones y servicios de la fiesta, en el orden de sus imágenes.
// Con rubro "" la tarjeta muestra solo el logo (así va Trebmil).
export const producciones = [
    { rubro: "Sonido", nombre: "Sonido Zeta", imagen: "/imagenes/produccion/1-sonido-zeta.webp" },
    { rubro: "Banda musical", nombre: "Intergaláctica Poopó Originales", imagen: "/imagenes/produccion/4-intergalactica-poopo.webp" },
    { rubro: "Producción", nombre: "Gran Faraón Producciones", imagen: "/imagenes/produccion/3-gran-faraon.webp" },
    { rubro: "Decoración", nombre: "RS Elegant Events", imagen: "/imagenes/produccion/5-rs-elegant-events.webp" },
    { rubro: "Seguridad", nombre: "Laser", imagen: "/imagenes/produccion/6-seguridad-laser.webp" },
    { rubro: "", nombre: "Trebmil Brazil", imagen: "/imagenes/produccion/7-trebmil.webp" },
];

/*
   El WhatsApp donde los invitados mandan sus fotos, con código de país y
   sin espacios ni "+" (ej. "59171234567"). Falta en información.txt: con
   el número vacío no se muestra el texto ni el botón "Enviar fotos".
*/
export const whatsappFotos = "";

const NUMEROS = ["", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];

/** "Pase para dos personas". La única función que arma esta frase. */
export function textoPase(pases: number): string {
    const cantidad = NUMEROS[pases] ?? String(pases);
    return `Pase para ${cantidad} ${pases === 1 ? "persona" : "personas"}`;
}
