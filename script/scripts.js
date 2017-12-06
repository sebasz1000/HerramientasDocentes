

	 $(document).ready( function(){
	 	var firstContainer;
	 	var menu = document.getElementById('menu');
	 	var itemsArray = document.querySelectorAll('.item');
	 	var firstContainerArray = document.querySelectorAll(".firstContainer");
	 	var secondContainer =  document.getElementById('secondContainer');
	 	var firstH1 = $('h1', firstContainer);
	 	var firstH2 = $('h2', firstContainer);
	 	var secondH1 = $('h1', secondContainer);
	 	var secondH2 = $('h2', secondContainer);
	 	var secondP = $('p', secondContainer);
	 	var overId;
	 	
	 		for (var i = 0; i < itemsArray.length; i++) {
	 			var itemId= $(firstContainerArray[i]).attr("id");
	 			var imgTag = firstContainerArray[i].querySelectorAll("img");
	 			$(imgTag).attr('src', 'img/'+ itemId + '.jpg');
	 			
	 			
	 				//window.alert($(imgTag[i]).attr("id"));
				  	
				  		//$(itemsArray[i].getElementsByClassName("firstContainer")[0].getElementsByTagName("img")[0]).src = "img/word.jpg";
				  	
				  }

				  window.onresize=function(){
				  	var w = window.innerWidth;
				  	if(w>480 && menu.style.display === "none"){
				  		$( menu ).animate({ "height": "toggle" }, "fast" );
				  	}

				 };

		   $('.aHolder').click(function(){
		   	var idSel = $(this).attr('id');
		   	$(".aHolder").each(function() {
    			$( this ).removeClass( "active" );
  			});
		   	$(this).addClass('active');

		   	//window.alert(idSel);
			  	for (var i = 0; i < itemsArray.length; i++) {
				  	if($(itemsArray[i]).hasClass(idSel)==false){
				  		$(itemsArray[i]).fadeOut();
				  	}else{
				  		$(itemsArray[i]).fadeIn();
				  	}
			  	}
	  	
 			 });

		     $('#mobileMenu').click(function(){
		   	  
		   	   $( menu ).animate({ "height": "toggle" }, "fast" );
	  	
 			 });


// movimientoCortina


         $('.item').mouseenter( function(){
          
          	

	          firstContainer =  $(this).children('.firstContainer');
	           firstH1 = $('h1', firstContainer);
	           firstH2 = $('h2', firstContainer);
	           //window.alert(firstH1.html());
	           secondH1.html(firstH1.html());
	           secondH2.html(firstH2.html());
	          overId = firstContainer.attr('id');   // get item id while over
	          chargeContent(overId);


	          $('#secondContainer').insertAfter($(this).find($('.firstContainer')));

	          firstContainer.delay(300).animate({
	            marginTop:"-200",
	           });

        
          }); //mouse enter



         $('.item').mouseleave( function(){
         	 firstContainer =  $(this).children('.firstContainer');

             
	          firstContainer.animate({
	            marginTop:"0",
	           },200);


  	 	 }); //mouse leave


        function chargeContent(overId){
		switch(overId){
				case 'word':
				secondH1.html("Word Open Office");
				secondP.html("Elaboración de textos con posibilidad de incluir: tablas, cuadros, imágenes, fotos, ecuaciones.");
				 break;
				 case 'googleDrive':
				secondH1.html("Google Drive");
				secondP.html("Elaboración de textos con posibilidad de incluir: tablas, cuadros, imágenes, fotos, ecuaciones.  Permite compartir y trabajar colaborativamente en red.");
				 break;
				 case 'adobeReader':
				secondH1.html("Adobe Reader");
				secondP.html("Aplicación que permite la lectura de documentos en formato pdf.");
				 break;
				 case 'iLovePDF':
				secondH1.html("I love PDF");
				secondP.html("Aplicación que permite editar (dividir o unir solamente) documentos en formato pdf.  En dicha página encuentra una descarga que posibilita editar, crear, convertir, archivos de Word a pdf.");
				 break;
				 case 'slideShare':
				secondH1.html("SlideShare");
				secondP.html("SlideShare ofrece a los usuarios la posibilidad de subir y compartir en público o en privado documentos de Word, Open Office, PDF, presentaciones de diapositivas en PowerPoint, Portafolios.");
				 break;
				 case 'Myscrapbook ':
				secondP.html("Creador de libros abierto.");
				 break;
				  case 'Issuu':
				secondP.html("Es un repositorio de publicaciones digitales de libre creación y publicación. Cualquier persona puede realizar publicaciones para compartir e incluso lograr renombre.");
				 break;
				 case 'Scribd':
				secondP.html("Recomendado repositorio de publicaciones digitales. Permite al usuario crear su propia biblioteca a gusto y subir publicaciones propias con potenciales lectores.");
				 break;
				 case 'osalt':
				secondP.html("Podrá encontrar software libre para utilizar en reemplazo de software comercial.");
				 break;
				 case 'ministerioEducacion':
				secondP.html("Banco de imágenes, sonidos, ilustraciones y animaciones.");
				 break;
				 case 'creativeCommons':
				secondP.html("Proyecto dedicado a la difusión de diverso tipo de creaciones (escritos, música, audiovisuales, imágenes, videos, recursos educativos, entre otros) a partir del establecimiento de una serie de licencias que permitan su uso, reproducción y transmisión garantizando el respeto por los derechos de los autores.  ");
				 break;
				 case 'googleAcademic':
				secondP.html("Permite localizar documentos académicos como artículos, tesis, libros y resúmenes de fuentes diversas como editoriales universitarias, asociaciones profesionales, repositorios de universidades y otras organizaciones académicas. ");
				 break;
				 case 'bielefeld':
				secondP.html("Megabuscador de recursos académicos alojados en diferentes sitios web.");
				 break;
				 case 'bibliotecaDigitalMundial':
				secondP.html("La  Biblioteca Digital Mundial pone a disposición en Internet, de manera gratuita y en formato multilingüe, materiales fundamentales de culturas de todo el mundo. Tesoros culturales, como manuscritos, mapas, libros poco comunes, partituras musicales, grabaciones, películas, grabados, fotografías y dibujos arquitectónicos.");
				 break;
				 case 'busquedaTotal':
				secondP.html("Espacio de búsqueda de material académico Institucional.  Búsqueda en las diferentes colecciones a las cuales está suscrita la Universidad. ");
				 break;
				  case 'glogster':
				secondP.html("Recurso para crear presentaciones y elementos multimedia didácticos de alta interactividad, ofreciendo una mejor experiencia para el aprendizaje. ");
				 break;
				 case 'authorStream':
				secondP.html("Permite subir y compartir presentaciones de PowerPoint en línea e insertar en blogs, convertir a vídeo y compartir en YouTube, iPods, iPads y redes sociales.");
				 break;
				 case 'slideBoom':
				secondP.html("Compartir presentaciones en la Web desde PowerPoint e insertarlas en blogs y páginas web. Ver retroalimentación de sus lectores.");
				 break;
				 case 'narrable':
				secondP.html("Narrable es un sitio en línea que combina las fotografías más importantes con las voces que les dan vida.");
				 break;
				 case 'animoto':
				secondP.html("Aplicación que permite crear y compartir videos.");
				 break;
				 case 'prezi':
				secondP.html("Para crear, compartir y visualizar presentaciones animadas.");
				 break;

				 case 'padlet':
				secondP.html("Para crear, compartir y visualizar presentaciones en un muro.");
				 break;
				  case 'sharedTalk':
				secondP.html("Es una comunidad de internautas para el intercambio de idiomas y culturas, que garantiza una retroalimentación por parte de nativos de una lengua.");
				 break;
				  case 'webCEF':
				secondP.html("Permite el intercambio de idiomas con profesores expertos y estudiantes Europeos. La plataforma permite crear material propio para compartirlo con los demás.");
				 break;
				  case 'hola':
				secondP.html("Curso online y red social de aprendizaje activo con enfoque en la lengua española usando material especializado para cursos no presenciales.");
				 break;
				 case 'busuu':
				secondP.html("Comunidad para el aprendizaje de hasta 12 idiomas, que ofrece aplicaciones para dispositivos móviles, o el ingreso a partir de un pc estándar.");
				 break;
				 case 'livemocha':
				secondP.html("La famosa plataforma online contiene lecciones, cursos y otras actividades de aprendizaje de lenguas (35 idiomas disponibles).");
				 break;
				 case 'fedena':
				secondP.html("Es un software de gestión escolar multipropósito usado por millones de instituciones de educación para el manejo, administración y actividades de aprendizaje.");
				 break;
				 case 'courseSites':
				secondP.html("Plataforma LMS que permite crear 5 cursos virtuales gratis. Promueve el aprendizaje colaborativo entre estudiantes con clases y contenido multimedia. ");
				 break;
				  case 'wizIq':
				secondP.html("Ofrece aprendizaje en línea en tiempo real, guiado por un instructor profesional. Se pueden ofrecer y tomar clases de distintos saberes.");
				 break;
				 case 'chamilo':
				secondP.html("Es una plataforma e-learning de código abierto que ofrece Chamilo LMS(basado en Dokeos) y Chamilo 2 (plataforma más avanzada).");
				 break;
				 case 'moodle':
				secondP.html("Es el LMS más empleado en el mundo. Permite crear cursos virtuales para los estudiantes, que se benefician de herramientas como foros, chat, evaluaciones en línea, etc.");
				 break;
				  case 'eFront':
				secondP.html("Es una plataforma de aprendizaje moderna enfocada en el sector empresarial moderno.");
				 break;
				  case 'fedena':
				secondP.html("Es un software de gestión escolar multipropósito usado por millones de instituciones de educación para el manejo, administración y actividades de aprendizaje.");
				 break;
				 case 'voki':
				secondP.html("Herramienta que permite la creación de un personaje con voz para la lectura de material didáctico digital, disponible en aproximadamente 25 idiomas distintos.");
				 break;
				 case 'oddcast':
				secondP.html("Permite crear un personaje que dicte un texto dado, en más de 20 idiomas con efectos de sonido distintos.");
				 break;
				 case 'atenex':
				secondP.html("Desarrollado por la consejería de Educación de Extremadura, permite la creación de contenidos educativos digitales como ejercicios, talleres y demás que se pueden descargar o incrustar en otro website.");
				 break;
				 case 'courseLab':
				secondP.html("Herramienta e-learning que permite programar material educativo interactivo por medio de un código abierto amigable, con un previsualizador de resultado en tiempo real.");
				 break;
				  case 'exe':
				secondP.html("Es un proyecto de código abierto que permite a los docentes crear y publicar material  académico de manera amigable. Estas creaciones pueden ser exportadas en diferentes formatos.");
				 break;
				 case 'kubbu':
				secondP.html("Permite crear actividades lúdicas virtuales para la enseñanza y aplicarlas a grupos de estudiantes. Genera estadísticas de los resultados obtenidos.");
				 break;
				 case 'udutu':
				secondP.html("Ofrece programas de entenamiento para cursos orientados a la educación. Permite su administración, seguimiento y reportes del contenido de entrenamiento. Existe un módulo de éste para Moodle.");
				 break;
				 case 'gloMaker':
				secondP.html("Ofrece  recursos  interactivos de aprendizaje. Se centra en un buen diseño de aprendizaje. Provee poderosas características para una interfaz fácil de usar.");
				 break;
				 case 'quizFaber':
				secondP.html("Solo disponible para Windows permite crear quizzes  multimedia como un documento HTML. No es necesario ser un experto en HTML o java script.");
				 break;
				  case 'jclic':
				secondP.html("Es un conjunto de aplicaciones para realizar actividades educativas de manera lúdica. Se agrupan en proyectos para una mayor gestión.");
				 break;
				  case 'lim':
				secondP.html("Este website permite crear material educativo  con su propio editor de actividades y visualizador HTML. Además ofrece la creación de un XML (libro) bajo la herramienta EdiLim, que define las propiedades y las páginas de éste.");
				 break;
				 case 'teacherTube':
				secondP.html("Es un compendio de material digital inspirada en youtube, pero con material de aprendizaje. No sólo contiene videos, sino también documentos de formato office, audios, imágenes, grupos, foros y más servicios.");
				 break;
				 case 'Vimeo':
				 case 'youtube':
				 case 'dailyMotion':
				secondP.html("Sitio web donde pueden encontrase videos publicados por los usuarios. Permite comentar los vídeos, compartirlos, crear listas de reproducción, canales y clasificar los videos por categorías.");
				 break;
				 case 'downTube':
				 case 'youtubeCatcher':
				 case 'catchVideo':
				 case 'keepVid':
				secondP.html("Aplicaciones que permiten que el usuario pueda descargar y guardar en su equipo videos de YouTube.");
				 break;

				 case 'academicEarth':
				secondP.html("Página de educación donde se encuentran videos de profesores de universidades impartiendo clases. Los videos se organizan por materias, universidades o profesores.");
				 break;
				 case 'emprendedoresTV':
				 case 'rtve':
				secondP.html("Canales, sobre materias determinadas. Los videos están organizados por temáticas. ");
				 break;
				  case 'educaredTV':
				secondP.html("Se pueden encontrar talleres, videos de eventos, conferencias, tutoriales, etc.");
				 break;
				  case 'overStream':
				secondP.html("Aplicación que permite añadir subtítulos a un video que se encuentra en la red.");
				 break;
				  case 'goAnimate':
				  case 'pixton':
				secondP.html("Para la realización de videos animados. ");
				 break;
				 case 'webex':
				secondP.html("Para realizar videoconferencias.  Las conferencias web de WebEx combinan el uso compartido de presentaciones y archivos con voz, video en HD y espacios de reunión nuevos. ");
				 break;
				 case 'vyew':
				secondP.html("Permite la colaboración web en tiempo real entre docentes y estudiantes. Proporciona herramientas colaborativas además del envío de archivos, compartir y editar documentos. No se necesita de instalación solo de un registro en su plataforma web.");
				 break;
				 case 'camtasia':
				// case 'aviScreen':
				 case 'camStudio':
				 case 'krut':
				 case 'jing':
				 case 'screenCast':
				 case 'webinaria':
				 case 'screenr':
				secondP.html("Captura y edita cualquier tipo de video con facilidad. Útil para realizar tutoriales. Graba lo que se realiza en la pantalla de la computadora.  ");
				 break;
				  case 'flickr':
				secondP.html("Permite compartir todo tipo de fotos y videos de manera pública o privada.");
				 break;
				  case 'freeImageHosting':
				secondP.html("Provee alojamiento ilimitado para imágenes. Permite subir archivos de hasta 3MB y no hace falta registrarse.");
				 break;
				  case 'tinyPic':
				secondP.html("Es un servicio de uso compartido permite cargar, enlazar y compartir fácilmente imágenes y videos.");
				 break;
				 case 'photoBucket':
				secondP.html("Permite alojar y compartir todo tipo de imágenes, editarlas online, crear álbumes y presentaciones entre otras funciones.");
				 break;
				  case 'picasa':
				secondP.html("Sistema de almacenamiento de imágenes de Google.  Permite alojar imágenes, agregar comentarios, compartirlas y crear álbumes públicos o privados.");
				 break;
				  case 'instagram':
				secondP.html("Permite editar y compartir fotografías y videos desde un teléfono móvil.");
				 break;
				  case 'photoBucket':
				secondP.html("Permite alojar y compartir todo tipo de imágenes, editarlas online, crear álbumes y presentaciones entre otras funciones.");
				 break;
				  case 'photoBucket':
				secondP.html("Permite alojar y compartir todo tipo de imágenes, editarlas online, crear álbumes y presentaciones entre otras funciones.");
				 break;
				  case 'radionomy':
				secondP.html("Elige tus propios audios para crear una estación de radio que puedes escuchar online.");
				 break;
				  case 'voxopop':
				secondP.html("Participa en foros de conversación online en tiempo real. Usado para práctica de idiomas, prácticas de conversaciones, presentaciones orales y proyectos colaborativos.");
				 break;
				 case 'evoca':
				secondP.html("Permite grabar pistas de audio para realizar notas sonoras utilizando cualquier micrófono e incluso tu celular. Estos audios puede incrustarse y compartirse en otros sitios web.");
				 break;
				 case 'ivoox':
				secondP.html("Es una galería de audios (audiokiosco) que permite escoger el material a gusto e incluso incrustar dichos audios en otros websites. Incluye audiolibros, podcast, conferencias, etc. Es de servicio pago.");
				 break;
				 case 'audacity':
				 case 'powerSound':
				 case 'freeSoundRecorder':
				 case 'melodyne':
				 case 'audioRecorderPro':
				 case 'freeAudioEditor':
				 case 'vocaroo':
				 case 'audioBoo':
				 case 'fileLab':
				 case 'dspeech':
				secondP.html("Herramienta que permite grabación, edición y codificación de sonido en diferentes formatos, que puede ser compartido a través de la web. ");
				 break;
				 case 'dropBox':
				secondP.html("Permite almacenar, compartir y editar en línea documentos en diferentes formatos.");
				 break;
				 case 'weTransfer':
				secondP.html("Posibilita el envío a través de la web de documentos que exceden el límite de los datos que puede adjuntar a través de su correo electrónico.");
				 break;
				 case 'googleWebDesigner':
				 case 'jimdo':
				 case 'wix':
				 case 'webNode':
				secondP.html("Las páginas Web presentan la posibilidad de almacenar información organizada para la interacción de los usuarios, con la ventaja de acceso desde cualquier lugar y en cualquier momento si se cuenta con acceso a Internet. Se pueden construir enlaces a información en diferentes formatos y lenguajes (texto, audio, video, gráficos, imágenes, etc.).  Es importante atender a códigos éticos para el uso de la información.");
				 break;
				 case 'mid42':
				secondP.html("Herramienta que permite construir mapas mentales e historias visuales enriquecidas con imágenes, texto, videos.");
				 case 'mindomo':
				secondP.html("Herramienta para crear mapas mentales de carácter didáctico. Crea mapas de manera colaborativa, sincronizado con otros usuarios.");
				 break;
				 case 'gliffy':
				secondP.html("Es un servicio para realizar desde gráficas simples pasando por redes conectivas, organigramas, incluye algunas alternativas más específicas para áreas de tecnología, como gráficos de redes u otros para diseño de software.");
				 break;
				  case 'pickToChart':
				secondP.html("Aplicación que posibilita la creación de infografías, representaciones visuales de textos, expresadas a través de animaciones, gráficos, viñetas, mapas, imágenes, diagramas de relaciones, sonidos.");
				 break;
				  case 'cMaps':
				  case 'bubbl':
				  case 'visualUnderstand':
				  case 'inspiration':
				secondP.html("Creación de mapas conceptuales. Los Mapas Conceptuales son útiles en procesos educativos cuando se requiere que los estudiantes clarifiquen su pensamiento, refuercen la comprensión de temas fundamentales e integren de manera significativa nuevo conocimiento.");
				 break;
				  case 'mindMeister':
				  case 'popplet':

				secondP.html("Es un diagrama que permite representar las palabras, ideas, tareas y dibujos u otros conceptos relacionados y organizados alrededor de una o varias palabras claves.  Los mapas mentales ayudan a extraer y memorizar información.");
				 break;
				  case 'plagScan':
				  case 'viper':
				  case 'thePlagiarism':
				  case 'plagiarisma':

				secondP.html("Herramienta que se puede utilizar en la revisión de documentos para verificar la autenticidad de un trabajo.");
				 break;
				 case 'mailChimp':
				secondP.html("Herramienta que permite la creación de boletines electrónicos y posibilita su distribución vía web.");
				 break;
				 case 'socrative':
				 case 'quizlet':
				secondP.html("Actividades que se pueden realizar con dispositivos móviles en tiempo real con interacción entre estudiantes y docentes.");
				 break;
				 case 'edmodo':
				 case 'foroActivo':
				 case 'creaTuForos':
				secondP.html("Para creación de grupos de discusión en torno a una propuesta académica del curso.");
				 break;
				  case 'wordpress':
				  case 'blogger':
				  case 'webs':
				  case 'weebly':
				secondP.html("Herramienta que permite la creación de bitácoras web (que pueden ser actualizados periódicamente). Puede ser enriquecido con documentos en diferentes lenguajes (texto, audio, video) y formatos.  La página es creada en su dominio, se puede compartir y posibilita comentarios de los visitantes.");
				 break;
				 case 'pbWorks':
				  case 'wikispaces':
				  case 'wikia':
				  case 'twiki':
				  case 'googleSites':
				secondP.html("Es un sitio Web, cuyas páginas pueden ser editadas de manera colaborativa por personas con rapidez y agilidad, desde cualquier lugar con acceso a Internet.  Posibilita realizar desarrollos colectivos, sobre temáticas específicas, dado que los usuarios pueden adicionar, eliminar o editar contenidos.");
				 break;
				  case 'beeTag':
				  case 'upCode':
				  case 'quickMark':
				  case 'kaywa':
				secondP.html("Las aplicaciones permiten la lectura de códigos QR desde dispositivos diferentes (PC-usando Webcam-, Smartphone, Tablet) y acceder a la información que se vinculó al código desde su planteamiento.");
				 break;
				  case 'qrCode':
				  case 'qrCodeTag':
				secondP.html("Este código una vez leído desde un móvil, permitirá al usuario visitar la página Web introducida desde su teléfono móvil de forma automática.");
				 break;
				  case 'artProject':
				  case 'worldWonders':
				  case 'momentosHistoricos':
				  case 'museoEspana':
				  case 'argentinaVirtual':
				   case 'conaculta':
				    case 'patrimonioTelefonica':
				     case 'recorridos360':
				     case 'photoSynth':
				     case 'panoramas':
				     case 'capillaSixtina':
				     case 'basilica':
				     case 'panoramas':
				     case 'panoramas':
				  
				secondP.html("Son experiencias digitales en las cuales se puede representar un espacio físico  dependiendo la intencionalidad del recorrido virtual y la actividad de aprendizaje.");
				 break;
				 case 'secondLife':
				secondP.html("Second Life (sigla SL, en español Segunda vida), se lo conoce como un metaverso  (contracción de meta universo), al que se puede acceder gratuitamente desde Internet.");
				 break;
				  case 'surveyMonkey':
				  case 'eencuesta':
				  case 'rubistar':
				  case 'evalcomix':
				  case 'rubrix':
				  case 'eRubrica':
				  case 'iRubric':
				  secondP.html("Estos instrumentos posibilitan generar criterios específicos para la evaluación equitativa de los desempeños, haciendo la calificación más simple y transparente.");
				  break;
				  case 'blackBoard':
				secondP.html("La plataforma Blackboard posibilita al docente el envío de información importante a los participantes de su curso, para que la comunicación sea efectiva la plataforma debe reconocer un e-mail válido y actualizado de cada usuario.");
				 break;




				}
			}// chargeContent
       }); // ready ends


	