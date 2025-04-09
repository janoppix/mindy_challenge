# 🧠 Mindy Challenge

Primero que nada, vi el ejemplo que estaba deployado (https://tdc-mindy-challenge.surge.sh/) y noté que usaba Tailwind, así que lo primero que pensé fue armar un bundle con Webpack + React + TypeScript + Tailwind, como suelo hacerlo a veces. Pero la verdad es que se me empezó a ir más tiempo del necesario. Armar un bundle desde cero siempre tiene detalles, uno cree que se acuerda de todo pero al final siempre se te escapa algo 😅.

Así que para no perder tiempo en lo que no era el foco, usé **Vite**, que es como un Rollup modernizado que ya viene con varias cosas listas. Le das enter un par de veces, eliges los lenguajes y ¡pum! ya tienes el proyecto corriendo.

---

## 🚧 Problema con la API

Al tratar de conectarme a la API real (`https://mindicador.cl`) tiraba puros *Internal Server Error*, y tampoco hay documentación oficial para ver cómo se usa. Lo que hice fue revisar la demo que dejaron (esa que mencioné arriba) y desde ahí, en la consola del navegador, caché que había una llamada que sí devolvía datos reales:  
📦 `https://mindicador.cl/api/uf/2025/`

Entonces ahí se me abrieron dos caminos:

1. **Hacer una llamada al seleccionar un indicador** para traer los años y meses válidos.
2. **Simular los datos en duro**, porque la demo no hacía llamadas nuevas cuando uno cambiaba el select. Eso quiere decir que los datos ya estaban precargados o venían de antes de otra parte.

Elegí la opción 2 por una razón bien simple: no tengo acceso al endpoint real, y si trataba de hacerlo "correctamente", iba a dejar la app más lenta y sin sentido si los datos no llegaban. Así que creé los datos estáticos a mano, en la carpeta `/constants`, para simular esos endpoints que faltaban.

---

## 📁 Organización del Proyecto

Dividí el proyecto en 4 carpetas principales:

- `/components`: contiene el `NavBar` y el `Chart` (ambos en React).
- `/constants`: acá dejé los datos que simulan los endpoints (años disponibles por indicador, meses, etc).
- `/hooks`: para las llamadas a la API real (en este caso, `useFetchData.ts`).
- `/utils`: funciones de ayuda, como filtrar los datos por año y mes (`filtrarSerie.ts`).

Toda la lógica del negocio principal quedó dentro de `<App />`.

---

## ⚙️ Cosas que aprendí o que usé por primera vez

Nunca había usado Vite hasta ahora, y fue una grata sorpresa. Lo mismo con `react-plotly.js`, que si bien ya lo había visto, no lo había usado directo. Tailwind ya lo había tocado antes, y me parece bien cómodo, muy parecido a usar Bootstrap o Material UI en cuanto a velocidad para maquetar.

---

## ✅ Cosas a destacar

- Dejé todo lo más ordenado posible, con comentarios donde creí necesario.
- No usé nada rebuscado, traté de mantenerlo simple, claro y funcional.
- El enfoque fue más práctico que técnico: la prioridad era resolver el problema, no hacer un super sistema sin datos reales.

---

## 🛠️ Cómo correr el proyecto

Si quieres probarlo localmente o revisar el código:

```bash
git clone https://github.com/janoppix/mindy_challenge
cd mindy_challenge
npm install
```

### Para desarrollo

```bash
npm run dev
```

Esto levanta el proyecto en: [http://localhost:5173/](http://localhost:5173/)

### Para build / producción

```bash
npm run build
```

Esto valida el código con TypeScript y genera el proyecto final dentro de la carpeta `/dist`, listo para producción.

---

## 🎯 Conclusión

No hay mucho más que decir. Traté de mantener todo lo más claro posible, pensando en que otra persona pueda leerlo y entender cómo está armado sin tener que preguntarse por qué funciona o por qué algo está así.

Gracias por el desafío 👋
