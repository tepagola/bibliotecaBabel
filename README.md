# bibliotecaBabel
Replica de la web libraryofbabel con modificaciones, nuevas funcionalidades y más
# bibliotecaBabel

Replica de la web libraryofbabel con modificaciones, nuevas funcionalidades y más.

## Descripción

Este proyecto es una réplica de la famosa Biblioteca de Babel, una biblioteca virtual que contiene todas las posibles combinaciones de letras, números y símbolos en libros de 410 páginas. La aplicación permite a los usuarios explorar esta vasta biblioteca generando páginas de texto basadas en ubicaciones específicas dentro de la biblioteca.

## Funcionalidades

- Generación de texto basado en ubicaciones específicas (hexágono, pared, estante, volumen, página).
- Validación de entradas para asegurar que las ubicaciones sean válidas.
- Navegación entre páginas generadas.
- Interfaz de usuario mejorada con Bootstrap 5.
- Personalización del alfabeto utilizado para generar el texto.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/bibliotecaBabel.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd bibliotecaBabel
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

Para iniciar el servidor en modo desarrollo, ejecuta:
```sh
npm run dev
```

## Estructura del Proyecto

- **src/**: Contiene el código fuente del proyecto.
  - **controllers/**: Controladores de la aplicación.
    - **LibraryController.ts**: Controlador principal para manejar las solicitudes de generación de páginas.
  - **models/**: Modelos de datos.
    - **Alphabet.ts**: Modelo para manejar el alfabeto utilizado en la generación de texto.
    - **Location.ts**: Modelo para manejar las ubicaciones dentro de la biblioteca.
  - **services/**: Servicios de la aplicación.
    - **TextGenerator.ts**: Servicio para generar el texto basado en la ubicación y el alfabeto.
  - **routes/**: Definición de rutas.
    - **index.ts**: Archivo principal de rutas.
  - **utils/**: Utilidades varias.
  - **views/**: Vistas de la aplicación.
- **public/**: Archivos estáticos.
  - **css/**: Archivos CSS.
    - **styles.css**: Estilos personalizados.
  - **js/**: Archivos JavaScript.
  - **index.html**: Página principal de la aplicación.
- **tests/**: Pruebas del proyecto.
- **package.json**: Archivo de configuración de npm.
- **tsconfig.json**: Archivo de configuración de TypeScript.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia ISC.