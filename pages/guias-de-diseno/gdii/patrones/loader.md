# Loader

Cuando una vista o una función están en proceso de carga, mostrar solo una pantalla en blanco o estática puede dar la impresión de que el sistema se encuentra “congelado“, esto provoca confusión en el usuario y puede causar el abandono de la aplicación .

## Haz que el estado de carga sea obvio

Cuando menos, muestra un indicador de actividad como un “spinner”, así comunicarás que algo está sucediendo. En algunos casos puede ser necesario mostrar de forma explícita el progreso de la función, así el usuario puede estimar cuánto más debe esperar.

## Muestra contenido tan pronto como sea posible

No hagas esperar al usuario hasta que el contenido termine de cargar para mostrar la vista que están solicitando ver. Muestra la vista inmediatamente, utiliza textos, imágenes o animaciones provisionales para mostrar los lugares en donde el contenido no está disponible aún. Reemplaza esos elementos provisionales a medida que el contenido es cargado.

## Educa o entretén al usuario para enmascarar los tiempos de carga

Siempre que sea oportuno, considera agregar tips sobre el uso del sistema, secuencias de video o ilustraciones relacionadas al sistema.

## Pantalla de carga

Por lo general los indicadores de progreso cumplen de forma eficiente comunicando que existe un proceso de carga en el trasfondo del sistema, pero pueden sentirse fuera de contexto. Cuando sea oportuno, considera diseñar una experiencia más inmersiva a través de animaciones y elementos que hagan juego con el estilo del sistema.