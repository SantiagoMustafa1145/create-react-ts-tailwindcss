<p align="center">
  <a href="http://reactnative.dev/" target="blank"><img src="https://reactnative.dev/img/header_logo.svg" alt="React Logo" width="180" /></a>
</p>

<h1 align="center">Base de desarrollo para React</h1>

<p align="center">
  Repositorio base con configuraciones necesarias para iniciar un nuevo proyecto basado en react, tailwindcss y configuración básica de prettier
</p>

<p align="center">
  <a href="https://vite.dev">
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="vite">
  </a>
  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/>
  </a>
   <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwindcss"/>
   </a>
</p>

## Contenido

- [Contenido](#contenido)
- [Uso](#uso)
- [Dependencias](#dependencias)
  - [Dependencies](#dependencies)
  - [Dev Dependencies](#dev-dependencies)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Comandos disponibles](#comandos-disponibles)
- [Configuración](#configuración)

Plantilla para proyectos React con TypeScript y TailwindCSS preconfigurado:

- ⚡️ Vite como bundler
- 🎨 TailwindCSS V4
- 🧩 Soporte para TypeScript
- 📏 Prettier preconfigurado
- 🔍 vite-tsconfig-paths para rutas absolutas

## Uso

Para crear un proyecto con ésta plantilla ejecuta lo siguiente:

```bash
npx create-react-ts-tailwind my-app
```

Luego ve al directorio

```bash copy
cd my-app
```

finalmente puedes iniciar el modo desarrollo

```bash
npm run dev
```

## Dependencias

### Dependencies

| **Paquete** | **Versión** |
| ----------- | ----------- |
| react       | 19.1.0      |
| react-dom   | 19.1.0      |

### Dev Dependencies

| **Paquete**                      | **Versión** |
| -------------------------------- | ----------- |
| @eslint/js                       | 9.25.0      |
| @tailwindcss/vite                | 4.1.8       |
| @types/react                     | 19.1.2      |
| @types/react-dom                 | 19.1.2      |
| @vitejs/plugin-react-swc         | 3.9.0       |
| vite-tsconfig-paths              | 5.1.4       |
| eslint                           | 9.25.0      |
| eslint-plugin-react-hooks        | 5.2.0       |
| eslint-plugin-react-refresh      | 0.4.19      |
| globals                          | 16.0.0      |
| prettier                         | 3.5.3       |
| prettier-plugin-organize-imports | 4.1.0       |
| prettier-plugin-tailwindcss      | 0.6.11      |
| tailwindcss                      | 4.1.8       |
| typescript                       | ~5.8.3      |
| typescript-eslint                | 8.30.1      |
| vite                             | 6.3.5       |

## Estructura del proyecto

```text
my-project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── libs/
│   ├── views/
│   ├── css/
│   │   └── global.css
│   ├── root.tsx
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── prettier.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Comandos disponibles

| Comando         | Descripción                             |
| --------------- | --------------------------------------- |
| npm run dev     | Inicia el servidor de desarrollo        |
| npm run build   | Prepara el proyecto para producción     |
| npm run lint    | Ejecuta ESLint                          |
| npm run preview | Levantar el proyecto en modo producción |

## Configuración

Prettier

- Reorganiza imports
- Reorganiza las clases de TailwindCSS además de eliminar las repetidas en un mismo elemento

Vite

- Configurado algunos paths absolutos comunes
- Configurado TailwindCSS/Vite

<h2 align="center" fontSize="42">En desarrollo...</h2>
