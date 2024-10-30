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
4. Se deberían aplicar principios de diseño SOLID, cada clase debería tener una sola responsabilidad
5. Se debería usar una clase abstracta para cada tipo de servicio, de esta manera es mas legible, solo tendra una referencia
6. Se debería usar el Poliformismo en lugar de tantos if/else de esta manera podemos extraer métodos comunes donde se calculan los costos de los servicios
y así no dependan de una clase concreta
7. Utilzar POO que es un básico en éste ejemplo y una buena práctica ya que de esta manera al extraerlos tenemos una mejor manera de que el código sea mantenible,
se pueda reutilizar el codigo en otras partes por ejemplo en una escalabilidad del proyecto, no necesitariamos crear éstas mismas funciones ya que entrariamos en un
patrón DR.Y 
*/

/* solución alternativa: */

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
