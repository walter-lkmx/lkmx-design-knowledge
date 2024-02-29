# Guía de Construcción de URLs

Existen dos categorías de rutas: las rutas estáticas y las rutas dinámicas. 

Las rutas estáticas son aquellas cuyas direcciones URL no varían y están predeterminadas para llevar al usuario siempre al mismo destino, como una página de contacto o la página principal. Estas rutas son fundamentales para la estructura de navegación y suelen ser las primeras con las que un usuario se familiariza. 

Las rutas dinámicas son flexibles, utilizan parámetros variables dentro de sus estructuras de URL para entregar contenido personalizado o específico según la interacción del usuario. Estos parámetros pueden representar identificadores únicos de productos en una tienda, artículos en un blog o usuarios dentro de una aplicación. 

La elección entre utilizar una ruta estática o dinámica depende de la naturaleza del contenido que se desea presentar y cómo se espera que el usuario interactúe con la aplicación.

## Rutas Estáticas

Las rutas estáticas son aquellas que no cambian y apuntan siempre al mismo recurso o página. Son predefinidas y no dependen de parámetros variables.

- **Primer nivel:** `/` o `/home`
    - Este nivel es el más básico y suele ser la página de inicio de un sitio web. Es el punto de entrada principal para los usuarios y proporciona acceso a las diferentes secciones del sitio.

- **Segundo nivel:** `/help/privacy-policy`
    - Este nivel profundiza en una sección específica del sitio. En este caso, `/help` actúa como una categoría que agrupa varios recursos de asistencia o documentación, y `privacy-policy` es una de esas secciones específicas. Esta ruta es estática porque conduce a un contenido específico que no cambia frecuentemente.
    
- **Tercer nivel:** `/help/documentation/user-guides`
    - Este nivel ofrece una especificación aún más detallada dentro de una sección. Aquí, dentro del segundo nivel `/help/documentation`, encontramos `user-guides`, que sería una subsección enfocada en guías para el usuario. Esta es una ruta estática que lleva directamente a los manuales o guías destinadas a ayudar al usuario en el uso del sitio o servicio.

## Rutas Dinámicas

Las rutas dinámicas incluyen identificadores únicos o parámetros variables que determinan el contenido de la página. Se utilizan corchetes `[]` para denotar variables dentro de la ruta.

- **Segundo nivel:** `/products/[productId]`.
	- Aquí, `[productId]` es un parámetro que identifica de manera única a un producto. Acceder a esta ruta muestra los detalles del producto especificado por el `productId`.
    
- **Tercer nivel:** `/products/[productId]/reviews` 
	- Muestra las reseñas de un producto específico, donde `[productId]` es el identificador del producto. Esta ruta demuestra cómo se pueden anidar parámetros dinámicos para acceder a información más detallada o específica dentro de la misma categoría.
- **Cuarto nivel:** `/products/[productId]/reviews/[reviewId]`.
	- Permite acceder a una reseña específica de un producto, donde `[productId]` es el identificador único del producto y `[reviewId]` es el identificador único de una reseña específica para ese producto. 

Las rutas dinámicas requieren un manejo adicional en el backend para resolver los parámetros y entregar el contenido correcto.

## Consejos Generales para la Estructuración de URLs para SEO

1. **Usa guiones para separar palabras**
   - **Ejemplo**: `http://www.sitio.com/productos/camara-digital` en lugar de `http://www.sitio.com/productos/camaraDigital`

2. **Evita el uso de CamelCase, guiones bajos y espacios**
   - **Ejemplo**: Prioriza `http://www.sitio.com/accesorios-bateria` sobre `http://www.sitio.com/accesorios_bateria` o `http://www.sitio.com/accesoriosBateria`

3. **Evita el uso de parámetros de consulta siempre que sea posible**
   - **Cuando sean necesarios, limítalos a dos o menos**
   - **Ejemplo Bueno**: `http://www.sitio.com/productos?categoria=camaras`
   - **Ejemplo a Evitar**: `http://www.sitio.com/productos?categoria=camaras&precio=100-500&color=rojo`

4. **Prioriza URLs legibles por humanos, incluyendo palabras clave**
   - **Ejemplo**: `http://www.sitio.com/productos/camara-digital-profesional` es mejor que `http://www.sitio.com/productos/1234`

5. **Evita subdominios siempre que sea posible**
   - **Utiliza subrutas de primer nivel**
   - **Ejemplo Mejor**: `http://www.sitio.com/es/inicio` en lugar de `http://es.tumarca.com/inicio`

6. **Planifica la jerarquía del contenido adecuadamente**
   - La efectividad de las palabras clave en URLs decrece con la longitud de la URL y la lejanía de la palabra clave.

7. **Utiliza técnicas de acortamiento de URL**
   - **Ejemplo Preferido**: `http://www.sitio.com/en/miPagina` sobre `http://www.sitio.com/content/mi-marca/en/miPagina`

8.  **Haz coincidir las URLs con los títulos de las páginas**
    - Anima a los autores de contenido a seguir esta práctica para coherencia y mejora del SEO.
