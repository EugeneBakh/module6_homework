// module-8 exercise-5

// // // // const exercise = `Напишите функцию, которая принимает два натуральных числа
//                            x и n и возвращает x в степени n. Иначе говоря, умножает
//                            x на себя n раз и возвращает результат.

//                            Используйте Arrow Function синтаксис.
//                            Протестируйте функцию на любых значениях и выведите результат в консоль.`

const foo = (x,n) => {
    const exp = x ** n;
    return exp;
  }
  
  console.log(foo(25,2))

