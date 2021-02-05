// 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

console.log("___ Task 1 ___");

let $1array = [1, 2, 3, 4, 5];
for (let i = 0; i < $1array.length; i++)
    console.log($1array[i]);

// 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

console.log("___ Task 2 ___");

let $2array = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < $2array.length; i++)
    if ($2array[i] > -10 && $2array[i] < -3)
        console.log($2array[i]);

// 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
//     while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

console.log("___ Task 3 ___");

let $3arrayFor = [],
    j = 23,
    $3arrayWhile = [],
    result = 0;

for (let i = 23; i <= 57; i++)
    $3arrayFor.push(i);

while (j <= 57)
    $3arrayWhile.push(j++);

console.log($3arrayFor);
console.log($3arrayWhile);

for (let i = 0; i < $3arrayFor.length; i++)
    result += $3arrayFor[i];

console.log(result);

// 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.

console.log("___ Task 4 ___");

let $4array = ["10", "20", "30", "50", "235", "3000"];

for (let i = 0; i < $4array.length; i++)
    if ($4array[i][0] == 1 || $4array[i][0] == 2 || $4array[i][0] == 5)
        console.log($4array[i]);

// 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

console.log("___ Task 5 ___");
let $5days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
for (let i = 0; i < $5days.length; i++) {
    if (i > 4) console.log("%c%s", "font-weight: bold; font-size: 1.5em", $5days[i]); //source http://css.yoksel.ru/funny-little-console/
    else console.log($5days[i]);
}

// 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
//     и получите последний элемент массива, используя свойство length.

console.log("___ Task 6 ___");
let $6array = [335, false, "Hello", [1, 2, 3, 4]];
$6array.push("Последний элемент массива");
console.log($6array[$6array.length - 1]);


// 7. Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

console.log("___ Task 7 ___ \nВыводится в alert");

let $7array = [],
    $7insetNumber;
do {
    $7insetNumber = prompt("Введите число\n\nчтобы закончить отправьте пустое значение");
    if (!isNaN($7insetNumber) && $7insetNumber != "") $7array.push($7insetNumber);
} while ($7insetNumber != "");

alert($7array);
$7array.sort(function (a, b) {
    return a - b;
});
alert($7array);

// 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

console.log("___ Task 8 ___");

let $8array = [12, false, 'Текст', 4, 2, -5, 0],
    i = 0;
$8array.reverse();
while (i < $8array.length)
    console.log($8array[i++]);

// 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

console.log("___ Task 9 ___");
let $9array = [5, 9, 21, , , 9, 78, , , , 6],
    $9count = 0;
console.log($9array.length);
for (let i = 0; i < $9array.length; i++)
    if ($9array[i] == null) $9count++;
console.log($9count);

// 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
//     [1,8,0,13,76,8,7,0,22,0,2,3,2].

console.log("___ Task 10 ___");

let $10array1 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
    $10array2 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2],
    $10startIndex,
    $10lastIndex,
    $10sum1,
    $10sum2;

$10startIndex = $10array1.indexOf(0);
$10lastIndex = $10array1.lastIndexOf(0);

if ($10startIndex == $10lastIndex)
    $10sum1 = 0;
else for (; ++$10startIndex < $10lastIndex;)
        $10sum1 += $10array1[$10startIndex];

console.log($10sum1);


// 11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5, на экране: