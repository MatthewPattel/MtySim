/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const ciudades = require('./ciudad_inicial.js')

///DIALOGOS PREDEFINIDOS

const AYUDA = "Puedes decir algo como cual es la situacion de San Nicolás, "
+ "cuanto trafico hay en Monterrey, o preguntas mas especificas como: "
+ "cuantos accidentes de autos hay en Las Puentes, e incluso mandar servicios como: "
+"manda una grua al centro de monterrey o envia bomberos a Escobedo. Para una lista "
+"completa de comandos y servicios di: 'Ayuda'.";

const DEFAULT_REPROMPT = "¿Que te gustaria hacer ahora?";

const ADIOS = "Hasta pronto, Gobernador.";

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest'

        || (handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'ReturnHomeIntent');
    },
    handle(handlerInput) {
        //const speechText = "<audio src='https://ask-samples-resources.s3.amazonaws.com/workshop-starship-enterprise/sounds/launch.mp3'></audio>";

        return handlerInput.responseBuilder
        .speak(AYUDA)
        .reprompt(AYUDA)
        //.withSimpleCard('Ship Commander', speechText)
        .getResponse();
    },
};

const SituacionIntentHandler = {
    canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'SituacionIntent';
    },
    handle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    var userResponse = request.intent.slots.lugar.value;
    
    var munocol = "municipio";

    if (userResponse.toUpperCase() !== "MONTERREY") {
      if (userResponse.toUpperCase() !== "ESCOBEDO") {
        if (userResponse.toUpperCase() !== "SAN NICOLÁS") {
          munocol = "colonia"
        }
      }
    }

    let situacionResp = getSituacion(ciudades, userResponse, munocol, "situacion");
    const speechText = situacionResp;

    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(DEFAULT_REPROMPT)
        //.withSimpleCard('Ship Commander', speechText)
        .getResponse();
    },
};

const TraficoIntentHandler = {
    canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'TraficoIntent';
    },
    handle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    var userResponse = request.intent.slots.lugar.value;
    
    var munocol = "municipio";

    if (userResponse.toUpperCase() !== "MONTERREY") {
      if (userResponse.toUpperCase() !== "ESCOBEDO") {
        if (userResponse.toUpperCase() !== "SAN NICOLÁS") {
          munocol = "colonia"
        }
      }
    }

    let situacionResp = getSituacion(ciudades, userResponse, munocol, "trafico");
    const speechText = situacionResp;
    
    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(DEFAULT_REPROMPT)
        //.withSimpleCard('Ship Commander', speechText)
        .getResponse();
    },
};

const BasuraIntentHandler = {
    canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'BasuraIntent';
    },
    handle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    var userResponse = request.intent.slots.lugar.value;
    var munocol = "municipio";

    if (userResponse.toUpperCase() !== "MONTERREY") {
      if (userResponse.toUpperCase() !== "ESCOBEDO") {
        if (userResponse.toUpperCase() !== "SAN NICOLÁS") {
          munocol = "colonia"
        }
      }
    }

    let situacionResp = getSituacion(ciudades, userResponse, munocol, "basura");
    const speechText = situacionResp;

    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(DEFAULT_REPROMPT)
        //.withSimpleCard('Ship Commander', speechText)
        .getResponse();
    },
};

const InundacionIntentHandler = {
    canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'InudacionIntent';
    },
    handle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    var userResponse = request.intent.slots.lugar.value;
    
    var munocol = "municipio";

    if (userResponse.toUpperCase() !== "MONTERREY") {
      if (userResponse.toUpperCase() !== "ESCOBEDO") {
        if (userResponse.toUpperCase() !== "SAN NICOLÁS") {
          munocol = "colonia"
        }
      }
    }

    let speechText = getSituacion(ciudades, userResponse, munocol, "inundacion");

    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(DEFAULT_REPROMPT)
        //.withSimpleCard('Ship Commander', speechText)
        .getResponse();
    },
};

const AccidenteIntentHandler = {
    canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AccidenteIntent';
    },
    handle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    var userResponse = request.intent.slots.lugar.value;
    
    var munocol = "municipio";

    if (userResponse.toUpperCase() !== "MONTERREY") {
      if (userResponse.toUpperCase() !== "ESCOBEDO") {
        if (userResponse.toUpperCase() !== "SAN NICOLÁS") {
          munocol = "colonia"
        }
      }
    }

    let speechText = getSituacion(ciudades, userResponse, munocol, "accidente");

    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(DEFAULT_REPROMPT)
        //.withSimpleCard('Ship Commander', speechText)
        .getResponse();
    },
};

