class RegisterUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;
    this.services.forEach((service, index) => {
      let multimediaContent = service.getMultimediaContent();

      if (typeof service == StreamingService) {
        total += multimediaContent.streamingService;
      } else if (typeof service == DownloadService) {
        total += multimediaContent.downloadService;
      }
      if (typeof multimediaContent == PremiumContent) {
        total += multimediaContent.additionalFee;
      }
    });

    return total;
  }
}

/*
Que problemas detectas en la operación y razona la respuesta
solución: 
1. Se necesitan dos métodos para obtener el total de los servicios
2. Se debería extraer cada tipo de servicio en su propio método
3. en este caso se deberia de usar instanceof en vez de typeof que solo te devuelve el nombre del tipo
*/

/* solución 2: */

class Service {
  getCost() {
    // return basic cost
  }
}

class StreamingService extends Service {
  constructor(baseCost) {
    super();
    this.baseCost = baseCost;
  }

  getCost() {
    return this.baseCost;
  }
}

class DownloadService extends Service {
  constructor(baseCost) {
    super();
    this.baseCost = baseCost;
  }

  getCost() {
    return this.baseCost;
  }
}

class PremiumContent {
  constructor(additionalFee) {
    this.additionalFee = additionalFee;
  }

  getAdditionalCost() {
    return this.additionalFee;
  }
}

class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;
    this.services.forEach((service) => {
      let cost = service.getCost();

      if (service instanceof PremiumContent) {
        cost += service.getAdditionalCost();
      }
      total += cost;
    });

    return total;
  }
}
