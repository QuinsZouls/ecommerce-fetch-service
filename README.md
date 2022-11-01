# ecommerce-fetch-service
Servicio API REST para obtener los productos de una página

# Herramientas y librerías utilizadas
- Node JS
- Chromium
- Chromium Webdriver
- ExpressJS
- Typescript
- puppeteer
- YARN

# Requerimientos
- Nodejs V18
- Navegador Chromium
- YARN
- Docker
- docker-compose

# Instalación de dependencias
```bash
yarn install
```
# Ejecución del servicio
Por defecto, el servicio utiliza el puerto 3000
## Ejecución del servicio con nodemon
```bash
yarn dev
```

## Ejecución en un entorno de producción
Primero generamos el bundle javascript:
```bash
yarn run build
```
Una vez compilado el servicio, ejecutamos el siguiente comando:
```bash
node dist/server.js
```
## Ejecución con Docker
Construcción de la imagen usando docker-compose:
```bash
docker-compose build
```
Levantamiento del servicio:
```bash
docker-compose up -d
```
# Uso
El servicio utiliza un método POST a la ruta /items con el siguiente payload:
```json
{
  "url": "la url de la página a consultar"
}
```
Ejemplo de respuesta:
```json
{
    "url": "https://www.tiendasjumbo.co/supermercado/frutas-y-verduras",
    "products": [
        {
            "name": "Tomate chonto x 500g ",
            "price": "COP 948",
            "brand": "A GRANEL"
        },
        {
            "name": "Banano Urabá x 500 g ",
            "price": "COP 1,000",
            "brand": "NO APLICA"
        },
        {
            "name": "Zanahoria x 500g ",
            "price": "COP 1,000",
            "brand": "A GRANEL"
        },
        {
            "name": "Cebolla cabezona a granel x 500g ",
            "price": "COP 2,360",
            "brand": "A GRANEL"
        },
        {
            "name": "Piña golden x und ",
            "price": "COP 4,784",
            "brand": "CENCOSUD"
        },
        {
            "name": "Manzana Máxima paquete x6 und ",
            "price": "COP 5,592",
            "brand": "MAXIMA MP"
        },
        {
            "name": "Aguacate Hass x 500g ",
            "price": "COP 3,192",
            "brand": "CENCOSUD"
        },
        {
            "name": "Pepino cohombro x 500 g ",
            "price": "COP 1,000",
            "brand": "A GRANEL"
        },
        {
            "name": "Plátano llanero x 500 g ",
            "price": "COP 2,040",
            "brand": "NO APLICA"
        },
        {
            "name": "Papa pastusa x 2500g ",
            "price": "COP 7,920",
            "brand": "MAXIMA MP"
        },
        {
            "name": "Cebolla Larga Malla x 500g ",
            "price": "COP 3,880",
            "brand": "CENCOSUD"
        },
        {
            "name": "Papa Criolla x500g ",
            "price": "COP 1,752",
            "brand": "A GRANEL"
        }
    ]
}
```
# Pruebas unitarias
Se realizan utilizando jest:
```bash
yarn test
```

# Incidencias
Inicialmente se tenía planeado usar jsdom para evitar el uso de chromium, sin embargo debido a la naturaleza del sitio (que es un sitio web dinámico hecho en react) fué necesario utilizar la librería puppeteer para obtener la información de los productos (ya que se creaban usando el virtual dom).