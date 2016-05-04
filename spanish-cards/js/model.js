define([], function() {

var model = {
	activeCard:{},
	win: 0,
	total: 0,
	attempts:0,
	phraseList:[
		{spanish:'¿a què hora el restaurante abre?',english:'what time does the restaurant open?'},
		{spanish:'¿conoces san francisco?',english:'do you know san francisco?'},
		{spanish:'¿fuiste a la fiesta?',english:'did you go to the party?'},
		{spanish:'yo no hice nada',english:'i didn\'t do anything'},
		{spanish:'nos vemos…',english:'see you…'},
		{spanish:'yo quise',english:'i wanted'},
		{spanish:'yo hice mi tarea',english:'i did my homework'},
		{spanish:'yo fuí a trabajar a los 8 am',english:'i went to work at 8am'},
		{spanish:'estoy trabajando',english:'i am working'},
		{spanish:'tú peides',english:'you ask for'},

		{spanish:'me gusta leer',english:'i like to read'},
		{spanish:'estas apprendiendo',english:'you are learning'},
		{spanish:'què estoy cocinando',english:'what are you cooking'},
		{spanish:'ella viaja',english:'she travels'},
		{spanish:'¿quien esta commiendo pasta?',english:'who is eating pasta?'},
		{spanish:'ellos quieren beber agua',english:'the want to drink water'},
		{spanish:'yo pienso',english:'i think'},
		{spanish:'no hay espacio aqui',english:'there is no space'},
		{spanish:'yo estoy emocionada!',english:'i\'m excited!'},
		{spanish:'como fue…',english:'how was…'},

		{spanish:'nosotros corremos',english:'we run'},
		{spanish:'voy a cocinar',english:'i am going to to cook'},
		{spanish:'la pelicula es interesante',english:'the movie is interesting'},
		{spanish:'ellos estan occupado',english:'they are busy'},
		{spanish:'yo regreso',english:'i return'},
		{spanish:'no hay restaurante en esta ciudad',english:'there aren\'t restaurants in this city'},
		{spanish:'ella es de mexico',english:'she is from mexico'},
		{spanish:'yo duermo',english:'i sleep'},
		{spanish:'yo estoy hablando',english:'i am talking'},
		{spanish:'yo encuentro',english:'i find'},

		{spanish:'yo no tiene un perro',english:'i don\'t have a dog'},
		{spanish:'no vamos a la fiesta',english:'we are not going to the party'},
		{spanish:'el esta apprendiendo español',english:'he is learning spanish'},
		{spanish:'tengo sueño',english:'i am sleepy'},
		{spanish:'tengo hambre',english:'i am hungary'},
		{spanish:'tengo miedo',english:'i am afraid'},
		{spanish:'tengo suerte',english:'i am lucky'},
		{spanish:'tengo sud',english:'i am thirsty'},
		{spanish:'tengo cuidado',english:'i am careful'},
		{spanish:'tengo frio',english:'i am cold'},

		{spanish:'tengo calor',english:'i am hot'},
		{spanish:'¿què estas haciendo?',english:'what are you doing?'},
		{spanish:'¿què hiciste?',english:'what did you do?'},
		{spanish:'¿què vas a hacer hoy?',english:'what are you going to do today?'},
		{spanish:'¿tienes planes?',english:'do you have plans?'},
		{spanish:'¿què hora es?',english:'what time is it?'},
		{spanish:'¿cuando vas a viajar?',english:'when are you going to travel?'},
		{spanish:'hubo una fiesta a mi casa',english:'there was a party at my house'},
		{spanish:'¿què quienes?',english:'what do you want?'},
		{spanish:'¿què vas a hacer esta noche',english:'what are you going to do tonight?'},

		{spanish:'yo leo',english:'i read'},
		{spanish:'nosotras vuelemos a la el sabado',english:'we fly to la on saturday'},
		{spanish:'yo alumuerzo con mi esposa',english:'i have lunch with my wife'},
		{spanish:'yo hice mi tarea',english:'i did my homework'},
		{spanish:'yo trabajo',english:'i worked'},
		{spanish:'yo fuí a la tienda',english:'i went to the store'},
		{spanish:'¿fuiste al bar?',english:'did you go to the bar?'},
		{spanish:'yo anduve aqui',english:'i walked here'},
		{spanish:'el viaje fue divertido',english:'the trip was fun'},
		
		{spanish:'yo commí',english:'i ate'},
		{spanish:'yo escuché',english:'i listened'},
		{spanish:'yo hice',english:'i did'},
		{spanish:'semana pasada',english:'last week'},
		{spanish:'ayer',english:'yesterday'},
		{spanish:'hace',english:'ago'},
		{spanish:'anoche',english:'last night'},
		{spanish:'cerrado',english:'closed'}
	],
	tables:[
		{
			type:'irregular-past',
			grouping:'ser',
			conjugation:[
				{pro:'yo',conj:'fuí'},
				{pro:'tu',conj:'fuiste'},
				{pro:'el/ella/usted',conj:'fue'},
				{pro:'nosotros',conj:'fuimos'},
				{pro:'ellos/ellas/ustedes',conj:'fueron'}
			]
		},
		{
			type:'irregular-past',
			grouping:'estar',
			conjugation:[
				{grouping:'estar',pro:'yo',conj:'estuve'},
				{grouping:'estar',pro:'tu',conj:'estuviste'},
				{grouping:'estar',pro:'el/ella/usted',conj:'estuvo'},
				{grouping:'estar',pro:'nosotros',conj:'estuvimos'},
				{grouping:'estar',pro:'ellos/ellas/ustedes',conj:'estuvieron'}
			]
		},
		{
			type:'irregular-past',
			grouping:'tener',
			conjugation:[
			{grouping:'tener',pro:'yo',conj:'tuve'},
			{grouping:'tener',pro:'tu',conj:'tuviste'},
			{grouping:'tener',pro:'el/ella/usted',conj:'tuvo'},
			{grouping:'tener',pro:'nosotros',conj:'tuvimos'},
			{grouping:'tener',pro:'ellos/ellas/ustedes',conj:'tuvieron'}
			]
		},
		{
			type:'irregular-past',
			grouping:'ir',
			conjugation:[
				{grouping:'ir',pro:'yo',conj:'fuí'},
				{grouping:'ir',pro:'tu',conj:'fuiste'},
				{grouping:'ir',pro:'el/ella/usted',conj:'fue'},
				{grouping:'ir',pro:'nosotros',conj:'fuimos'},
				{grouping:'ir',pro:'ellos/ellas/ustedes',conj:'fueron'}
			]
		},
		{
			type:'irregular-past',
			grouping:'Querer',
			conjugation:[
				{grouping:'Querer',pro:'yo',conj:'Quise'},
				{grouping:'Querer',pro:'tu',conj:'quisiste'},
				{grouping:'Querer',pro:'el/ella/usted',conj:'quiso'},
				{grouping:'Querer',pro:'nosotros',conj:'quisimos'},
				{grouping:'Querer',pro:'ellos/ellas/ustedes',conj:'quisieron'}
			]
		},
		{
			type:'irregular-past',
			grouping:'hacer',
			conjugation:[
				{grouping:'hacer',pro:'yo',conj:'hice'},
				{grouping:'hacer',pro:'tu',conj:'hiciste'},
				{grouping:'hacer',pro:'el/ella/usted',conj:'hizo'},
				{grouping:'hacer',pro:'nosotros',conj:'hicimos'},
				{grouping:'hacer',pro:'ellos/ellas/ustedes',conj:'hicieron'}
			]
		},
		{
			type:'regular-past',
			grouping:'ar',
			conjugation:[
				{grouping:'ar',pro:'yo',conj:'é'},
				{grouping:'ar',pro:'tu',conj:'aste'},
				{grouping:'ar',pro:'el/ella/usted',conj:'ó'},
				{grouping:'ar',pro:'nosotros',conj:'amos'},
				{grouping:'ar',pro:'ellos/ellas/ustedes',conj:'aron'}
			]
		},
		{
			type:'regular-past',
			grouping:'er/ir',
			conjugation:[
				{grouping:'er/ir',pro:'yo',conj:'í'},
				{grouping:'er/ir',pro:'tu',conj:'iste'},
				{grouping:'er/ir',pro:'el/ella/usd.',conj:'ió'},
				{grouping:'er/ir',pro:'nosotros',conj:'imos'},
				{grouping:'er/ir',pro:'ellos/ellas/ustedes',conj:'ieron'}
			]
		},
		{
			type:'regular-present',
			grouping:'ar',
			conjugation:[
				{grouping:'ar',pro:'yo',conj:'o'},
				{grouping:'ar',pro:'tu',conj:'as'},
				{grouping:'ar',pro:'el/ella/usted',conj:'a'},
				{grouping:'ar',pro:'nosotros',conj:'amos'},
				{grouping:'ar',pro:'ellos/ellas/ustedes',conj:'an'}
			]
		},
		{
			type:'regular-present',
			grouping:'er',
			conjugation:[
				{grouping:'er',pro:'yo',conj:'o'},
				{grouping:'er',pro:'tu',conj:'es'},
				{grouping:'er',pro:'el/ella/usd.',conj:'e'},
				{grouping:'er',pro:'nosotros',conj:'emos'},
				{grouping:'er',pro:'ellos/ellas/ustedes',conj:'em'}
			]
		},
		{
			type:'regular-present',
			grouping:'ir',
			conjugation:[
				{grouping:'ir',pro:'yo',conj:'o'},
				{grouping:'ir',pro:'tu',conj:'es'},
				{grouping:'ir',pro:'el/ella/usd.',conj:'e'},
				{grouping:'ir',pro:'nosotros',conj:'imos'},
				{grouping:'ir',pro:'ellos/ellas/ustedes',conj:'em'}
			]
		}
	]
};
return model;
});