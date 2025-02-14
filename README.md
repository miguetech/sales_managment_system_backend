# Sistema de Gestión de Ventas - Backend

Bienvenido al repositorio del **Sistema de Gestión de Ventas - Backend**. Este proyecto implementa una API robusta y escalable para la gestión de usuarios, productos y ventas, construida con **Node.js**, **Express** y **MongoDB**. Está diseñado para ser fácil de usar, mantener y extender, siguiendo las mejores prácticas de desarrollo.

---

## � Características Principales

- **Gestión de Usuarios:** Registro, consulta, actualización y eliminación de usuarios.
- **Gestión de Productos:** Registro, consulta, actualización y eliminación de productos.
- **Gestión de Ventas:** Registro, consulta, actualización y eliminación de ventas.
- **Validación y Seguridad:** Validación de entradas y manejo de errores robusto.
- **Integración con MongoDB:** Persistencia de datos utilizando Mongoose.
- **Desarrollo Ágil:** Configuración con nodemon para desarrollo y Biome para linting/formateo.

---

## � Estructura del Proyecto

```plaintext
sales_management_system_backend/
├── .biome.json
├── .env
├── .gitignore
├── eslint.config.mjs
├── package.json
├── README.md
├── tsconfig.json
└── src/
    ├── controllers/
    │   ├── product.controllers.ts
    │   ├── sale.controllers.ts
    │   └── user.controllers.ts
    ├── models/
    │   ├── product.models.ts
    │   ├── sale.models.ts
    │   ┣── user.models.ts
    ├── routes/
    │   ├── product.routes.ts
    │   ├── sale.routes.ts
    │   └── user.routes.ts
    ├── services/
    │   ├── product.services.ts
    │   ├── sale.services.ts
    │   └── user.services.ts
    ├── types/
    │   ├── product.types.ts
    │   ├── sale.types.ts
    │   └── user.types.ts
    └── utils/
        └── validations.ts
```

### Explora el repositorio:

- **Controllers:** Lógica de manejo de solicitudes.
- **Models:** Definiciones de esquemas de MongoDB.
- **Routes:** Definiciones de rutas de la API.
- **Services:** Lógica de negocio.
- **Types:** Tipos de TypeScript para mejorar la seguridad del código.
- **Utils/Validations:** Funciones de validación reutilizables.

---

## 🚀 Instalación y Configuración

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/miguetech/sales_managment_system_backend.git
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Configuración de Variables de Entorno:**

   Crea un archivo `.env` en la raíz del proyecto y define las variables necesarias. Ejemplo:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/sales_management
   ```

---

## 🛠 Ejecución del Proyecto

Para ejecutar el servidor en modo desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

El servidor se iniciará en [http://localhost:3000](http://localhost:3000).

---

## 📚 Uso de la API

### Endpoints de Usuarios

- **Crear Usuario:** `POST /users/createUser`
- **Obtener Usuarios:** `GET /users/getUsers`
- **Obtener Usuario por ID:** `GET /users/getUserById`
- **Actualizar Usuario:** `PUT /users/updateUser`
- **Eliminar Usuario:** `DELETE /users/deleteUser`

### Endpoints de Productos

- **Crear Producto:** `POST /product/createProduct`
- **Obtener Productos:** `GET /product/getProducts`
- **Obtener Producto por ID:** `GET /product/getProductById`
- **Actualizar Producto:** `PUT /product/updateProduct`
- **Eliminar Producto:** `DELETE /product/deleteProduct`

### Endpoints de Ventas

- **Crear Venta:** `POST /sale/createSale`
- **Obtener Ventas:** `GET /sale/getSales`
- **Obtener Venta por ID:** `GET /sale/getSaleById`
- **Actualizar Venta:** `PUT /sale/updateSale`
- **Eliminar Venta:** `DELETE /sale/deleteSale`

Consulta los archivos de rutas para más detalles.

---

## 🧹 Linting y Formateo

El proyecto utiliza **Biome** para el linting y formateo del código. Para ejecutarlos, utiliza los siguientes comandos:

```bash
npm run lint
npm run format
```

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

1. Abre un **issue** para discutir los cambios que deseas implementar.
2. Envía un **pull request** con tus mejoras.

Asegúrate de seguir las buenas prácticas y mantener el código limpio y bien documentado.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Para más detalles, consulta el archivo [LICENSE](LICENSE).

---

¡Gracias por utilizar el **Sistema de Gestión de Ventas - Backend**! Si tienes alguna pregunta o sugerencia, no dudes en contactarnos. 🚀