const IncendioIntentHandler = {
    canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'IncendioIntent';
    },
    handle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    var userResponse = request.intent.slots.lugar.value;
    
    var munocol = "municipio";

    if (userResponse.toUpperCase() !== "MONTERREY") {
      if (userResponse.toUpperCase() !== "ESCOBEDO") {
        if (userResponse.toUpperCase() !== "SAN NICOLÁS") {
          munocol = "colonia"
        }
      }
    }

    let speechText = getSituacion(ciudades, userResponse, munocol, "incendio");

    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(DEFAULT_REPROMPT)
        //.withSimpleCard('Ship Commander', speechText)
        .getResponse();
    },
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
      return handlerInput.responseBuilder
        .speak(AYUDA)
        .reprompt(AYUDA)
        //.withSimpleCard('Ship Commander', HELP)
        .getResponse();
    },
  };
  
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
          || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
      return handlerInput.responseBuilder
        .speak(ADIOS)
        //.withSimpleCard('Ship Commander', GOODBYE)
        .getResponse();
    },
};
  
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
      console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
  
      return handlerInput.responseBuilder.getResponse();
    },
};

const combatirBasura = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'combatirBasura';
    },
    handle(handlerInput) {
    let cuanto;
    const posibilidad = parseInt(Math.random() * 10);
    
    if (posibilidad === 10){
        ciudades.Monterrey[0].basura = ciudades.Monterrey[0].basura+27;
        ciudades.SanNicolas[0].basura = ciudades.SanNicolas[0].basura+27;
        ciudades.Escobedo[0].basura = ciudades.Escobedo[0].basura+27;
        cuanto = "ha aumentado un 9%."
    }
    if (posibilidad < 7){
        ciudades.Monterrey[0].basura = ciudades.Monterrey[0].basura-3;
        ciudades.SanNicolas[0].basura = ciudades.SanNicolas[0].basura-3;
        ciudades.Escobedo[0].basura = ciudades.Escobedo[0].basura-3;
        cuanto = "ha disminuido 1%."
    }
    if (posibilidad > 7 && posibilidad !== 10){
        cuanto = "no ha cambiado."
    }
    let respuesta = `El nivel de basura en el area ${cuanto} `;
      return handlerInput.responseBuilder
        .speak(respuesta)
        .reprompt(DEFAULT_REPROMPT)
        .getResponse();
    },
  };

const combatirIncendios = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'combatirIncendios';
    },
    handle(handlerInput) {
    let cuanto;
    const posibilidad = parseInt(Math.random() * 10);
    
    if (posibilidad === 10){
        ciudades.Monterrey[0].incendios = ciudades.Monterrey[0].incendios+9;
        ciudades.SanNicolas[0].incendios = ciudades.SanNicolas[0].incendios+9;
        ciudades.Escobedo[0].incendios = ciudades.Escobedo[0].incendios+9;
        cuanto = "Han aparecido 9"
    }
    if (posibilidad < 7){
        ciudades.Monterrey[0].incendios = ciudades.Monterrey[0].incendios-3;
        ciudades.SanNicolas[0].incendios = ciudades.SanNicolas[0].incendios-3;
        ciudades.Escobedo[0].incendios = ciudades.Escobedo[0].incendios-3;
        cuanto = "Se han apagado 3 de los"
    }
    if (posibilidad > 7 && posibilidad !== 10){
        cuanto = "No ha cambiado el numero de"
    }
    let respuesta = `${cuanto} incendios en el area`;
      return handlerInput.responseBuilder
        .speak(respuesta)
        .reprompt(DEFAULT_REPROMPT)
        .getResponse();
    },
  };

const combatirAccidentes = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'combatirAccidentes';
    },
    handle(handlerInput) {
    let cuanto;
    const posibilidad = parseInt(Math.random() * 10);
    
    if (posibilidad === 10){
        ciudades.Monterrey[0].accidentes = ciudades.Monterrey[0].accidentes+9;
        ciudades.SanNicolas[0].accidentes = ciudades.SanNicolas[0].accidentes+9;
        ciudades.Escobedo[0].accidentes = ciudades.Escobedo[0].accidentes+9;
        cuanto = "an aumnetado 9 en cada ciudad"
    }
    if (posibilidad < 7){
        ciudades.Monterrey[0].accidentes = ciudades.Monterrey[0].accidentes-3;
        ciudades.SanNicolas[0].accidentes = ciudades.SanNicolas[0].accidentes-3;
        ciudades.Escobedo[0].accidentes = ciudades.Escobedo[0].accidentes-3;
        cuanto = "an disminuido en 3 en cada ciudad"
    }
    if (posibilidad > 7 && posibilidad !== 10){
        cuanto = "no an cambiado"
    }
    let respuesta = `Los incendios  ${cuanto} `;
      return handlerInput.responseBuilder
        .speak(respuesta)
        .reprompt(DEFAULT_REPROMPT)
        .getResponse();
    },
  };
  
//ciudades.Monterrey[0].basura = ciudades.Monterrey[0].basura-1;

