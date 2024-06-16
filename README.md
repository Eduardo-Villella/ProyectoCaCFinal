# ProyectoCacFinal

## Descripción

ProyectoCacFinal es una aplicación de ventas de libros online accesible desde PC de escritorio y móvil. Los usuarios pueden ser clientes o administradores. Los clientes pueden registrarse para comprar libros, mientras que los administradores pueden agregar, modificar o quitar libros y designar otros administradores.

## Tecnologías Utilizadas

- **Frontend:** HTML, CSS, Bootstrap, JavaScript vainilla
- **Backend:** Node.js, Express, Sequelize
- **Base de Datos:** MySQL

## Configuración del Proyecto

### Antes de empezar

- Crear archivo para las variables de entorno ".env" : en la raiz del proyecto cree un nuevo archivo cuyo nombre solo .env cuyo contenido es:

"# Configuración de la base de datos    
        DB_USER=su_usuario      "su_usuario es el nombre que usa para entrar en su base de datos MySql"
        DB_PASSWORD=contraseña  "contraseña es la contraseña que usa en su base de datos MySql"
        DB_NAME=libros_ceij     "libros_ceij es el nombre de la base que usaremos en este proyecto, si usara otra base cambie el nombre"
        DB_HOST=localhost       "localhost es el host para su maquina local donde se aloja la base que creara, si usara otra ponga la dirección del servidor por ejemplo: base@53.226.82.148:3306"
"# Configuración del servidor
        PORT=puerto             "puerto es el número del puerto que usara para conectar con su aplicación backend, ejemplo: 8080 o 5001 o el puerto que tenga libre en su equipo"

(copie y pegue en su archivo y quite todas las comillas)

### Prerrequisitos

- Node.js (v14 o superior)
- MySQL

### Instalación

1. Clonar el repositorio:
    ```sh
    git clone https://github.com/usuario/ProyectoCacFinal.git
    cd ProyectoCacFinal
    ```

2. Instalar dependencias:
    ```sh
    npm install
    ```

3. Configurar el archivo `.env` en la raíz del proyecto con las variables de entorno necesarias:
    
    DB_USER=tusuario
    DB_PASSWORD=contraseña
    DB_NAME=nombre_de_la_base_de_datos
    DB_HOST=localhost
    PORT=3000
    

### Ejecutar el Proyecto

1. Preparcion previa

MIgrar y crear tablas con db-migrate:
npm run migrate-create create_nombreTabla_table



2. Iniciar el servidor de desarrollo:
    ```sh
    npm run dev
    ```

## Scripts Disponibles



## Estructura del Proyecto

Combinación MVC y API REST
