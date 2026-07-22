import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/utils/hash'

const prisma = new PrismaClient()

const noticias = [
  {
    titulo: 'AntimonioFC ficha a promesa argentina Ignacio Palma',
    resumen: 'El mediocampista de 24 años llega como agente libre desde River Plate y firma por 3 temporadas.',
    contenido: `En un movimiento que ilusiona a la hinchada, Club Deportivo AntimonioFC anunció el fichaje de Ignacio Palma, mediocampista ofensivo de 24 años proveniente de River Plate. El jugador argentino llega con el pase en su poder tras finalizar su contrato con el club millonario.

Palma, quien puede desempeñarse como mediocampista central o volante ofensivo, firmó un contrato por tres temporadas con opción a una cuarta. "Estoy muy feliz de llegar a AntimonioFC. Es un club con mucha historia y una hinchada increíble. Voy a dar todo por esta camiseta", declaró el jugador en su presentación.

El técnico Eduardo Zamorano destacó la versatilidad del nuevo refuerzo: "Ignacio es un jugador con gran visión de juego y llegada al arco. Nos dará muchas opciones en el mediocampo y estamos seguros de que se adaptará rápidamente al fútbol chileno".

Con esta incorporación, AntimonioFC suma su tercer refuerzo para la temporada 2026, buscando consolidarse en los puestos de avanzada del Campeonato Nacional.`,
    fuente: 'El Deportivo',
    url: 'https://ejemplo.com/noticia1',
    imagen: null,
    categoria: 'Fichajes',
    fechaPublicacion: new Date('2026-07-14T10:00:00Z'),
  },
  {
    titulo: 'AntimonioFC inaugura nueva escuela de fútbol juvenil',
    resumen: 'Más de 200 niños participaron en la inauguración de la nueva escuela de fútbol del club en la comuna de Maipú.',
    contenido: `Con una emotiva ceremonia que contó con la presencia de jugadores del primer equipo, AntimonioFC inauguró su nueva escuela de fútbol juvenil en la comuna de Maipú. Más de 200 niños y niñas de entre 6 y 15 años participaron en las primeras jornadas de entrenamiento.

La nueva escuela, que lleva el nombre de "Semillero Antimonio", cuenta con dos canchas de césped sintético, camarines y un gimnasio equipado. El proyecto busca formar talentos locales y fortalecer el vínculo del club con la comunidad.

"Queremos ser un club que no solo compita en primera división, sino que también forme jugadores con identidad y pertenencia", señaló el presidente del club durante la inauguración. Las inscripciones para la temporada 2026-2027 ya están abiertas.`,
    fuente: 'La Tercera',
    url: 'https://ejemplo.com/noticia2',
    imagen: null,
    categoria: 'Club',
    fechaPublicacion: new Date('2026-07-12T08:30:00Z'),
  },
  {
    titulo: 'Triunfo agónico en la fecha 15 del Campeonato Nacional',
    resumen: 'AntimonioFC derrotó 2-1 a Deportes Iquique con un gol en el minuto 90+3. El equipo sigue en la parte alta de la tabla.',
    contenido: `En un partido vibrante disputado en el Estadio Antimonio Arena, el cuadro local se impuso por 2-1 ante Deportes Iquique en un encuentro correspondiente a la fecha 15 del Campeonato Nacional. El gol del triunfo llegó en el minuto 90+3 gracias a un cabezazo del defensor Diego Muñoz.

El partido comenzó cuesta arriba para los dirigidos por Eduardo Zamorano, ya que Iquique se puso en ventaja temprano mediante un penal bien ejecutado. Sin embargo, antes del entretiempo, el delantero Marcelo Rojas logró la igualdad con un remate cruzado dentro del área.

En el segundo tiempo, AntimonioFC dominó las acciones pero se encontró con una sólida defensa rival. Cuando todo parecía terminar en empate, un tiro de esquina bien ejecutado permitió el salto victorioso de Muñoz, desatando la euforia en las gradas.

Con este resultado, el equipo se mantiene en el tercer lugar de la tabla con 30 puntos, a solo 4 del líder Universidad de Chile.`,
    fuente: 'ADN Radio',
    url: 'https://ejemplo.com/noticia3',
    imagen: null,
    categoria: 'Partidos',
    fechaPublicacion: new Date('2026-07-10T22:15:00Z'),
  },
  {
    titulo: 'Entrevista exclusiva: "Este equipo tiene hambre de gloria"',
    resumen: 'El capitán Felipe Castro habla en exclusiva sobre el momento del equipo, los objetivos de la temporada y su futuro en el club.',
    contenido: `En una entrevista exclusiva con El Deportivo, el capitán de AntimonioFC, Felipe Castro, analizó el presente del equipo y compartió sus impresiones sobre la temporada 2026. El mediocampista de 27 años, referente indiscutido del club, se mostró optimista respecto a las aspiraciones del equipo.

"Este grupo es especial. Hay una mezcla muy linda entre jugadores jóvenes con hambre de gloria y veteranos que aportan experiencia. Creo que podemos pelear el campeonato hasta el final", señaló Castro, quien lleva 8 temporadas en la institución.

Sobre su futuro, el capitán fue claro: "Mi contrato termina a fin de año, pero mi intención es renovar. Este es mi casa y quiero seguir aportando al crecimiento del club. Estamos construyendo algo importante y quiero ser parte de eso".

Castro también tuvo palabras para la hinchada: "La gente de AntimonioFC es increíble. Siempre nos apoyan, en las buenas y en las malas. Les debemos una alegría grande y vamos a trabajar para dársela".`,
    fuente: 'El Deportivo',
    url: 'https://ejemplo.com/noticia4',
    imagen: null,
    categoria: 'Entrevistas',
    fechaPublicacion: new Date('2026-07-08T14:00:00Z'),
  },
  {
    titulo: 'AntimonioFC cierra acuerdo de patrocinio con marca deportiva internacional',
    resumen: 'El club firmó un convenio por 3 años con una reconocida marca de indumentaria deportiva que vestirá a todas las categorías.',
    contenido: `AntimonioFC anunció un importante acuerdo de patrocinio con la multinacional deportiva SportWorld, que vestirá al primer equipo y a todas las divisiones inferiores del club a partir de la temporada 2026-2027. El contrato, valorado en 2.5 millones de dólares anuales, representa el mayor acuerdo comercial en la historia de la institución.

La presentación oficial se realizó en el Estadio Antimonio Arena, donde los jugadores lucieron las nuevas camisetas de local, visita y alternativas. El diseño mantiene los colores tradicionales del club: azul marino con detalles naranjos.

"Este acuerdo nos permite dar un salto de calidad en términos de infraestructura y competitividad. Los recursos adicionales serán destinados a mejorar las instalaciones y fortalecer el área de captación de talentos", declaró el gerente general del club.

La nueva camiseta ya está disponible para preventa en la tienda oficial del club y en los puntos de venta autorizados.`,
    fuente: 'Radio Cooperativa',
    url: 'https://ejemplo.com/noticia5',
    imagen: null,
    categoria: 'Club',
    fechaPublicacion: new Date('2026-07-06T11:00:00Z'),
  },
  {
    titulo: 'AntimonioFC vence en su visita a Cobresal y se afianza en la tabla',
    resumen: 'Un solitario gol de Lucas Soto bastó para que el equipo se llevara los tres puntos desde El Salvador.',
    contenido: `AntimonioFC sumó una importante victoria como visitante al vencer 1-0 a Cobresal en el Estadio El Cobre, en un partido correspondiente a la fecha 14 del Campeonato Nacional. El único gol del encuentro fue obra del delantero Lucas Soto a los 67 minutos.

El partido fue muy disputado en el primer tiempo, con ambas escuadras generando ocasiones de peligro pero sin poder concretar. El arquero Matías Contreras fue figura al desviar un penal a los 40 minutos, manteniendo el arco en cero.

En el complemento, AntimonioFC ajustó la presión y encontró el gol tras una jugada colectiva que terminó con Soto definiendo cruzado ante la salida del arquero local. "Fue un partido muy duro, pero el equipo demostró carácter. Sabíamos que teníamos que ganar para mantenernos arriba", declaró el técnico Zamorano al finalizar el encuentro.

Con esta victoria, AntimonioFC alcanzó 27 puntos y se ubicó momentáneamente en el segundo lugar de la tabla, a la espera de los resultados del resto de la fecha.`,
    fuente: 'ADN Radio',
    url: 'https://ejemplo.com/noticia6',
    imagen: null,
    categoria: 'Partidos',
    fechaPublicacion: new Date('2026-07-04T20:00:00Z'),
  },
  {
    titulo: 'Juventud y proyección: los 5 canteranos que entrenan con el primer equipo',
    resumen: 'Cinco jóvenes formados en las divisiones inferiores fueron convocados para realizar la pretemporada con el plantel profesional.',
    contenido: `El técnico Eduardo Zamorano sorprendió al convocar a cinco jugadores de las divisiones inferiores para que realicen la pretemporada con el primer equipo. Se trata de jóvenes promesas que destacaron en las categorías sub-17 y sub-19 durante el último año.

Los convocados son el arquero Benjamín Muñoz (17 años), el defensor Lucas Arancibia (18), los mediocampistas Diego Rojas (17) y Matías Toledo (18), y el delantero Cristóbal Vera (17). Todos ellos participarán en los amistosos de preparación y podrían sumar minutos en la Copa Chile.

"La cantera es el corazón de este club. Estos jóvenes han trabajado muy duro y merecen esta oportunidad. Vamos a seguir de cerca su evolución porque tenemos la convicción de que varios de ellos serán importantes para el futuro de AntimonioFC", señaló Zamorano.

El club ha fortalecido en los últimos años su área de formación, con resultados visibles en la cantidad de juveniles que han debutado en el primer equipo.`,
    fuente: 'La Tercera',
    url: 'https://ejemplo.com/noticia7',
    imagen: null,
    categoria: 'Club',
    fechaPublicacion: new Date('2026-07-02T09:00:00Z'),
  },
  {
    titulo: 'Entrevista a la leyenda: "AntimonioFC está en sus mejores años"',
    resumen: 'El máximo goleador histórico del club, Carlos "Charly" Soto, analiza el presente del equipo y entrega consejos a los jóvenes.',
    contenido: `A sus 42 años, Carlos "Charly" Soto sigue siendo una figura emblemática de AntimonioFC. El máximo goleador histórico del club, con 187 tantos en 12 temporadas, conversó en exclusiva con El Deportivo sobre el presente de la institución.

"Veo a este AntimonioFC con mucho optimismo. Hay una base sólida de jugadores, un cuerpo técnico serio y una dirigencia que está haciendo las cosas bien. Creo que estamos en los mejores años del club", señaló Soto, quien se retiró en 2019.

El exdelantero también tuvo consejos para las jóvenes promesas: "El fútbol cambió mucho, pero hay valores que nunca pasan de moda: el respeto, la disciplina y el trabajo en equipo. Les diría que disfruten cada entrenamiento, cada partido, porque la carrera del futbolista es muy corta".

Soto, que actualmente trabaja como comentarista deportivo, no descarta volver al club en algún rol directivo: "Siempre he dicho que AntimonioFC es mi casa. Si en el futuro puedo aportar desde otra vereda, lo haría con mucho gusto".`,
    fuente: 'El Deportivo',
    url: 'https://ejemplo.com/noticia8',
    imagen: null,
    categoria: 'Entrevistas',
    fechaPublicacion: new Date('2026-06-30T16:00:00Z'),
  },
  {
    titulo: 'Mercado de pases: AntimonioFC busca un defensa central experimentado',
    resumen: 'La dirigencia ya trabaja en el próximo fichaje para reforzar la zaga central de cara al segundo semestre.',
    contenido: `Tras asegurar la llegada del mediocampista Ignacio Palma, la dirigencia de AntimonioFC centra sus esfuerzos en contratar un defensa central de jerarquía para fortalecer la última línea. Según fuentes cercanas al club, hay tres nombres sobre la mesa.

El principal candidato sería el experimentado zaguero paraguayo Robert Gamarra, de 32 años, actualmente en Liga de Quito. Las negociaciones estarían avanzadas y podría definirse en los próximos días. También suena el chileno Mauricio Zenteno, de 29 años, que milita en Unión Española.

El gerente deportivo del club confirmó que buscan "un jugador con experiencia, buen juego aéreo y capacidad de liderazgo en la cancha". La idea es cerrar la contratación antes del inicio del segundo semestre para que el nuevo jugador tenga tiempo de adaptarse al sistema.

El cuerpo técnico considera que la zaga central necesita un refuerzo de jerarquía para afrontar los desafíos del segundo semestre, donde el club aspira a pelear el título y clasificar a torneos internacionales.`,
    fuente: 'Radio Cooperativa',
    url: 'https://ejemplo.com/noticia9',
    imagen: null,
    categoria: 'Fichajes',
    fechaPublicacion: new Date('2026-06-28T12:30:00Z'),
  },
  {
    titulo: 'AntimonioFC empata en un intenso clásico ante Unión Española',
    resumen: 'El partido terminó 2-2 en el Santa Laura con un gran actuación del arquero visitante en los minutos finales.',
    contenido: `AntimonioFC rescató un valioso empate 2-2 en su visita a Unión Española en el Estadio Santa Laura, en un partido correspondiente a la fecha 13 del Campeonato Nacional. El equipo local dominó ampliamente el segundo tiempo, pero se encontró con una muralla llamada Matías Contreras.

El partido comenzó favorable para los visitantes, que se pusieron 2-0 gracias a los goles de Marcelo Rojas y Pablo Vega en los primeros 25 minutos. Sin embargo, Unión Española reaccionó y descontó antes del entretiempo mediante un cabezazo en tiro de esquina.

En el complemento, el equipo local fue ampliamente superior y logró la igualdad a los 70 minutos. En los minutos finales, Contreras realizó dos atajadas espectaculares que valieron el punto para AntimonioFC. "Ellos merecieron algo más, pero el fútbol a veces es así. Este punto sabe a victoria por cómo se dio el partido", declaró el capitán Castro.`,
    fuente: 'ADN Radio',
    url: 'https://ejemplo.com/noticia10',
    imagen: null,
    categoria: 'Partidos',
    fechaPublicacion: new Date('2026-06-25T21:30:00Z'),
  },
  {
    titulo: 'Obras del nuevo centro de entrenamiento avanzan a buen ritmo',
    resumen: 'El moderno complejo deportivo en la comuna de Pudahuel estará listo para enero de 2027, informó la directiva.',
    contenido: `Las obras del nuevo centro de entrenamiento de AntimonioFC en la comuna de Pudahuel avanzan según lo programado y estarían listas para enero de 2027. El complejo, que cuenta con una inversión de 8 millones de dólares, incluirá cuatro canchas de fútbol, gimnasio, piscina, consultorios médicos y residencia para jugadores.

El presidente del club recorrió las instalaciones junto a la prensa y mostró su satisfacción por el progreso de los trabajos. "Este centro será uno de los más modernos del fútbol chileno. Queremos que nuestros jugadores tengan las mejores condiciones para entrenar y prepararse", señaló.

El nuevo complejo también contempla un museo del club, una tienda oficial y espacios para la atención de hinchas. Se espera que la inauguración oficial sea en marzo de 2027, coincidiendo con el aniversario del club.`,
    fuente: 'La Tercera',
    url: 'https://ejemplo.com/noticia11',
    imagen: null,
    categoria: 'Club',
    fechaPublicacion: new Date('2026-06-23T10:00:00Z'),
  },
  {
    titulo: 'Entrevista: "Sueño con debutar en el estadio lleno"',
    resumen: 'El juvenil Cristóbal Vera, de 17 años, cuenta sus sensaciones tras ser convocado al primer equipo.',
    contenido: `Con apenas 17 años, Cristóbal Vera es una de las grandes promesas de las divisiones inferiores de AntimonioFC. El delantero, que fue convocado recientemente para entrenar con el primer equipo, atendió a los medios y compartió su emoción.

"Es un sueño que estoy viviendo. Desde chico que vengo a la cancha con mi papá y ahora estar entrenando con los jugadores que veía en la tele es increíble. Ojalá pueda debutar pronto y hacerlo en el Antimonio Arena lleno", expresó el joven delantero.

Vera es conocido por su velocidad y olfato de gol en las categorías inferiores, donde acumula 22 goles en la temporada 2025-2026. Su ídolo es el delantero Marcelo Rojas, con quien comparte entrenamientos a diario.

"Marcelo me ha aconsejado mucho, me dice que disfrute el proceso y que trabaje fuerte todos los días. Eso es lo que quiero hacer, aprender de los mejores y devolverle al club la oportunidad que me está dando", concluyó Vera.`,
    fuente: 'El Deportivo',
    url: 'https://ejemplo.com/noticia12',
    imagen: null,
    categoria: 'Entrevistas',
    fechaPublicacion: new Date('2026-06-21T15:00:00Z'),
  },
  {
    titulo: 'AntimonioFC cierra la contratación de volante uruguayo',
    resumen: 'Santiago Méndez, mediocampista de 26 años, llega procedente de Nacional de Montevideo por las próximas 4 temporadas.',
    contenido: `AntimonioFC sigue moviéndose en el mercado de pases y anunció la contratación del volante uruguayo Santiago Méndez, de 26 años, proveniente de Nacional de Montevideo. El jugador firmó un contrato por cuatro temporadas y se convertirá en el segundo refuerzo extranjero del club.

Méndez, que puede jugar como volante central o mixto, llega con el cartel de ser un jugador de gran despliegue físico y buena técnica. En Nacional disputó 128 partidos y marcó 15 goles, además de haber conquistado dos títulos locales.

"Vengo con muchas ganas de triunfar en el fútbol chileno. AntimonioFC me ofreció un proyecto deportivo serio y ambicioso, y no lo dudé. Espero poder aportar mi granito de arena para conseguir los objetivos del equipo", declaró Méndez en su arribo a Santiago.

El jugador uruguayo se incorporará de inmediato a los entrenamientos y podría debutar en la próxima fecha del Campeonato Nacional.`,
    fuente: 'Radio Cooperativa',
    url: 'https://ejemplo.com/noticia13',
    imagen: null,
    categoria: 'Fichajes',
    fechaPublicacion: new Date('2026-06-18T13:45:00Z'),
  },
  {
    titulo: 'Campaña de abonos para la segunda rueda del campeonato',
    resumen: 'AntimonioFC lanzó una promoción especial para los hinchas que adquieran su abono para los próximos partidos como local.',
    contenido: `AntimonioFC anunció el lanzamiento de su campaña de abonos para la segunda rueda del Campeonato Nacional 2026. Los hinchas podrán adquirir su pase para los 8 partidos que el club disputará como local en el Estadio Antimonio Arena.

Los precios varían según la ubicación: Preferencia a $80.000, General a $50.000 y Visita a $60.000. Además, los socios del club tendrán un descuento especial del 20% sobre estos valores. Los abonos incluyen beneficios adicionales como descuentos en la tienda oficial y prioridad en la compra de entradas para partidos de Copa Chile.

"Queremos que la gente viva la experiencia AntimonioFC. Nuestro estadio tiene que ser una fortaleza y para eso necesitamos el apoyo incondicional de nuestra hinchada", señaló el gerente comercial del club.

La campaña estará vigente hasta el 31 de julio o hasta agotar stock. Los interesados pueden adquirir sus abonos en la tienda oficial del club o a través del sitio web habilitado para tal efecto.`,
    fuente: 'El Deportivo',
    url: 'https://ejemplo.com/noticia14',
    imagen: null,
    categoria: 'Club',
    fechaPublicacion: new Date('2026-06-16T09:30:00Z'),
  },
  {
    titulo: 'AntimonioFC golea en la Copa Chile y avanza a octavos de final',
    resumen: 'El equipo se impuso 4-0 ante Deportes Colina en un partido donde el juvenil Cristóbal Vera anotó su primer gol oficial.',
    contenido: `AntimonioFC no tuvo piedad ante Deportes Colina y lo goleó 4-0 en el Estadio Antimonio Arena, en partido válido por la tercera fase de la Copa Chile 2026. La gran noticia de la noche fue el debut goleador del juvenil Cristóbal Vera, de 17 años, quien anotó el tercer tanto del encuentro.

Los goles del partido fueron obra de Marcelo Rojas (2), Cristóbal Vera y Lucas Soto. El equipo dominó de principio a fin, mostrando un juego vistoso y efectivo que ilusiona a la hinchada de cara a los próximos desafíos.

"Fue una noche especial. Pude cumplir el sueño de convertir mi primer gol como profesional y encima en casa. Se lo dedico a mi familia y a toda la gente que me apoya", declaró Vera tras el partido.

Con esta victoria, AntimonioFC avanzó a los octavos de final de la Copa Chile, donde enfrentará a Cobreloa en partido de ida y vuelta. El primer encuentro se disputará en el Estadio Antimonio Arena.`,
    fuente: 'ADN Radio',
    url: 'https://ejemplo.com/noticia15',
    imagen: null,
    categoria: 'Partidos',
    fechaPublicacion: new Date('2026-06-14T23:00:00Z'),
  },
]

