'use strict'
// Задача:

// Методы массивов.

// С помощью метода reduce необходимо перебрать массив и составить объект,
//  у которого ключ — уникальный элемент массива, значение — сколько раз он встречается в массиве. 
//  Например, перебирая массив ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'] мы получим {ololo: 3, anna: 2, red: 1, qwe: 1]

// Документ

// Создать список товаров (массив). У товара должно быть имя его цена и количество.

// Вывести этот список на страницу (имя, цена и количество должны быть выведены с новой строчки). 
// Для каждого второго товара сделать цвет фона серым.

//Task 1

let names = ['Anton', 'Sergey', 'Tanya', 'Sergey', 'Dima', 'Sergey', 'Anton', 'Sergey'];

const result = names.reduce((map, name) => {
  if (!(name in map)) {
    map[name] = 0;
  }
  map[name]++;
  return map;
}, {});

console.log(result);

//Task 2

let products = [
  { lable: 'Lays', name: 'With taste of garlic', price: 40 },
  { lable: 'Lux', name: 'With taste of paprica', price: 39 },
  { lable: 'Lays', name: 'With taste of onion', price: 40 },
  { lable: 'Pringles', name: 'With taste of sour cream', price: 88 },
  { lable: 'Lays', name: 'With taste of tomatoes', price: 35 },
  { lable: 'Svoya liniya', name: 'With smell of wasabi', price: 'pricelessly' }
];

var div = document.getElementById('list');

for (var i = 0; i < products.length; i++) {

  var ul = document.createElement('ul');
  if (i % 2 != 0) {
    ul.style.background = 'gray';
  }

  div.appendChild(ul);

  for (var key in products[i]) {
    var li = document.createElement('li');
    li.innerHTML = (products[i][key]);
    ul.appendChild(li);
  }
}
