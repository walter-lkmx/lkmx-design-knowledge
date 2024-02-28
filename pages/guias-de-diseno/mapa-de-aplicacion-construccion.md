# Mapa de Aplicación - Construcción

## Layout
Conjunto de componentes colaterales que ayudan al usuario a interactuar con el sistema. Se implementa utilizando el patrón de diseño "decorator".
### Notación

La notación para nombrar un Layout es `PascalCase` seguido del sufijo `Layout`. Por ejemplo: `AuthenticationLayout`.
### Distribución

El borde de la caja del Layout enmarca las Pages, Scenes y Mockups a los que está decorando, utilizando un color distintivo que no podrá ser utilizado por otro Layout.

Algunos componentes comunes que se encuentran en un Layout son: Header, componentes de navegación, Footer, entre otros.

## Page

Es el componente principal del producto, con una URL que lo hace accesible a los usuarios. Las URL pueden ser estáticas o dinámicas.
### Notación

La notación para nombrar un Page es `PascalCase` seguido del sufijo `Page`, por ejemplo: `HomePage`.
### Distribución

El Page cubre horizontalmente y de extremo a extremo el área ocupada por los Scenes y los Mockups que le corresponden.

### URL

Ruta mediante la que un usuario navega dentro del producto. También sirven como medio para entregar contenido específico en función de la interacción del usuario.

### Notación

Existen dos tipos de direcciones URL: estáticas y dinámicas. 

Las rutas estáticas son aquellas que no cambian y apuntan siempre al mismo recurso o página. Son predefinidas y no dependen de parámetros variables. Por ejemplo, una URL estática podría ser: `/help/privacy-policy`

Las rutas dinámicas utilizan parámetros variables encerrados entre corchetes `[]` y con formato `camelCase` para entregar contenido específico basado en las interacciones del usuario. Por ejemplo, una URL dinámica podría ser: `/products/[productId]/reviews/[reviewId]`.

Las diagonales `/` delimitan los directorios o subdirectorios, organizando el contenido en una estructura jerárquica clara.

Para obtener más información, consulte la Guía de Construcción de URLs.
### Distribución:

Las URL se encuentran ubicadas arriba del Page. Solamente puede existir una URL por Page.

## Scene

Escenario o estado potencial del Page, donde el usuario interactúa.

### Notación

La notación para nombrar un Scene es `snake_case` con prefijo `#`, por ejemplo: `#initial_state`.

### Asociación:

Están directamente asociadas al Page, ya que representan los diferentes estados que el usuario puede experimentar en un Page. Estas escenas son representadas visualmente por medio de los Mockups. Más de una escena puede estar vinculada a una representación visual en un Mockup, pero todas las escenas están vinculadas al mismo Page.

### Distribución

Ubicado debajo del Page y encima del Mockup. Cubre horizontalmente y de extremo a extremo el área ocupada por el Mockup que le representa.

## Mockup

Artefacto final que representa el diseño de un escenario del Page, decorado por su Layout. 

Puede tener distintas representaciones, dependiendo de las pantallas en las que se requiera su visualización. 

Su distribución, no cubre a ningún objeto en sí mismo, sino que es determinada por la combinación y disposición de los elementos que lo componen, como el Layout, el Page y el Scene.
