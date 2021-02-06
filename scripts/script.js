// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

console.log("___ Task 1 ___");

function calculate1(a, b, c) {
    return (a - b) / c
}

console.log(calculate1(4, 6, 2));
console.log(calculate1(15, 4, 2));

// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

console.log("___ Task 2 ___");

function calculate2(a) {
    return [a ** 3, a ** 2];
}

console.log(calculate2(2));
console.log(calculate2(3));
console.log(calculate2(4));
console.log(calculate2(10));

// 3. Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

console.log("___ Task 3 ___");

function min3(a, b) {
    return a < b ? a : b
}
function max3(a, b) {
    return a > b ? a : b
}

console.log(min3(10, 99));
console.log(max3(10, 99));

// 4. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

console.log("___ Task 4 ___");
function askNumber(message){
    do{
        var number = prompt(message);
    } while (number % 1 != 0 && number != "");
    return number;
}
function makeArray(){
    let array = [],
        a = askNumber("Введите начальное значение диапазона чисел"),
        b = askNumber("Введите конечное число диапазона чисел");
    let min = min3(a, b),
        max = max3(a, b);
    for (let i = min; i <=max; i++)
        array.push(i)
    if (a == max)
        array.reverse();
    return array
}
function print(arr){
    console.log(arr)
}

print(makeArray());

// 5. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

console.log("___ Task 4 ___");

// 6. Напишите ф-цию, в которую передается массив с целыми числами.
//     Верните новый массив, где останутся лежать только четные из этих чисел.
//     Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
// циклы):
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//     параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//     кроме пробела, то пирамида должна быть нарисована этим символом,
//     например:
//
// Курс «JS».
//
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:
//
//     *
// ***
// *****
// *******
// *********
//
// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.
//
// 9. Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.
// 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
//     опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.
// 11. Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.
// 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:
//
//     *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************
//
// Размер рамки должен определятся автоматически по самой длинной строке.
//     Рамку вывести в консоль.
//
//     Курс «JS».
// 13. Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
//     a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
// «.@» или «@@», «_@», «@-», «--» и т.п.
//     b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и
// т.п.) не может быть длиной менее 2 и более 11 символов.
//
//     Для ввода значений можете использовать ф-цию prompt(), либо задавать
// значения при инициализации переменных в коде.
//     Для вывода результатов скриптов вы можете использовать функции: alert()
// для вывода всплывающего окна; console.log() для вывода в консоль браузера;
// document.write() для вывода в «тело» HTML-документа.
