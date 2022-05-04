# Visual Thinking Server

Este proyecto fue hecho durante LaunchX en Mission Backend With Node JS en la semana 4.

# Instalación

```
npm install --save-exact
```

# Despliegue

Para levantar el servidor:

`
npm run serve
`

Para correr las pruebas de unidad:

`
npm test
`

Para ejecutar el linter:

`
npm run linter
`

# Aprendizaje

- Creación de clases
- Creación de servicios
- Creación de controller
- Programación orientada a objetos
- Separar responsabilidades

#  Dependencias

- Express | Para la creación del servidor. Es un framework que nos ayudará al desarrollo de los endpoints.
  Puedes revisar su información aquí: [ExpressJS](https://www.npmjs.com/package/express)
- ESLint | Para el estilo y estrutura del código. Homogeneiza la escritura y mejora la legibilidad.
  Puedes revisar su información aquí: [Eslint](https://www.npmjs.com/package/eslint)
- Jest | Para crear y ejecutar pruebas unitarias.
  Puedes revisar su información aquí: [Jest](https://www.npmjs.com/package/jest)

# Documentación del API

La documentación de cada endpoint la encuentras [aquí](https://app.swaggerhub.com/apis-docs/SaraiMontesV/Visual-Thinking/1.0.0). Encontrarás ejemplos de cómo usarla y la descripción de los datos del response.

El endpoint para consultar todos los estudiantes con todos sus campos es:

`/v1/students`

El endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification` es:

`/v1/students/emails`

El endpoint para consultar todos los estudiantes que tengan credits mayor a 500 es:

`/v1/students/credits`


# Demostración

https://user-images.githubusercontent.com/99107941/166612253-18ee4520-5c82-4dfb-b9ff-26aedcf7aeab.mp4

---

⭐️ Autor: [@SaraiMontesV](https://github.com/SaraiMontesV)







