---
title: "Que nos trae de nuevo java"
date: 2018-10-5T19:45:29+02:00
draft: true
tags: ["java"]
categories: []
---

Buenos dias!!

Como ya sabréis, ya han salido las versiones de java 9 y 10 pero que nos trae de nuevo estas versiones? Deberíamos de actualizar nuestra versión de java? 


Vamos a tratar todas estas cuestiones una a una para poder dar todas las explicaciones necesarias. Así que empezamos por la primera.


Que nos trae de nuevo java
===
Bien java 9 nos trae bastante nuevas funcionalidades a parte del nuevo empaquetado modular *jigsaw* el cual trataremos más adelante.


Factorias para las colecciones
---
Por fin!! algo tan simple y tan cómodo como una factoría para inicializar una colección, *listas,mapas...*, Ahora sera tan simple como esto.
```
List list = List.of("a", "b", "c");
 
Set set = Set.of("a", "b", "c");
 
Map map = Map.of("a", 1);
```
Ahora si da gusto.


Mejoras en la interacción con Optional
---


Ahora podremos utilizar los métodos **or y ifPresentOrElse** los cuales nos darán más versatilidad a la hora de trabajar con esta clase ya que estos nuevos métodos estarán disponibles para Stream de Optional.


```
Optional.of("a").or(()->Optional.of("default"));
        Optional.of("a").ifPresentOrElse(x->System.out.println(x),()->System.out.println("null"));
```


Nuevos métodos en stream 
---


Esta clase creada a partir de java 8 cada vez cobra más importancia con los nuevos métodos **dropWhile y takeWhile**. Que nos permiten descartar y tomar elementos mientras realizamos una comprobación.


```
List integersUsingTakeWhile 
    = Stream.of(40, 31, 20, 3, 4, 5, 6, 7, 8, 9 ,10)
            .takeWhile(i -> (i % 2 == 0)).collect(Collectors.toList());
 
 output[40]
```
Como podemos ver **takeWhile** solo nos devuelve el 1 resultado que machea con el predicado introducido en su interior no como podríamos esperar del método **filter**.




```
List integersUsingDropWhile 
    = Stream.of(40, 31, 20, 3, 4, 5, 6, 7, 8, 9 ,10)
            .dropWhile(i -> (i % 2 == 0)).collect(Collectors.toList());
 
System.out.println(integersUsingDropWhile);


output[31, 20, 3, 4, 5, 6, 7, 8, 9, 10]
```
Y por ultimo el método **dropWhile** es exactamente lo contrario que **takeWhile** nos descartara el 1 elemento que cumpla el predicado.


REPL en jshell
---
Por fin podemos escribir código sin la necesidad de IDE! Gracias a esta herramienta podemos escribir y compilar código en consola sin volvernos locos. Utilidad muy esperada para el mundo de la docencia para poder mostrar ejemplos y conceptos de programación mucho más cómodo y rápido.


*aquí os dejo un link de oracle que explica todo lo que podéis hacer con esta nueva herramienta*


https://docs.oracle.com/javase/9/jshell/introduction-jshell.htm#JSHEL-GUID-630F27C8-1195-4989-9F6B-2C51D46F52C8


Nuevas classes para tratar la concurrencia
---
Por fin tenemos una programación reactiva de forma nativa!
Ahora con la nueva clase **Flow** tendremos el patrón publicacion-subscripcion al alcance de nuestra mano.


Os podría explicar esto pero el post se haría extremadamente largo así que aquí os dejo un link sobre como funciona el la clase **Flow**  y para que nos puede servir.


https://dzone.com/articles/reactive-streams-in-java-9


Métodos privados en las interfaces
---
Este punto tiene poco que explicar, con esto podremos modular mucho mejor los métodos **default** que se introdujeron en java8.


Nuevo recolector de basura
---
Como ya sabéis java utiliza un recolector de basura para liberar memoria y poder optimizar así su sistema.Pues con java 9 llega un nuevo recolector de basura llamado G1 que optimizara todo nuestro sistema.


Próximamente...
===
Eso es todo? ... No aun nos falta por ver ,para mi punto de vista, lo más importante de todo! el nuevo empaquetado modular que nos ofrece java 9. Con esta nueva herramienta podremos modulalizar nuestro software y conseguir bajar considerablemente el espacio que ocupa nuestro proyecto descartando todas esas partes que no utilizamos.Y así poder acercarnos un poquito más al mundo serverless. Pero esto lo veremos más al detalle en el próximo post con un pequeño POC.