async function main() {
  console.log('🌱 Seeding database...')

  // Clear existing data
  await prisma.entrada.deleteMany()
  await prisma.fichaje.deleteMany()
  await prisma.socio.deleteMany()
  await prisma.usuario.deleteMany()
  await prisma.staffTecnico.deleteMany()
  await prisma.noticia.deleteMany()
  await prisma.jugador.deleteMany()
  await prisma.partido.deleteMany()

  // Restart PostgreSQL sequences
  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Jugador_id_seq" RESTART WITH 1`)
  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "StaffTecnico_id_seq" RESTART WITH 1`)
  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Usuario_id_seq" RESTART WITH 1`)
  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Noticia_id_seq" RESTART WITH 1`)
  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Partido_id_seq" RESTART WITH 1`)
  await prisma.$executeRawUnsafe(`ALTER SEQUENCE "Fichaje_id_seq" RESTART WITH 1`)

  const jugadores = [
    // PORTEROS (3)
    { nombre: 'Matías Contreras', edad: 28, nacionalidad: 'Chilena', posicion: 'POR', numero: 1, foto: 'img/portero1.png', activo: true },
    { nombre: 'Benjamín Rojas', edad: 25, nacionalidad: 'Chilena', posicion: 'POR', numero: 12, foto: null, activo: true },
    { nombre: 'Cristóbal Soto', edad: 22, nacionalidad: 'Chilena', posicion: 'POR', numero: 22, foto: null, activo: true },

    // DEFENSAS (6)
    { nombre: 'Diego Muñoz', edad: 27, nacionalidad: 'Chilena', posicion: 'DEF', numero: 2, foto: 'img/defensa2.png', activo: true },
    { nombre: 'José Díaz', edad: 30, nacionalidad: 'Chilena', posicion: 'DEF', numero: 3, foto: 'img/defensa3.png', activo: true },
    { nombre: 'Carlos Torres', edad: 26, nacionalidad: 'Uruguaya', posicion: 'DEF', numero: 4, foto: 'img/defensa4.png', activo: true },
    { nombre: 'Francisco Pérez', edad: 29, nacionalidad: 'Chilena', posicion: 'DEF', numero: 5, foto: 'img/medio5.png', activo: true },
    { nombre: 'Rodrigo González', edad: 24, nacionalidad: 'Chilena', posicion: 'DEF', numero: 13, foto: null, activo: true },
    { nombre: 'Mauricio Fuentes', edad: 23, nacionalidad: 'Argentina', posicion: 'DEF', numero: 14, foto: null, activo: true },

    // MEDIOCAMPISTAS (6)
    { nombre: 'Felipe Castro', edad: 27, nacionalidad: 'Chilena', posicion: 'MED', numero: 6, foto: 'img/medio6.png', activo: true },
    { nombre: 'Pablo Vega', edad: 26, nacionalidad: 'Chilena', posicion: 'MED', numero: 7, foto: 'img/delantero7.png', activo: true },
    { nombre: 'Luis Mora', edad: 28, nacionalidad: 'Chilena', posicion: 'MED', numero: 8, foto: 'img/medio8.png', activo: true },
    { nombre: 'Ignacio Palma', edad: 24, nacionalidad: 'Argentina', posicion: 'MED', numero: 10, foto: 'img/medio10.png', activo: true },
    { nombre: 'Andrés Figueroa', edad: 25, nacionalidad: 'Chilena', posicion: 'MED', numero: 15, foto: null, activo: true },
    { nombre: 'Sergio Campos', edad: 22, nacionalidad: 'Chilena', posicion: 'MED', numero: 16, foto: null, activo: true },

    // DELANTEROS (7)
    { nombre: 'Marcelo Rojas', edad: 31, nacionalidad: 'Chilena', posicion: 'DEL', numero: 9, foto: 'img/delantero9.png', activo: true },
    { nombre: 'Lucas Soto', edad: 23, nacionalidad: 'Chilena', posicion: 'DEL', numero: 11, foto: 'img/delantero11.png', activo: true },
    { nombre: 'Javier López', edad: 26, nacionalidad: 'Chilena', posicion: 'DEL', numero: 17, foto: null, activo: true },
    { nombre: 'Tomás Martínez', edad: 21, nacionalidad: 'Chilena', posicion: 'DEL', numero: 18, foto: null, activo: true },
    { nombre: 'Gabriel Álvarez', edad: 27, nacionalidad: 'Argentina', posicion: 'DEL', numero: 19, foto: null, activo: true },
    { nombre: 'Sebastián Espinoza', edad: 20, nacionalidad: 'Chilena', posicion: 'DEL', numero: 20, foto: null, activo: true },
    { nombre: 'Matías Valenzuela', edad: 19, nacionalidad: 'Chilena', posicion: 'DEL', numero: 21, foto: null, activo: true },
  ] as const

  const staff = [
    { nombre: 'Eduardo Zamorano', edad: 54, rol: 'DT', nacionalidad: 'Chilena', foto: null, descripcion: 'Ex seleccionado nacional. 20 años de experiencia como entrenador.' },
    { nombre: 'Patricio Palma', edad: 48, rol: 'Asistente', nacionalidad: 'Chilena', foto: null, descripcion: 'Asistente técnico, especialista en formación táctica.' },
    { nombre: 'Marcelo Briones', edad: 42, rol: 'PF', nacionalidad: 'Chilena', foto: null, descripcion: 'Preparador Físico, master en ciencias del deporte.' },
    { nombre: 'Dr. Juan Pablo Lagos', edad: 50, rol: 'Médico', nacionalidad: 'Chilena', foto: null, descripcion: 'Médico deportólogo del club desde 2018.' },
  ] as const

  // Insert jugadores
  for (const j of jugadores) {
    await prisma.jugador.create({ data: { ...j } })
    console.log(`  ✓ ${j.nombre} (#${j.numero}) — ${j.posicion}`)
  }

  // Insert staff
  for (const s of staff) {
    await prisma.staffTecnico.create({ data: { ...s } })
    console.log(`  ✓ ${s.nombre} — ${s.rol}`)
  }

  // Insert noticias
  for (const n of noticias) {
    await prisma.noticia.create({ data: { ...n } })
    console.log(`  ✓ ${n.titulo.substring(0, 60)}... [${n.categoria}]`)
  }

  // Insert admin usuario
  const adminPassword = await hashPassword('admin123')
  await prisma.usuario.create({
    data: { nombre: 'Admin Antimonio', email: 'admin@antimoniofc.cl', password: adminPassword, rol: 'admin' },
  })
  console.log('  ✓ Admin Antimonio (admin@antimoniofc.cl) — admin')

  // ---- Partidos ----
  // Fechas distribuidas en los próximos 60 días. Las horas son 16:00 o 20:00.
  // Estadio local: Estadio Antimonio Arena. Estadio visita: estadio del rival.
  const ahora = new Date()
  const daysFromNow = (d: number) => {
    const fecha = new Date(ahora)
    fecha.setDate(fecha.getDate() + d)
    fecha.setHours(0, 0, 0, 0)
    return fecha
  }

  const partidos = [
    { rival: 'Cobreloa',           fecha: daysFromNow(7),  hora: '16:00', estadio: 'Estadio Antimonio Arena',  competicion: 'Campeonato Nacional', local: true  },
    { rival: 'Universidad de Chile', fecha: daysFromNow(14), hora: '20:00', estadio: 'Estadio Nacional',         competicion: 'Campeonato Nacional', local: false },
    { rival: 'Colo-Colo',          fecha: daysFromNow(21), hora: '16:00', estadio: 'Estadio Monumental',        competicion: 'Campeonato Nacional', local: false },
    { rival: 'Universidad Católica', fecha: daysFromNow(28), hora: '20:00', estadio: 'Estadio Antimonio Arena',  competicion: 'Campeonato Nacional', local: true  },
    { rival: 'Audax Italiano',     fecha: daysFromNow(35), hora: '20:00', estadio: 'Estadio Bicentenario La Florida', competicion: 'Copa Chile',     local: false },
    { rival: 'Huachipato',         fecha: daysFromNow(45), hora: '16:00', estadio: 'Estadio Antimonio Arena',  competicion: 'Campeonato Nacional', local: true  },
    { rival: 'Everton',            fecha: daysFromNow(55), hora: '20:00', estadio: 'Estadio Sausalito',         competicion: 'Campeonato Nacional', local: false },
  ] as const

  for (const p of partidos) {
    await prisma.partido.create({
      data: {
        rival: p.rival,
        fecha: p.fecha,
        hora: p.hora,
        estadio: p.estadio,
        competicion: p.competicion,
        local: p.local,
        precioPreferencia: 15.0,
        precioGeneral: 10.0,
        precioVisita: 12.0,
      },
    })
    console.log(`  ✓ vs ${p.rival} — ${p.fecha.toISOString().slice(0, 10)} ${p.hora} (${p.competicion})`)
  }

  // ---- Fichajes (altas y bajas de la temporada) ----
  const daysAgo = (d: number) => {
    const fecha = new Date(ahora)
    fecha.setDate(fecha.getDate() - d)
    fecha.setHours(0, 0, 0, 0)
    return fecha
  }

  const fichajes = [
    // Altas
    { jugadorId: 14, tipo: 'ALTA' as const, clubOrigen: 'River Plate', clubDestino: 'AntimonioFC', tipoOperacion: 'TRASPASO', fecha: daysAgo(5), monto: 850000, descripcion: 'Mediocampista ofensivo argentino. Firma por 3 temporadas.', activo: true },
    { jugadorId: 22, tipo: 'ALTA' as const, clubOrigen: 'Nacional de Montevideo', clubDestino: 'AntimonioFC', tipoOperacion: 'CESION', fecha: daysAgo(12), monto: null, descripcion: 'Volante uruguayo. Cesión por 1 temporada con opción de compra.', activo: true },
    { jugadorId: 16, tipo: 'ALTA' as const, clubOrigen: 'Coquimbo Unido', clubDestino: 'AntimonioFC', tipoOperacion: 'TRASPASO', fecha: daysAgo(20), monto: 320000, descripcion: 'Mediocampista chileno de proyección.', activo: true },
    { jugadorId: 13, tipo: 'ALTA' as const, clubOrigen: 'Deportes La Serena', clubDestino: 'AntimonioFC', tipoOperacion: 'FIN_CONTRATO', fecha: daysAgo(30), monto: null, descripcion: 'Lateral derecho llega como agente libre.', activo: true },
    { jugadorId: 19, tipo: 'ALTA' as const, clubOrigen: 'Racing Club', clubDestino: 'AntimonioFC', tipoOperacion: 'TRASPASO', fecha: daysAgo(45), monto: 1200000, descripcion: 'Delantero argentino, refuerzo de jerarquía para el ataque.', activo: true },
    // Bajas
    { jugadorId: 3, tipo: 'BAJA' as const, clubOrigen: 'AntimonioFC', clubDestino: 'Unión Española', tipoOperacion: 'TRASPASO', fecha: daysAgo(8), monto: 250000, descripcion: 'Portero transferido a Unión Española.', activo: true },
    { jugadorId: 17, tipo: 'BAJA' as const, clubOrigen: 'AntimonioFC', clubDestino: 'San Luis de Quillota', tipoOperacion: 'CESION', fecha: daysAgo(18), monto: null, descripcion: 'Delantero cedido para sumar minutos.', activo: true },
    { jugadorId: 18, tipo: 'BAJA' as const, clubOrigen: 'AntimonioFC', clubDestino: 'Deportes Puerto Montt', tipoOperacion: 'CESION', fecha: daysAgo(25), monto: null, descripcion: 'Joven delantero cedido para foguearse.', activo: true },
    { jugadorId: 21, tipo: 'BAJA' as const, clubOrigen: 'AntimonioFC', clubDestino: 'Curicó Unido', tipoOperacion: 'FIN_CONTRATO', fecha: daysAgo(40), monto: null, descripcion: 'Fin de contrato. No se renovó.', activo: true },
    { jugadorId: 15, tipo: 'BAJA' as const, clubOrigen: 'AntimonioFC', clubDestino: 'Cobreloa', tipoOperacion: 'TRASPASO', fecha: daysAgo(55), monto: 150000, descripcion: 'Mediocampista traspasado a Cobreloa.', activo: true },
  ] as const

  for (const f of fichajes) {
    await prisma.fichaje.create({ data: { ...f } })
    console.log(`  ✓ ${f.tipo === 'ALTA' ? '➕' : '➖'} ${f.clubOrigen} → ${f.clubDestino} (${f.tipoOperacion})`)
  }

  console.log(`\n✅ Seed complete: ${jugadores.length} jugadores, ${staff.length} staff, ${noticias.length} noticias, 1 admin, ${partidos.length} partidos, ${fichajes.length} fichajes`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