function getSituacion(array, uresp, muncol, filtro) {
  let resp;
  let selectMunicipio;
  let selectColonia;
  let selectBasura = 0;
  let selectTrafico = 0;
  let selectInundaciones = 0;
  let selectAccidentes = 0;
  let selectIncendios = 0;
  
  if (muncol === "municipio") {
    switch(uresp.toUpperCase()) {
      case "MONTERREY":
        selectMunicipio = "Monterrey";
        for(var i = 0 ; i < ciudades.Monterrey.length ; i++) {
          selectBasura += array.Monterrey[i].basura * .33;
          selectTrafico += array.Monterrey[i].trafico * .33;
          selectInundaciones += array.Monterrey[i].inundaciones;
          selectAccidentes += array.Monterrey[i].accidentes;
          selectIncendios += array.Monterrey[i].incendios;
        }
      break;
      case "SAN NICOLÁS":
          selectMunicipio = "San Nicolas";
        for(var j = 0 ; j < ciudades.SanNicolas.length ; j++) {
          selectBasura += array.SanNicolas[j].basura * .33;
          selectTrafico += array.SanNicolas[j].trafico * .33;
          selectInundaciones += array.SanNicolas[j].inundaciones;
          selectAccidentes += array.SanNicolas[j].accidentes;
          selectIncendios += array.SanNicolas[j].incendios;
        }
      break;
      case "ESCOBEDO":
          selectMunicipio = "Escobedo";
        for(var k = 0 ; k < ciudades.Escobedo.length ; k++) {
          selectBasura += array.Escobedo[k].basura * .33;
          selectTrafico += array.Escobedo[k].trafico * .33;
          selectInundaciones += array.Escobedo[k].inundaciones;
          selectAccidentes += array.Escobedo[k].accidentes;
          selectIncendios += array.Escobedo[k].incendios;
        }
      break;
    }
    
    selectBasura = parseInt(selectBasura);
    selectTrafico = parseInt(selectTrafico);
    
    selectInundaciones = selectInundaciones ? `Hay ${selectInundaciones} inundaciones en el area.`:selectInundaciones = `No hay ninguna inundacion en el area.`;
    selectAccidentes = selectAccidentes ? `Hay ${selectAccidentes} accidentes en el area.`:selectAccidentes = `No hay ninguna accidente en el area.`;
    selectIncendios = selectIncendios ? `Hay ${selectIncendios} incendios en el area.`:selectIncendios = `No hay ninguna incendios en el area.`;
    
    var contingencia = selectInundaciones + " " + selectAccidentes + " " + selectIncendios;
    
    if (selectInundaciones === 0) {
        if (selectAccidentes === 0) {
            if (selectIncendios === 0) {
                contingencia = "No hay ninguna contingencia en el area";
            }
        }
    }
    
    var situacionResponse;
    
    switch(filtro) {
        case "situacion":
            situacionResponse = `El municipio de ${selectMunicipio} cuenta con un `
            + `${selectBasura}% de basura. Hay un ${selectTrafico}% de trafico en las calles. `
            + contingencia;
        break;
        case "trafico":
            situacionResponse = `En el municipio de ${selectMunicipio} hay un ${selectTrafico}% de trafico en las calles. `;  
        break;
        case "inundacion":
            situacionResponse = contingencia.split('.')[0];  
        break;
        case "basura":
            situacionResponse = `El municipio de ${selectMunicipio} cuenta con un `
            + `${selectBasura}% de basura.`;  
        break;
        case "accidente":
            situacionResponse = contingencia.split('.')[1];  
        break;
        case "incendio":
            situacionResponse = contingencia.split('.')[2];  
        break;
    }
    
    return situacionResponse;

  } else {
    return "Puedes preguntarme por algun municipio como Monterrey, San Nicolás o Escobedo";
  }
}

const ErrorHandler = {
    canHandle() {
      return true;
    },
    handle(handlerInput, error) {
      console.log(`Error handled: ${error.message}`);
  
      return handlerInput.responseBuilder
        .speak('No puedo entenderte, repetitelo porfavor.')
        .reprompt('No puedo entenderte, repetitelo porfavor.')
        .getResponse();
    },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchRequestHandler,
        SituacionIntentHandler,
        TraficoIntentHandler,
        BasuraIntentHandler,
        InundacionIntentHandler,
        AccidenteIntentHandler,
        IncendioIntentHandler,
        combatirBasura,
        combatirIncendios,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
  


/*
const CaptainsLogIntentHandler = {
    canHandle(handlerInput) {
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'CaptainsLogIntent';
    },
    handle(handlerInput) {
      const speechText = "<speak>"
          + "<voice name='Amy'>Most recent entry of the Captains log</voice>"
          + "<break time='1s'/>"
          + "<audio src='soundbank://soundlibrary/scifi/amzn_sfx_scifi_alien_voice_07'/>"
          + "<voice name='Matthew'>Day <say-as interpret-as='digits'>537</say-as>"
          + "on the exploration mission. The crew is in good spirits and happy to be aboard the ship. "
          + "Today we are going to attempt entry into the Dominion, the gamma galactic quadrant. "
          + "<amazon:effect name='whispered'>I hope we will be safe.</amazon:effect>"
          + "Until next time.</voice>"
          + "<audio src='soundbank://soundlibrary/scifi/amzn_sfx_scifi_alien_voice_07'/>"
      +"</speak>";
  
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(DEFAULT_REPROMPT)
        .withSimpleCard('Ship Commander', speechText)
        .getResponse();
    },
  };
*/