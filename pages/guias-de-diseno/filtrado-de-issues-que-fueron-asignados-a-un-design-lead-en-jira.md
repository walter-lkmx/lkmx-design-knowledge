# Filtrado de issues que fueron asignados a un Design Lead en Jira


## Propósito
Filtrar los issues asignados a un Design Lead durante un periodo de tiempo específico para identificar aquellos en los que trabajó para la definición de un sprint determinado.

Datos 

## Listado de Design Leads y id de usuario en Jira
- Isain Venegas: 5bbe3d2cee5d7e7580edbc80
- Juliana Garcia Hungar: 5bbe3d2c23099e22ab55604c
- Andrea Ramirez: 63498b1e62541f0d4c503136
- Cristina Valenzuela: 61dc8e857aa7ac00707f1051
- Walter Hurtado: 557058:1880063e-827a-4871-80f6-c88f7b518124

## Plantilla de búsqueda avanzada en Jira utilizando JQL

- Dirigirse a https://jr2vjr5z5dfsbuueh.atlassian.net/issues/?jql=created%20%3E%3D%20-30d%20order%20by%20created%20DESC.
- Utilizar la plantilla para filtrar los resultados deseados.

### Plantilla 
```
project = IdProyecto AND issuetype in ("Technical delta", "View delta") AND assignee was IdUsuario  DURING (“aaaa/mm/dd,”aaaa/mm/dd”) ORDER BY assignee DESC, created DESC
```

### Ejemplo

```
project = LEG AND issuetype in ("Technical delta", "View delta") AND assignee was 5bbe3d2c23099e22ab55604c  DURING ("2023/01/01","2023/02/01") ORDER BY assignee DESC, created DESC
```

