# Guía de Construcción de URLs

Existen dos categorías de rutas: las rutas estáticas y las rutas dinámicas. 

Las rutas estáticas son aquellas cuyas direcciones URL no varían y están predeterminadas para llevar al usuario siempre al mismo destino, como una página de contacto o la página principal. Estas rutas son fundamentales para la estructura de navegación y suelen ser las primeras con las que un usuario se familiariza. 

Las rutas dinámicas son flexibles, utilizan parámetros variables dentro de sus estructuras de URL para entregar contenido personalizado o específico según la interacción del usuario. Estos parámetros pueden representar identificadores únicos de productos en una tienda, artículos en un blog o usuarios dentro de una aplicación. 

La elección entre utilizar una ruta estática o dinámica depende de la naturaleza del contenido que se desea presentar y cómo se espera que el usuario interactúe con la aplicación.

### Rutas Estáticas

Las rutas estáticas son aquellas que no cambian y apuntan siempre al mismo recurso o página. Son predefinidas y no dependen de parámetros variables.

- **Primer nivel:** `/` o `/home`
    - Este nivel es el más básico y suele ser la página de inicio de un sitio web. Es el punto de entrada principal para los usuarios y proporciona acceso a las diferentes secciones del sitio.

- **Segundo nivel:** `/help/privacy-policy`
    - Este nivel profundiza en una sección específica del sitio. En este caso, `/help` actúa como una categoría que agrupa varios recursos de asistencia o documentación, y `privacy-policy` es una de esas secciones específicas. Esta ruta es estática porque conduce a un contenido específico que no cambia frecuentemente.
    
- **Tercer nivel:** `/help/documentation/user-guides`
    - Este nivel ofrece una especificación aún más detallada dentro de una sección. Aquí, dentro del segundo nivel `/help/documentation`, encontramos `user-guides`, que sería una subsección enfocada en guías para el usuario. Esta es una ruta estática que lleva directamente a los manuales o guías destinadas a ayudar al usuario en el uso del sitio o servicio.

### Rutas Dinámicas

Las rutas dinámicas incluyen identificadores únicos o parámetros variables que determinan el contenido de la página. Se utilizan corchetes `[]` para denotar variables dentro de la ruta.

- **Segundo nivel:** `/products/[productId]`.
	- Aquí, `[productId]` es un parámetro que identifica de manera única a un producto. Acceder a esta ruta muestra los detalles del producto especificado por el `productId`.
    
- **Tercer nivel:** `/products/[productId]/reviews` 
	- Muestra las reseñas de un producto específico, donde `[productId]` es el identificador del producto. Esta ruta demuestra cómo se pueden anidar parámetros dinámicos para acceder a información más detallada o específica dentro de la misma categoría.
- **Cuarto nivel:** `/products/[productId]/reviews/[reviewId]`.
	- Permite acceder a una reseña específica de un producto, donde `[productId]` es el identificador único del producto y `[reviewId]` es el identificador único de una reseña específica para ese producto. 

Las rutas dinámicas requieren un manejo adicional en el backend para resolver los parámetros y entregar el contenido correcto.