# 🎬 Netflix Clone

Un clon de Netflix creado con tecnologías web modernas. Proyecto educativo que simula la interfaz y funcionalidad básica de la plataforma de streaming Netflix, incluyendo autenticación de usuarios y panel de películas.

## 📋 Descripción del Proyecto

Este proyecto es una réplica educativa de la interfaz de Netflix. Permite a los usuarios iniciar sesión, acceder a una página principal y explorar una interfaz similar a la de Netflix. Es ideal para aprender sobre desarrollo web frontend con HTML, CSS y JavaScript vanilla.

## ✨ Características Principales

- ✅ **Sistema de Login** - Validación de credenciales con formulario
- ✅ **Autenticación básica** - Verificación de usuario y contraseña
- ✅ **Interfaz Responsive** - Adaptable a diferentes dispositivos
- ✅ **Panel Principal** - Página de bienvenida post-login
- ✅ **Navegación fluida** - Transiciones entre páginas
- ✅ **Diseño moderno** - Estilos CSS profesionales
- ✅ **Gestión de sesiones** - Control de acceso a usuarios

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| HTML5 | - | Estructura y marcado |
| CSS3 | - | Estilos, diseño y responsividad |
| JavaScript (Vanilla) | ES6+ | Lógica de negocio y interactividad |

## 📁 Estructura del Proyecto

```
Netflix/
│
├── 📄 Login.html              # Página de inicio de sesión
├── 📄 Principal.html           # Página principal / Dashboard
│
├── 📄 script.js                # Lógica de autenticación y login
├── 📄 script2.js               # Scripts adicionales del proyecto
│
├── 🎨 styles.css               # Estilos principales de la aplicación
├── 🎨 styles1.css              # Estilos complementarios
│
├── 📁 images/                  # Carpeta con imágenes y assets
│   ├── logo.png
│   ├── portada1.jpg
│   └── ...
│
└── 📄 README.md                # Este archivo
```

## 🔐 Credenciales de Prueba

Para acceder a la aplicación, utiliza las siguientes credenciales:

| Campo | Valor |
|-------|-------|
| **Email** | `usuario@netflix.com` |
| **Contraseña** | `12345` |

> ⚠️ **Nota:** Estas credenciales están hardcodeadas solo con propósitos educativos.

## 🚀 Cómo Usar

### Opción 1: Clonación desde GitHub

```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/Netflix-Clone.git

# 2. Navega a la carpeta del proyecto
cd Netflix-Clone

# 3. Abre la página de login
# En Windows
start Login.html

# En Mac
open Login.html

# En Linux
xdg-open Login.html
```

### Opción 2: Uso Local

1. Descarga los archivos del repositorio
2. Abre `Login.html` directamente en tu navegador
3. Ingresa las credenciales de prueba
4. ¡Navega por la aplicación!

### Flujo de la Aplicación

```
Login.html 
    ↓ (Credenciales válidas)
Principal.html
```

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- No requiere instalación de dependencias
- No necesita servidor backend
- Compatible con cualquier sistema operativo

## 💻 Funcionalidades Detalladas

### 1. **Página de Login** (Login.html)
- Formulario con campos de email y contraseña
- Validación de campos vacíos
- Verificación de credenciales
- Mensajes de alerta para el usuario
- Redirección a Principal.html si el login es exitoso

### 2. **Página Principal** (Principal.html)
- Interfaz tipo Netflix
- Menú de navegación
- Galería de películas/series
- Diseño optimizado para diferentes pantallas

### 3. **Lógica JavaScript**
- `script.js`: Maneja la autenticación y validación
- `script2.js`: Funcionalidades adicionales de la aplicación

### 4. **Estilos CSS**
- Diseño responsive
- Paleta de colores Netflix
- Animaciones y transiciones
- Compatibilidad con dispositivos móviles

## 🔧 Instalación para Desarrollo

Si deseas modificar o contribuir al proyecto:

```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/Netflix-Clone.git

# 2. Abre el proyecto en tu editor preferido
code Netflix-Clone

# 3. Abre Live Server (si usas VS Code)
# Click derecho en Login.html → Open with Live Server

# 4. Comienza a editar y ver cambios en tiempo real
```

## 📝 Notas Importantes

- ⚠️ Este es un **proyecto educativo** no oficial de Netflix
- 🔒 Las credenciales están hardcodeadas (usar solo en desarrollo)
- 📱 Responsive design implementado
- 🚫 No incluye base de datos real ni backend
- 🔌 No se conecta a una API externa

## 🎯 Mejoras Futuras (Por Implementar)

- [ ] Conexión a base de datos real
- [ ] Sistema de registro de nuevos usuarios
- [ ] Recuperación de contraseña
- [ ] Carrusel de películas dinámico
- [ ] Búsqueda de contenido
- [ ] Favoritos y watchlist
- [ ] Reproducción de videos
- [ ] Sistema de comentarios y ratings
- [ ] Autenticación con redes sociales
- [ ] Tema oscuro/claro

## 🐛 Bugs Conocidos

Actualmente no hay bugs reportados. Si encuentras alguno, por favor abre un _issue_.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Puedes:

1. Hacer un **Fork** del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/mi-feature`)
3. Hacer commit de tus cambios (`git commit -m 'Agregar mi feature'`)
4. Hacer push a la rama (`git push origin feature/mi-feature`)
5. Abrir un **Pull Request**


## 👨‍💻 Autor

**[Josephover]**
- GitHub: [@Josephover](https://github.com/Josephover)
- Email: michelcruzati@gmail.com

## 📞 Contacto y Soporte

Si tienes preguntas o necesitas ayuda:
- Abre un **Issue** en el repositorio
- Envía un correo a: [michelcruzati@gmail.com]
- Visita la página del proyecto: []

## 🙏 Agradecimientos

- Inspiración en Netflix
- Comunidad de desarrollo web
- Recursos educativos de HTML, CSS y JavaScript

## 📚 Recursos Útiles

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [W3Schools - HTML & CSS](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [GitHub Guides](https://guides.github.com/)

---

**Última actualización:** 19 de marzo de 2026

**Estado del Proyecto:** ✅ En desarrollo

⭐ Si te gusta este proyecto, considera darle una estrella en GitHub
