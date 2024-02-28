# Mapa de Aplicación - Buenas Prácticas

El Mapa de Aplicación en Figma proporciona la visión general de un producto digital y sirve como punto de convergencia con distintos fines:

-   **Product Owne**r: Obtiene una simulación de "desarrollo" de los requerimientos del negocio y una herramienta de comunicación entre el equipo de Definición y el Stakeholder.
    
-   **Desarrollador**: Obtiene los requerimientos desde el punto de vista de interfaz de usuario, guías de estilo, así como flujos y escenarios.
    
-   **Calidad**: Obtiene un punto de referencia con especificaciones detalladas para evaluar el apego del Desarrollador a los requerimientos de negocio y de interfaz.
    

Si bien el Mapa de Aplicación es una herramienta valiosa, si no es construido con base en buenas prácticas, puede perjudicar el rendimiento de un equipo de cómputo y **en casos extremos el archivo del Mapa podría hacerse irrecuperable**. Esto deriva en problemas que impactan a las áreas operativas debido a la deficiente operabilidad del archivo.

El buen rendimiento de un archivo de Mapa de Aplicación en Figma depende de una diversidad motivos:

-   Cantidad de imágenes en alta resolución.
    
-   Complejidad de vectores.
    
-   Número total de capas del archivo.
    
-   Número total de capas ocultas.
    
-   Librerías de terceros.
    
-   Otros.
    

La siguiente es una guía de factores a considerar para prevenir que un Mapa de Aplicación construido en Figma tenga problemas de rendimiento y se vuelva inoperable. Esta lista se encuentra en progreso y es actualizada a medida que se descubren nuevos detalles

-   **Capas ocultas:** Evitar el uso de componentes con capas ocultas. Figma renderiza el canvas del archivo tomando en cuenta los nodos de las capas ocultas, por lo que el uso de componentes con capas ocultas multiplica exponencialmente la cantidad de nodos aunque estos estén ocultos. El rendimiento del archivo puede verse afectado en especial si el componente en cuestión se utiliza con frecuencia.
    
-   **Variantes:** Crear una variante por cada estado posible de un componente. Evitar crear componentes con capas ocultas para simular estados.
    
-   **Páginas:** La cantidad de páginas en el archivo repercute en el rendimiento. Es recomendable dividir en distintos archivos cuando un mismo proyecto involucre distintos productos (ej. App Móvil y Consola de Administración).
    
-   **Imágenes:** Optimizar imágenes usando las herramientas de optimización de Figma y solo en la medida y resolución en que vayan a ser utilizadas.
    
-   **SVG**: Evitar archivos SVG complejos o con una gran cantidad de nodos, su uso impacta el rendimiento del archivo.
    
-   **Frames/Grupos**: Cada Frame y Grupo debe ser planeado y tener una justificación. Anidar capas de forma excesiva afecta el rendimiento del archivo ya que cada capa anidada es un nodo en el canvas sobre el que el sistema de Figma debe iterar para identificar sus componentes.