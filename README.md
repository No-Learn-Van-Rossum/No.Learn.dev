# 📘 No.Learn

**No.Learn** es una plataforma de documentación abierta dedicada a proporcionar fundamentos teóricos y prácticos sobre lenguajes de programación y tecnología. Está pensada como un recurso gratuito y accesible para estudiantes, autodidactas y cualquier persona con deseo de aprender programación desde sus bases.

 **Deploy:** [https://nolearn-dev.web.app](https://nolearn-dev.web.app)  
 **Repositorio GitHub:** [Organización](https://github.com/No-Learn-Van-Rossum)

---

##  Misión

En **No.Learn** creemos que el aprendizaje no debe ser una barrera. Por eso, construimos una guía estructurada, motivacional y con contenido de calidad para que todos los estudiantes tengan igualdad de acceso a información técnica confiable, clara y bien organizada.


---

##  Contenido Principal

El sitio está dividido en secciones que cubren los lenguajes y tecnologías fundamentales:

-  **Python**  
  Fundamentos, estructuras de control, funciones, clases y más.

-  **HTML y CSS**  
  Maquetación web, diseño responsive, buenas prácticas.

-  **JavaScript**  
  Programación del lado del cliente, DOM, eventos, lógica y estructuras.

-  **Bases de Datos**  
  Conceptos relacionales, SQL, modelos de datos y más.

-  **Motivación & Consejos**  
  Historias de programadores influyentes, prácticas para el éxito y superación de obstáculos comunes en el aprendizaje.

---

##  Cómo comenzar

```bash
# Clona el repositorio
git clone https://github.com/No-Learn-Van-Rossum/No.Learn.dev.git
cd nolearn-docs

# Instala las dependencias
npm install

# Inicia el entorno de desarrollo
npm run start


```

#  Guía de Contribución – No.Learn

¡Gracias por tu interés en contribuir a **No.Learn**! Este proyecto busca crear una documentación abierta, clara y accesible sobre programación para todos. Para mantener una estructura organizada y coherente, sigue esta guía al momento de colaborar.

---

##  Estructura de nombres para ramas

Utiliza la siguiente convención para nombrar tus ramas según el tipo de cambio:

| Tipo de cambio              | Prefijo       | Ejemplo                             |
|----------------------------|---------------|-------------------------------------|
| Nueva sección o contenido  | `feat/`       | `feat/python-funciones`             |
| Corrección ortográfica     | `fix/`        | `fix/typos-html-introduccion`       |
| Reorganización de archivos | `refactor/`   | `refactor/estructura-db-section`    |
| Cambios de documentación   | `docs/`       | `docs/actualizar-readme`            |

---

##  Pasos para contribuir

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-organizacion/nolearn-docs.git
cd nolearn-docs

```
### 2. Actualiza la rama principal
Antes de empezar, asegúrate de estar al día:

``` bash
git checkout main
git pull origin main
```

### 3. Crea una nueva rama
``` bash
git checkout -b feat/nombre-descriptivo

Ejemplo
git checkout -b feat/database-funciones
```
Luego de tener los cambios realizados

### 4. Guarda y confirma tus cambios
```
bash 
git add .
git commit -m "feat: añadir sección sobre funciones en Python"
```

### 5. Abre el Pull Request en GitHub
1. Ve al repositorio en GitHub.

2. Verás un mensaje que dice:
  "Compare & pull request" – haz clic ahí.
   O, ve a la pestaña "Pull Requests" y haz clic en "New pull request".
