let OriginalTexts = [
    {
        id: 0,
        text: "Te despiertas.<br/> Parece una mañana como cualquier otra.<br/> Pero hay algo diferente : Tienes una cita hoy.",
        mostrar: true,
        imgsrc: "./imgs/sleeping.png"
    },
    {
        id: 1,
        text: "Te levantas y vas a prepararte. Te duchas, te vistes, y decides desayunar.<br/> Qué desayunas?",
        mostrar: true,
        opciones: {
            a: "Tostadas",
            b: "Un vaso de leche",
        },
    },
    {
        id: '2a',
        text: "Metes el pan en la tostadora y te vas a dar de comer a Cherry, tu gato.<br/> Casi te olvidas de él.",
        mostrar: false,
    },
    {
        id: '2b',
        text: "Echas algo de leche en un vaso y te la bebes. Ahora al menos no te rugirá la tripa en medio de la cita.<br/> Ahora toca ir a dar de comer a Cherry, tu gato. Casi te olvidas de él.",
        mostrar: false,
    },
    {
        id: '3',
        text: "Has tardado en prepararte más de lo que crías que te iba a costar.<br/> Sales a la calle. ",
        mostrar: true,
    },
    {
        id: '4',
        affected: "2a",
        text: "Se te ha olvidado la tostada.",
        mostrar: false,
    },
    {
        id: '5',
        text: "Miras la hora, son las 10:54. Habéis quedado a las 11 en un café a media hora de tu apartamento.<br/> Parece que estás llegando tarde. Otra vez.",
        mostrar: true,
    },
    {
        id: '6',
        text: "Quizá podrías coger el metro. Aunque no te queda mucho dinero.<br/> ¿Qué haces?",
        mostrar: true,
        opciones: {
            a: "Metro",
            b: "Ir andando"
        }
    },
    {
        id: '7a',
        text: "Bajas a la estación. Te sientas en uno de los bancos que hay a lo largo del andén.<br/> El próximo tren viene en 11 minutos. Decides esperar.",
        mostrar: false,
        imgsrc: "./imgs/metro.png"
    },
    {
        id: '7b',
        text: "Vas caminando hacia el café. Tienes bastante sueño, pero el ligero paso con el que vas hace que eso no importe tanto.",
        mostrar: false,
        imgsrc: "./imgs/walking.png"
    },
    {
        id: '8',
        affected: "7a",
        text: "Te pones los cascos y te hundes en la múscia. Tienes bastante sueño.<br/> Tus párpados pesan cada vez más y más.<br/> Los cierras.",
        mostrar: false,
    },
    {
        id: '9',
        affected: "7a",
        final: true,
        text: "Te estás durmiendo...",
        mostrar: false,
    },
    {
        id: '10',
        text: "Estás en frente del local en el que habéis quedado. Miras tu móvil : Son las 11:20, y no tienes ninguna notificación. <br/>Qué raro. Supongo que también estará llegando tarde.",
        mostrar: true,
    },
    {
        id: '11',
        text: "Entras al café.",
        mostrar: true,
        imgsrc: "./imgs/bar.png"
    },
    {
        id: '12',
        text: "Está vacío. Completamente vacío. Tan vacío que se te hace incómodo estar dentro. Te empiezas a preguntar qué está pasando:<br/> “¿Debería estar aquí?”, “¿Seguro que era este sitio?”...",
        mostrar: true,
    },
    {
        id: '13',
        text: "Decides sentarte en una de las mesas.",
        mostrar: true,
    },
    {
        id: '14',
        text: "Decides sentarte en una de las mesas. La oscuridad del local, junto con el tinte rojo que le dan al ambiente las luces fluorescentes pegan en tus ojos. <br/>Qué vas a hacer ahora?",
        mostrar: true,
        opciones: {
            a: "Esperar",
            b: "Buscar personal del café"
        }
    },
    {
        id: '15a',
        text: "Decides ser paciente y esperar.",
        mostrar: false,
    },
    {
        id: '15b',
        text: "Te levantas y te diriges hacia la barra. La puerta que lleva a la cocina está abierta.<br/> “Perdón, ¿Hay alguien?”. ",
        mostrar: false,
    },
    {
        id: '16',
        affected: "15b",
        text: "Silencio. <br/>¿Qué haces?",
        mostrar: false,
        opciones: {
            a: "Entrar en la cocina",
            b: "Volver a tu mesa"
        }
    },
    {
        id: '17a',
        affected: "15b",
        text: "Te acercas a la puerta de la cocina. Notas algo raro.",
        mostrar: false,
    },
    {
        id: '17b',
        affected: "15b",
        text: "Decides no entrar en la cocina. Ellos sabrán qué hacen. Vuelves a tu mesa y te sientas.",
        mostrar: false,
    },
    {
        id: '18',
        affected: "17a",
        text: "Hay una persona tirada en el suelo. Tratas de acercarte para comprobar si está viva, pero al dar el primer paso te resbalas en el charco de aceite que hay en el suelo, justo a un lado de la persona.",
        mostrar: false,
    },
    {
        id: '19',
        affected: "17a",
        final: true,
        text: "Golpeas el suelo con la cabeza en seco. Te has dormido.",
        mostrar: false,
    },
    {
        id: '20',
        text: "Quizá sea buena idea llamarle. Le llamas... No contesta. Le llamas otra vez, tampoco contesta. Decides mandarle un mensaje : “Dónde estás? Vas a venir?”.",
        mostrar: true,
    },
    {
        id: '21',
        text: "Sigues esperando...",
        mostrar: true,
    },
    {
        id: '22',
        text: "Se abre la puerta del café. Entra ella. Ya casi te habías olvidado de esos ojos.",
        mostrar: true,
    },
    {
        id: '23',
        text: "Se disculpa por llegar tarde, y empieza a contar con rabia la razón por la que llegó tarde. Parece que algún “imbécil” causó un accidente por montar un teatro en medio de la carretera.",
        mostrar: true,
    },
    {
        id: '24',
        text: "Ella continúa hablando. Siempre ha sido más habladora que tú. Es vuestra cuarta cita, y sigues igual de callado que en la primera. ",
        mostrar: true,
    },
    {
        id: '25',
        text: "El tiempo pasa volando. Miras la hora y ya son casi las cuatro de la tarde. Te acabas de acordar del plan que teníais de ir a la bolera. Ella dice que os puede llevar. Qué haces?",
        mostrar: true,
        opciones: {
            a: "Ir en coche",
            b: "Ir en metro"
        }
    },
    {
        id: '26a',
        text: "Aceptas su propuesta de ir en coche. Os metéis en su coche. <br/> Pones la radio. ",
        mostrar: false,
        imgsrc: "./imgs/car.png"
    },
    {
        id: '26b',
        text: "Bajáis a la estación. Os sientáis en uno de los bancos que hay a lo largo del andén. <br/> El próximo tren viene en 3 minutos, habéis tenido suerte.",
        mostrar: false,
        imgsrc: "./imgs/metro.png"
    },
    {
        id: '27',
        affected: "26a",
        text: "Estáis en silencio. La música es muy relajante. Nunca pensaste que acabarías en más de una cita con ella. Te das cuenta de que no quieres separarte de ella. Lo único que alegra tu vida es Cherry, y prácticamente no le prestas atención. ",
        mostrar: false,
    },
    {
        id: '28',
        affected: "26a",
        text: "Estás poco a poco perdiendo todo lo que te hace feliz.<br/> Estás poco a poco perdiendo el suelo del coche.",
        mostrar: false,
    },
    {
        id: '29',
        affected: "26a",
        final: true,
        text: "Te estás durmiendo...",
        mostrar: false,
    },
    {
        id: '30',
        text: "Os sentáis en el asiento de al lado de la puerta de salida del tren. Después de dos paradas, se sube un hombre en el que notas algo raro. Quizá sea la manera de la que va vestido, quizá sea su cara que te es familiar. ",
        mostrar: true,
    },
    {
        id: '31',
        text: "Ella se empieza a comportar raro.",
        mostrar: true,
    },
    {
        id: '32',
        text: "“Es él. Es el hombre que causó el accidente... ” <br/>Os quedan pocas paradas. Dos para ser más específico. Así que lo ignoráis.",
        mostrar: true,
    },
    {
        id: '33',
        text: "Llegais a la bolera. <br/> Está llena de gente.",
        mostrar: true,
        imgsrc: "./imgs/bowling.png"
    },
    {
        id: '34',
        text: "Reserváis una mesa. Ella pide un cóctel con tequila. <br/> ¿Qué pides tú?",
        mostrar: true,
        opciones: {
            a: "Lo mismo",
            b: "Algo sin alcohol"
        }
    },
    {
        id: '35a',
        text: "Pides lo mismo que ella y os ponéis a jugar. ",
        mostrar: false,
    },
    {
        id: '35b',
        text: "Pides un refresco y os ponéis a jugar. ",
        mostrar: false,
    },
    {
        id: '36',
        text: "Te habías olvidado de lo bueno que eras jugando a los bolos. Os lo estáis pasando muy bien, ella se ve feliz. ",
        mostrar: true,
    },
    {
        id: '37',
        text: "Empiezas a recordar la última cita que tuvisteis, hace tres semanas. Su padre recién había fallecido. <br/> Te arrepientes de haber acabado ese día en su cama, no era el momento.",
        mostrar: true,
    },
    {
        id: '38',
        affected: "2b",
        text: "Te estás empezando a marear.",
        mostrar: false,
    },
    {
        id: '39',
        affected: "2b",
        text: "Te disculpas y vas al baño. <br/> Te está costando respirar, te ahogas. Notas tu pulso acelerar. No entiendes qué está pasando... Te estás desmayando.",
        mostrar: false,
    },
    {
        id: '40',
        affected: "2b",
        final: true,
        text: "Tienes alergia a la leche. </br> ¿...Cómo te podías haber olvidado...?",
        mostrar: false,
    },
    {
        id: '41',
        text: "Ya ha pasado un rato. Os sentáis en la mesa. Sabes que ambos estáis cansados. Miras la hora: las 9 de la tarde.",
        mostrar: true,
    },
    {
        id: '42',
        text: "Deberías ir terminando. ",
        mostrar: true,
        opciones: {
            a: "Proponer ir a tu casa",
            b: "Despedirte"
        }
    },
    {
        id: '43a',
        text: "“¿No quieres venir a ver a Cherry?” <br/> Ella acepta, hasta con algo de entusiasmo.",
        mostrar: false,
    },
    {
        id: '43b',
        text: "Te despides de ella. Se le nota triste, pero sabes que es la decisión correcta.",
        mostrar: false,
    },
    {
        id: '44',
        affected: "43a",
        text: "Os váis juntos. Bajaís al metro, y veís un cartel: <br/> “Cerrado por obras desde las 19:30 del 2/10 al...”. <br/> Está cerrado.",
        mostrar: false,
    },
    {
        id: '45',
        affected: "43a",
        text: "Os arrepentís de no haber venido en coche, ahora habrá que ir andado. ",
        mostrar: false,
    },
    {
        id: '46',
        affected: "43a",
        text: "Está empezando a hacer frío. El ambiente se ha llenando se una niebla densa. Se le nota más triste que antes. ",
        mostrar: false,
        imgsrc: "./imgs/fog.png"
    },
    {
        id: '47',
        affected: "43a",
        text: "Seguís caminando en silencio. Estáis solos, lo único que os acompaña es el humo que sale al respirar.<br/> Decides intentar animar el ambiente y empezar un tema.",
        mostrar: false,
    },
    {
        id: '48',
        affected: "43a",
        text: "Pero justo antes de que sueltes la primera palabra ella te interrumpe. <br/> “No digas nada.” <br/> No entiendes nada. Le miras y ves que está haciendo gestos con los ojos para que mires hacia atrás.",
        mostrar: false,
    },
    {
        id: '49',
        affected: "43a",
        text: "Ves a un par de hombres a lo lejos. No es para tanto, habrá gente volviendo de la bolera, como vosotros. Sigues caminando.",
        mostrar: false,
    },
    {
        id: '50',
        affected: "43a",
        text: "Ella insiste en ir más rápido. Le haces caso. <br/> Aumentaís el ritmo.<br/> Te giras y te das cuenta de que están corriendo hacia vosotros.",
        mostrar: false,
    },
    {
        id: '51',
        affected: "43a",
        text: "Empezáis a correr. Tu pulso se acelera. Notas un fuerte vacío en tu estómago. <br/>Tienes miedo.",
        mostrar: false,
    },
    {
        id: '52',
        affected: "43a",
        text: "Ella se está empezando a quedar atrás. La van a pillar.",
        mostrar: false,
    },
    {
        id: '53',
        affected: "43a",
        text: "Uno de los hombres la agarra por la bufanda.<br/> ¿Qué vas a hacer ahora?",
        mostrar: false,
        opciones: {
            a: "La proteges",
            b: "Sigues corriendo"
        }
    },
    {
        id: '54a',
        text: "Das la vuelta y te tiras sobre el hombre que la ha agarrado. Se cae al suelo, pero sigue teniéndola agarrada de la bufanda. La está ahogando.",
        mostrar: false,
    },
    {
        id: '54b',
        text: "Decides no pararte. Sigues corriendo hacia delante. <br/> Nunca te vas a poder perdonar esto...",
        mostrar: false,
    },
    {
        id: '55',
        affected: "54a",
        text: "El segundo hombre te da una patada en la tripa.<br/> No puedes hacer otra cosa que morderte la lengua del dolor. Piensas que así distrarás tu cerebro del dolor real, siempre has hecho eso.",
        mostrar: false,
    },
    {
        id: '56',
        affected: "54a",
        text: "Esta vez no está funcionando.",
        mostrar: false,
    },
    {
        id: '57',
        affected: "54a",
        text: "El hombre que te pegó te empuja de encima del otro con otra patada, esta vez en el costado. Te pone con el tripa hacia el suelo y se sienta encima. <br/> Se empiezan a reír.",
        mostrar: false,
    },
    {
        id: '58',
        affected: "54a",
        text: "Giras la cabeza y ves que la sigue agarrando de la bufanda. Ya no sabes ni si está consciente o no.<br/>Gritas su nombre.</br>No contesta.",
        mostrar: false,
    },
    {
        id: '59',
        affected: "54a",
        text: "El hombre empieza a bajarle los vaqueros. <br/>Sabes qué significa eso.",
        mostrar: false,
    },
    {
        id: '60',
        affected: "54a",
        text: "Un fuerte calor llena tu cuerpo.</br>Intentas con toda tu fuerza quitar al hombre de encima de ti. Das patadas, te mueves de un lado a otro. <br/> Estás llorando.",
        mostrar: false,
    },
    {
        id: '61',
        affected: "54a",
        final: true,
        text: "Notas un golpe en la nuca. Ya no estás llorando. Ya no hay nada.",
        mostrar: false,
    },
    {
        id: '62',
        affected: "54b",
        text: "Mientras corres no puedes evitar girarte. Ella sigue en el suelo, ellos están alrededor.<br/>No puedes sacar el “¿Por qué?” de tu cabeza. Empiezas a recordar su sonrisa hoy, lo feliz que estaba.",
        mostrar: false,
    },
    {
        id: '63',
        affected: "54b",
        text: "“¿Cómo puede todo terminar así?”<br/>Empiezas a llorar, recordando todo lo que habéis pasado juntos. No la conocías de más de cuatro días, pero esos días habían significado para ti más que los últimos años.",
        mostrar: false,
    },
    {
        id: '64',
        affected: "54b",
        text: "Y aquí estás, corriendo como un cobarde. Prácticamente sin sentir los pies.<br/>Te giras una última vez, y ves a los dos hombres encima de ella. <br/> Antes de poder darte cuenta de nada, te tropiezas y caes.",
        mostrar: false,
    },
    {
        id: '65',
        affected: "54b",
        final: true,
        text: "Tu cabeza se golpea con una roca del camino. Estás inconsciente...",
        mostrar: false,
    },
    {
        id: '66',
        text: "Bajaís al metro, y veís un cartel: <br/> “Cerrado por obras desde las 19:30 del 2/10 al...”.<br/>Está cerrado.",
        mostrar: true,
    },
    {
        id: '67',
        text: "Ella decide coger un taxi.",
        mostrar: true,
    },
    {
        id: '68',
        text: "Decides esperar con ella.<br/>Estáis sentados en un banco en las afueras de la bolera. La temperatura ha bajado bastante desde que entrasteis. Los dedos de tus pies se están empezando a dormir.",
        mostrar: true,
        imgsrc: "./imgs/bench.png"
    },
    {
        id: '69',
        text: "Miras al suelo y ves una pequeña piedrita. La coges y se la tiras. Pareces un niño pequeño.",
        mostrar: true,
    },
    {
        id: '70',
        text: "Ella la levanta y te la tira de vuelta mientras se ríe. <br/>Recuerdas que mañana vas a volver a tu rutina y notas el peso de tu hombros, que había desaparecido al estar con ella, volviendo. Tu mirada cambia.",
        mostrar: true,
    },
    {
        id: '71',
        text: "“¿Estás bien?” <br/>No lo estás. <br/>“Sí, ¿por qué?” <br/> “No lo sé, estás raro.”",
        mostrar: true,
    },
    {
        id: '72',
        text: "“Te mira. No puedes mirarle a los ojos. Miras hacia delante",
        mostrar: true,
    },
    {
        id: '73',
        text: "“Ya está aquí.” <br/>Ves el taxi en frente de vosotros. Ella se levanta, te da un abrazo.",
        mostrar: true,
        opciones: {
            a: "Le besas",
            b: "No haces nada"
        }
    },
    {
        id: '74a',
        text: "Agarras su brazo, te levantas, y le besas.",
        mostrar: false,
    },
    {
        id: '74b',
        text: "Se mete en el taxi y se va.",
        mostrar: false,
    },
    {
        id: '75',
        affected: "74a",
        text: "Ella sonríe tímidamente, y se mete en el taxi.",
        mostrar: false,
    },
    {
        id: '76',
        text: "No te queda dinero después de la bolera, no puedes ir en taxi. Así que habrá que ir a casa andando.",
        mostrar: true,
    },
    {
        id: '77',
        text: "Patear piedras mientras caminas calienta un poco tus pies. Tenías que haberte puesto más ropa.<br/>Has pasado un buen día al menos. Ahora toca bajar del cielo a tu vida real.<br/>Cherry. Tendrá hambre...",
        mostrar: true,
    },
    {
        id: '78',
        text: "Llegas a tu casa después de 40 minutos de caminar. No sientes ni tu pies, ni tus manos.<br/>Le pones comida en el plato a tu gato. Suficiente para los días que te cueste acordarte de él de nuevo.",
        mostrar: true,
        imgsrc: "./imgs/cat.png"
    },
    {
        id: '79',
        text: "Te metes en la cama. Miras la hora: las 23:03.",
        mostrar: true,
        opciones: {
            a: "Enviarle un mensaje",
            b: "Dormir"
        },
        imgsrc: "./imgs/bed.png"
    },
    {
        id: '80a',
        text: "Le envías un mensaje. <br/>”¿Has llegado bien?”",
        mostrar: false,
    },
    {
        id: '80b',
        final: true,
        text: "Apagas el móvil, lo dejas bajo la almohada. <br/>Cierras los ojos. Te duermes.",
        mostrar: false,
    },
    {
        id: '81',
        text: "No le llegan.",
        mostrar: true,
        opciones: {
            a: "Llamarle",
            b: "Dormir"
        }
    },
    {
        id: '82a',
        text: "Le llamas.<br/>Conecta.</br>”Hola, ¿Mia?”",
        mostrar: false,
    },
    {
        id: '82b',
        final: true,
        text: "Apagas el móvil, lo dejas bajo la almohada. <br/>Cierras los ojos. Te duermes.",
        mostrar: false,
    },
    {
        id: '83',
        text: "“Buenos días, ¿es usted familiar de Mia?”",
        mostrar: true,
    },
    {
        id: '84',
        text: "“No, pero somos cercanos. ¿Qué ha pasado? ¡¿Está bien?!”",
        mostrar: true,
    },
    {
        id: '85',
        text: "“Lamentamos comunicarle que Mia ha fallecido en un accidente de tráfico. No hemos podido hacer más...”",
        mostrar: true,
    },
    {
        id: '86',
        text: "No.",
        mostrar: true,
    },
    {
        id: '87',
        text: "Tu clavícula, tus manos, se están durmiendo. Tu visión se nubla.<br/>Cuelgas.",
        mostrar: true,
    },
    {
        id: '88',
        text: "No puedes dejar de pensar en ella. No es posible. Estaba contigo. <br/>Tenía que haber venido contigo.",
        mostrar: true,
    },
    {
        id: '89',
        text: "No puedes evitar pensar en cómo va a ser tu vida ahora.<br/>Va a seguir igual.<br/>El tiempo completo que habéis pasado juntos no llega ni a una semana. No puedes parar de llorar, de imáginarte tu vida con ella.",
        mostrar: true,
    },
    {
        id: '90',
        text: "Cherry se sube a la cama.<br/>Ahora sí. Él es lo único que te queda.",
        mostrar: true,
    },
    {
        id: '91',
        text: "Poco a poco vas a cerrando tus ojos. <br/>Te duermes...",
        mostrar: true,
    },
    {
        id: '92',
        final: true,
        text: "Te despiertas. Parece una mañana como cualquier otra. Pero hay algo diferenete : Te falta ella.",
        mostrar: true,
        imgsrc: "./imgs/sleeping.png"
    },
];
export default OriginalTexts;