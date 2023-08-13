// module-8 exercise-3

// // const exercise = `Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
//                      которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
//                      Выведите в консоль результат.`

let a = +prompt('Напишите 1-е значение');
let b = +prompt('Напишите 2-е значение');

function numX (x){
  function numY (y){
  return x + y
}
  return numY
}

const resultFunc = numX(a);
console.log(resultFunc(b))