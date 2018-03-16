User Story: Primera iteracion (prototipo)

- Menú: el mismo se deberá dibujar, pero no tendrá funcionalidad alguna.
Solamente deberá mostrar el nombre de los ítems de menú, para que
el usuario sepa que hemos tenido en cuenta el requerimiento.

-Areas: las áreas deberán estar funcionales. Al presionar un botón de área, el
mismo deberá seleccionarse y mostrar los KPIs de la misma.

-KPI: stos tendrán datos dummy, pero deberán mostrar el rojo y verde en
función del valor del kpi y el límite. Es decir si el valor es mayor que el
límite deberá mostrarse el límite en rojo, caso contrario deberá
mostrarse el límite en verde.

-Botón +: si bien no deberá tener el asistente de indicador, al presionarlo se
deberá agregar un kpi con datos dummy a la sección seleccionada.

-Por último dado que los datos a mostrar son muy relevantes para el usuario, es que
decidimos configurar los mismos mediante json y luego construir la pantalla mediante
data binding.

Condiciones:

1) Menu al lado izquierdo (Scrolleable, no fixed)
2) Area de contenido central
3) Boton flotante zona inferior izquierda, para agregar nuevas tareas.
4) Titulo alineado a la izquierda en la zona superior
5) Barras de area bajo el titulo
6) Tarjetas con informacion KPI

Responsive:
1) Tarjetas KPI Reacomodarse
2) Barras de area achicarse, hasta un punto donde se oculte el contenido, pero permitiendo scrolling para ver el area oculta
3) Menu Ocultable a resolucion mobile