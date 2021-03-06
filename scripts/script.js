// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

console.log("___ Task 1 ___");

function calculate1(a, b, c) {
    return c == 0 ? "На ноль делить нельзя" : (a - b) / c
}

console.log(calculate1(4, 6, 2));
console.log(calculate1(15, 4, 2));

// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

console.log("___ Task 2 ___");

function calculate2(a) {
    return [a ** 3, a ** 2]
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
        var number = prompt(message)
    } while (number % 1 != 0 && number != "")
    return number
}
function makeArray(){
    let array = [],
        a = askNumber("Введите начальное значение диапазона чисел"),
        b = askNumber("Введите конечное число диапазона чисел"),
        min = min3(a, b),
        max = max3(a, b);
    for (let i = min; i <=max; i++)
        array.push(i)
    if (a == max)
        array.reverse()
    return array
}
function print(arr){
    console.log(arr)
}

print(makeArray());

// 5. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

console.log("___ Task 5 ___");

function isEven(a){
    if (a % 1 != 0 || (a == "" && a != 0)) return `${a} - не целое число`;
    return (a % 2 === 0);
}

console.log(isEven(prompt("Введите число для проверки на четность")));

// 6. Напишите ф-цию, в которую передается массив с целыми числами.
//     Верните новый массив, где останутся лежать только четные из этих чисел.
//     Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

console.log("___ Task 6 ___");

let array = [1, 2, 3, 6, 34, 56, 67, 107, 43, -34, 67, 0, -78, 34];

function onlyEven(array){
    let localArray = [];
     for (let i = 0; i < array.length; i++)
         if (isEven(array[i]))
             localArray.push(array[i]);
    return localArray;
 }

console.log(onlyEven(array));

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

console.log("___ Task 7 ___");

function pyramid(a){
    for (let i = 1; i <= a; i++){
        let symb = arguments[1] != undefined && arguments[1].length == 1 && arguments[1] != " " ? arguments[1] : i,
            text = new Array(i + 1).join(symb);
        console.log(text);
    }
}
let $7a = askNumber("Задаем высоту пирамиды. Введите число."),
    $7b = prompt("Если хотите нарисовать пирамиду своим символом, введите один символ");
    pyramid($7a, $7b);

// 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:
//
//     *
//    ***
//   *****
//  *******
// *********
//
// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.
//

console.log("___ Task 8 ___");

function createTriangle(a){
    let array = new Array(a);
    for (let i = 0; i < a; i++){
        array[i] = new Array(a - i).join(" ") + new Array(i * 2 + 2).join("*");
    }
    return array;
}
function printArray(array){
    for (let string of array)
        console.log(string)
}
function printReverseArray (array){
    array.reverse();
    printArray(array);
}

printArray(createTriangle(askNumber("Введите высоту треугольника")));
printReverseArray(createTriangle(askNumber("Введите высоту перевернутого треугольника")));

// 9. Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

console.log("___ Task 9 ___");

function createArrFib(maxNumber){
    let array = [0, 1];
    for (let i = 1; array[i] < maxNumber; i++){
        array.push(array[i] + array[i - 1]);
    }
    array.pop();
    return array;
}

console.log(createArrFib(1000));

// 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
//     опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

console.log("___ Task 10 ___");

function sumDigits(a){
    let result = 0;
    if (a > 9) {
        a = String(a);
        for (let i = 0; i < a.length; i++)
            result += Number(a[i])
        a = sumDigits(result)
    }
    return a;
}

console.log(sumDigits(askNumber("Введите число для суммированя его цифр")));

// 11. Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

console.log("___ Task 11 ___");

function $10printArray(array){
    console.log(array.shift());
    if (array.length > 0)
        $10printArray(array)
}

$10printArray([1, 5, 7, 45, 75, 2, 478, 49 ,13, 41, 25, 36, 46])

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

console.log("___ Task 12 ___");

