// array de tres elmentos,2 ordenados y 1 no//


//'use strict'  solo utiliza variables declaradas
//b= al primer numero que va comparar
//while es un condicional de grupo ....como if en version pequeña
// r= nuestra tercera variable 
// los dos for estan haciendo que compruebe la lista 
// el sefundo for es el limite para que no siga haciendo pasadas comprobando


 'use strict'
 function burbuja(array){
     var b, j, r, aux;
     j = listNumber.length;
     var done = false;
     while (!done){
         done = true;
         for (r = 1; r < j; r++){   
             for ( b = 0; b < (j - r); b++){
                 if ( listNumber[b] > listNumber[b + 1]){
                     aux = listNumber[b]
                     listNumber[b] = listNumber[b + 1];
                     listNumber[b + 1] = aux;
                 }
             }
         }

       return(array)  
     }
 }

 let listNumber = [ -99, 100,0, 99, 1];
 burbuja(listNumber)
 console.log(listNumber)