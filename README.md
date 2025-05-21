# Developer Portfolio

Portafolio personal construido con **Next.js**, **TypeScript** y **SCSS**, con animaciones basadas en GSAP.  
Muestra mis proyectos, habilidades y experiencia, y dispone de un formulario de contacto.

**Repositorio:**  
```bash
https://github.com/Xaviierkasvar/developer-portfolio.git
```

---

## Tecnologías

- Next.js  
- React  
- TypeScript  
- SCSS  
- GSAP  
- Vercel / cualquier VPS compatible con Node.js

---

## Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Xaviierkasvar/developer-portfolio.git
cd developer-portfolio
```

### 2. Instalar dependencias

```bash
npm install
# o con Yarn
# yarn install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000).

### 4. Generar versión de producción

```bash
npm run build
npm start
```

La aplicación quedará sirviéndose en `http://localhost:3000` en modo producción.

---

## Estructura de carpetas

```plaintext
developer-portfolio/
├── next.config.js
├── package.json
├── package-lock.json
├── tsconfig.json
├── next-env.d.ts
├── README.md

├── public/
│   ├── common/
│   │   └── cv/
│   │       └── Francisco_Javier_Castillo_Barrios_CV.pdf
│   ├── icons/
│   │   └── …SVGs de iconos…
│   └── img/
│       └── proyectos/

├── pages/
│   ├── blog/
│   │   ├── index.tsx
│   │   └── [PostName].tsx
│   ├── contact.tsx
│   ├── index.tsx
│   ├── _app.tsx
│   └── _document.tsx

├── src/
│   ├── components/
│   ├── data/
│   ├── gsap/
│   ├── Hooks/
│   └── Types/

├── styles/
│   ├── styles.scss
│   └── styles.css

└── Layout/
    └── Layout.tsx
```

*(Se han omitido carpetas de compilación, `.git`, cachés y archivos auxiliares para centrarte en lo esencial.)*

---

## Contacto

Si quieres consultarme cualquier duda, escríbeme a:  
✉️ **javier_castillo_15@hotmail.es**

---

## Licencia

Este proyecto está bajo la licencia **MIT**. Lee el archivo `LICENSE.md` para más detalles.