function makeLabel(){
    let arrText = [];
    arrText[0] = arrText[4] = "";
    arrText[1] = "* Домашняя работа: «Функции» ";
    arrText[2] = "* Выполнил: студент гр. ";
    arrText[3] = "* ";
    let surname = prompt("Введите вашу фамилию");
    let name = prompt("Введите ваше имя");
    let patronymic = prompt("Введите ваше отчество");
    let group = prompt("Введите номер вашей группы");

    arrText[2] += group;
    arrText[3] += (surname + " " + name + " " + patronymic);

    let maxLength = 0;
    for (let string of arrText)
        if (string.length && string.length > maxLength)
            maxLength = string.length
    maxLength += 2;

    arrText[0] = arrText[4] = new Array(maxLength + 1).join("*");
    for (let i = 1; i <=3; i++)
        arrText[i] += (new Array(maxLength - arrText[i].length - 2 + 1).join(" ") + " *")
    return arrText;
}

printArray(makeLabel());

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

console.log("___ Task 13 ___");

function validationEmail(email){
    let flag = true;

    //создание масстива с кодами разрешенных символов
    let arrValidCode = [64, 46, 45, 95];
    for (let i = 48; i <= 57; i++){
        arrValidCode.push(i)
    }
    for (let i = 65; i <= 90; i++){
        arrValidCode.push(i)
    }
    for (let i = 97; i <= 122; i++){
        arrValidCode.push(i)
    }
    //проверка на содержание недопустимых символов
    for (let char of email) {
        if (arrValidCode.indexOf(char.charCodeAt(0)) == -1)
            flag = false
    }
    if (!flag) return flag
    //проверка на количество собачек
    let countAt = 0;
    for (let char of email) {
        if (char.charCodeAt(0) == 64)
            countAt++;
    }
    if (countAt != 1)
        flag = false
    if (!flag) return flag
    //проверка на спецсимволы в начале, конце или нахождение их подряд
    let symbIndexes = [];
    for (let i = 0; i < 4; i++){
        let j = 0;
        while (j < email.length && j != -1){
            j = email.indexOf(String.fromCharCode(arrValidCode[i]), j);
            if (j > -1){
                symbIndexes.push(j);
                j++;
            }
        }
    }
    if (symbIndexes.indexOf(0) != -1 || symbIndexes.indexOf(email.length-1) != -1)
        flag = false
    symbIndexes.sort(function (a, b){return a - b});
    for (let i = 1; i < symbIndexes.length; i++){
        if(symbIndexes[i] - symbIndexes[i -1] == 1)
            flag = false
    }
    //проверка длины имени до собачки
    let emailNameLangth = email.indexOf("@");
    if (emailNameLangth < 2)
        flag = false
    //проверка на наличие цифр на позиции первого символа
    for (let i = 0; i <=9; i++)
        if (email[0] == i)
            flag = false

    //////////////////////////////////////////////////////////////////////////
    // //проверка на состав имени только из цифр
    // let arrCharsEmailName = [];
    // for (let i = 0; i < emailNameLangth; i++){
    //     for (let j = 0; j <= 9; j++)
    //         if (email[i] == j)
    //             arrCharsEmailName.push(email[i])
    // }
    // if (emailNameLangth == arrCharsEmailName.length)
    //     flag = false
    //////////////////////////////////////////////////////////////////////////

    //проверка на наличие дефиса и нижнего подчеркивания в имени
    if (email.lastIndexOf("-", emailNameLangth) != -1)
        flag = false
    if (email.lastIndexOf("_", emailNameLangth) != -1)
        flag = false

    //проверка наличия точки после @
    if (email.indexOf(".", email.indexOf("@")) == -1)
        flag = false
    //проаерка длинны домена верхнего уровня
    let domenLength = email.length - email.lastIndexOf(".") - 1;
    if (domenLength < 2 || domenLength > 11)
        flag = false


    return flag;
}

console.log(validationEmail("V_polonik@inbox.ru"));

//     Для ввода значений можете использовать ф-цию prompt(), либо задавать
// значения при инициализации переменных в коде.
//     Для вывода результатов скриптов вы можете использовать функции: alert()
// для вывода всплывающего окна; console.log() для вывода в консоль браузера;
// document.write() для вывода в «тело» HTML-документа.
