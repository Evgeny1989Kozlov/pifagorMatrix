// const wrap = document.querySelector('.wrap');
// const text = document.querySelector('.wrap__text');
// console.log(text);
// console.log(wrap);

// if (text in wrap) {

// }



// let obj = {
//    name: "Evgenii",
//    surname: "Kozlov",
//    age: 30,
//    "50": 50,
//    r: function vasy() {
//       console.log(`${this.name}, приветствуем Вас, ваш возраст ${obj.age} - превосходен`);
//    }

// }
// for (const key in obj) {
//    // console.log(key);
//    console.log(obj[key]);
// }


// console.log(obj);
// obj.r();
// if ("age" in obj) {
//    console.log("dsfmlsdkfm");
// }
// console.log(obj.age);
// console.log(obj);

// function moremore(name, age) {
//    return {
//       first: name,
//       second: age
//    };
// };
// console.log(moremore("Semen", 33));
// moremore("Semen", 33);

// function aboutNames() {
//    if (obj.age < 33) {
//       console.log(`${obj.name}  You dont have age of christos`);
//    }
//    else {
//       console.log('Youre on right way');
//    }
// }


// aboutNames();

let removeCart = function removeCart() {
   console.log('imagine i removed cart');
   const emptyOrNot = document.querySelector('.wrap__empty-or-not');
   emptyOrNot.setAttribute("hidden", "true")
}

let addCart = function addCart() {
   console.log('imagine i add cart');
   const emptyOrNot = document.querySelector('.wrap__empty-or-not');
   emptyOrNot.removeAttribute("hidden");
}
// ищем кнопки
const btns = document.querySelector('[data-btn]');
//  ищем число товара
const quatity = document.querySelector('[data-quatity]');

const cartParent = document.querySelector('.wrap__carts');

// Добавляем количество товара
document.addEventListener('click', (e) => {
   //  таргет кнопки
   let eTbtns = e.target.closest(".manyhow__btn");
   // таргет количество
   let eTquantity;

   // ищем родителя корзины
   let parentCart;

   //  если таргет это кнопки то и щем родителя и количество товара
   if (eTbtns) {
      let eTbtnsParent = eTbtns.closest(".manyhow");
      parentCart = eTbtns.closest(".wrap__cart")
      eTquantity = eTbtnsParent.querySelector('[data-quatity]');
   }



   // если жмем по минус то убавляем количество
   if (eTbtns && eTbtns.dataset.btn === "minus") {

      if (+eTquantity.innerText >= 1) {
         eTquantity.innerText = +eTquantity.innerText - 1;
      }

      //  удаляем объкт из корзины, если количество меньше одного
      if (parentCart && +eTquantity.innerText < 1) {
         parentCart.remove();
         let cartChildren = cartParent.querySelectorAll(".wrap__cart");
         if (cartChildren.length < 1) {
            addCart();
         }

      }





   }
   // если жмем по плюс то прибавляем количество
   if (eTbtns && eTbtns.dataset.btn === "plus") {

      eTquantity.innerText = +eTquantity.innerText + 1;



   }



})


// ищем кнопку добавления товара в корзину
const addcardBtn = document.querySelector('[data-addBtn]');
//  ищем родителя корзины
// const cartAll = document.querySelector('.wrap__carts');
// //  ищем карточки товаров в корзине
// const cartIdd = cartAll.querySelectorAll('[data-di]');

// Добавление товара в корзину
document.addEventListener("click", (e) => {
   // таргет-кнопка
   let eTbtns = e.target.closest(".wrap__button");
   let eTbtnsParent;
   // если кнопка таргет, ищем карточку товара

   if (eTbtns) {
      //  карточка именно той кнопки по которой кликнули
      eTbtnsParent = eTbtns.closest("[data-di]");
      //  ищем родителя карточек для добавления товара
      const cartParent = document.querySelector('.wrap__carts');


      //  Создаем объект для сохранения данных добавляемого товара
      const objAdd = {
         data: eTbtnsParent.dataset.di,
         numb: eTbtnsParent.querySelector(".wrap__number").innerText,
         name: eTbtnsParent.querySelector(".wrap__title").innerText,
         quant: eTbtnsParent.querySelector("[data-quatity]").innerText,

      }
      console.log(objAdd.data);
      //  контент карточки корзины с добавлением данных из объекта
      const objCart = ` <div data-di=${objAdd.data} class="wrap__cart">
      <div  class="wrap__id">${objAdd.numb}</div>
   <div class="wrap__title">${objAdd.name}</div>
   <div class="wrap__howmany manyhow">
      <div data-btn="minus" class="manyhow__btn">-</div>
      <div data-quatity class="manyhow__quantity">${objAdd.quant}</div>
      <div data-btn="plus" class="manyhow__btn">+</div>


   </div> </div>`;

      // ищем в корзине карточки с id значение которого равно 
      // значению карточки добавляемого товара
      const cartId = cartParent.querySelector(`[data-di = '${objAdd.data}']`);


      if (cartId) {
         // ищем коичество в определенной карточки
         let cartQuant = cartId.querySelector('[data-quatity]');
         let cartIdd = parseInt(cartQuant.innerHTML);
         // суммируем количества товаров в карточке и добавяемого товара
         cartQuant.innerHTML = cartIdd + parseInt(objAdd.quant);
         console.log(cartIdd);

      }
      else {
         //  вставляем содержимое карточки в корзину
         cartParent.insertAdjacentHTML("beforeend", objCart);
         removeCart();

      }










      // if (cartAll) {
      //    let idData = cartAll.querySelectorAll(".wrap__id");
      //    idData.forEach((element) => {
      //       if (element && element.innerHTML === objAdd.numb) {
      //          element.innerHTML = element.innerHTML + objAdd.numb;

      //       }
      //    })


      // cartAll.forEach((element) => {
      //    let cartId = element.querySelector(".wrap__id");
      //    if (cartId.innerHTML === objAdd.numb) {
      //       let quat = element.querySelector("[data-quatity]");
      //       quat.innerHTML = parseInt(quat.innerHTML) + parseInt(objAdd.numb);


      //    };
      // });






   }










})



// конст кнопок и инпутов
const input1 = document.querySelector('[data-input1]');
const input2 = document.querySelector('[data-input2]');
const input3 = document.querySelector('[data-input3]');
const btnCalc = document.querySelector('[data-btnCalc]');
const delBtn = document.querySelector('.button-delete');

// Объявление  конст для каждой ячейки
const table1 = document.querySelector('[data-item1]');
const table2 = document.querySelector('[data-item2]');
const table3 = document.querySelector('[data-item3]');
const table4 = document.querySelector('[data-item4]');
const table5 = document.querySelector('[data-item5]');
const table6 = document.querySelector('[data-item6]');
const table7 = document.querySelector('[data-item7]');
const table8 = document.querySelector('[data-item8]');
const table9 = document.querySelector('[data-item9]');
const eachres1 = document.querySelector('[data-item-res1]');
const eachres2 = document.querySelector('[data-item-res2]');
const eachres3 = document.querySelector('[data-item-res3]');
const eachres4 = document.querySelector('[data-item-res4]');
const eachres5 = document.querySelector('[data-item-res5]');
const eachres6 = document.querySelector('[data-item-res6]');
const eachres7 = document.querySelector('[data-item-res7]');

// конст информ сообщений
const info = document.querySelector('.info');
const date = document.querySelector('.data');


const calcT = document.querySelector('.calc__table');
const items = document.querySelectorAll('.calc__item ');
const mess = document.querySelector('.calc-mess');

//  переменные массивы!
// Массив суммы всех чисел даты
let inpVal = [];
let allSum = [];
let pop = [];
// результрующие ячейки
let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];
let row6 = [];
let row7 = [];
let row8 = [];


//  перерменные внутри баттон-клик
let allNumSum;
let resultSecondSum;
let prodreadNum;
let resultfourthSum;
let popp;



//  функция суммы всех значений массива(каждая цифра)
let eachEl = (e, r, t) => {



   for (const i of e.value) {

      inpVal.push(parseInt(i));
      // console.log(e.value.length);
      // console.log(inpVal);
      // inpVal.push(i);



   }
   for (const i of r.value) {

      inpVal.push(parseInt(i));
      // console.log(e.value.length);
      // console.log(inpVal);
      // inpVal.push(i);



   }
   for (const i of t.value) {

      inpVal.push(parseInt(i));
      // console.log(e.value.length);
      // console.log(inpVal);
      // inpVal.push(i);



   }
   return inpVal;

};


// функция сложения всех цифр массива
let sumEachEl = (sumEl) => {
   let umEl = sumEl.reduce((prEl, i, t, u) => {
      return i + prEl;
   }, 0);
   sumEl = umEl;
   return sumEl;
   console.log(sumEl);




}

//  функция сложения после первого сложения
let sumAfterSum = (el) => {
   let ell = String(el);
   let result = [];
   for (const i of ell) {
      result.push(parseInt(i));

   }
   console.log(result);
   el = result;
   return el;

}


//  функция вычитания 

let profread = (x, y, z) => {
   y = y * 2;
   z = z * 2;
   let result;


   if (y != 0) {

      result = x - y;
      return result;
   }
   if (y === 0) {
      result = x - z;
      return result;

   }


}

// функция добавления цифр в каждую ячейку из полученного массива
// где item1 -это объект куда добавляем данные
// где item2 - это массив из коннкретного повторяемого числа
//  где item3 - это подпись ячкейки
let echCel = (item1, item2, item3) => {


   if (item1.innerText == '' && item2.length !== 0) {

      item1.insertAdjacentHTML("beforeend", ` ${item2}   ${item3}`);
      return item2;
   }
   // if (item1.innerText !== '') {
   //    console.log(item1.innerText);
   // }
   else {
      item1.insertAdjacentHTML("beforeend", ` ---   ${item3}`)
   }

}



let i = 0;
delBtn.addEventListener("click", () => window.location.reload());

let ooo = btnCalc.addEventListener("click", () => {

   i++;
   if (input1.value !== '' && input2.value !== '' && input3.value !== '' && input1.value <= 31 && input2.value <= 12 && input3.value <= 2023 && input3.value > 1900) {

      // доб/уд классов инф. сообщений
      info.classList.add("hid");
      date.classList.add("hid");
      calcT.classList.add("addEl");
      calcT.classList.remove("badcolor");
      input1.classList.remove("red1");
      input2.classList.remove("red2");
      input3.classList.remove("red3");


      // образуем единый массив данных из всех чисел даты рождения
      let allNumDate = eachEl(input1, input2, input3);
      console.log(allNumDate);

      //  сложение всех чисел даты рождение м/у собой
      allNumSum = sumEachEl(inpVal);
      console.log(allNumSum);


      // массив цифр получившегося первого числа
      let secondSum = sumAfterSum(allNumSum);


      //  сложение цифр secondSum  м/у собой
      resultSecondSum = sumEachEl(secondSum);

      // массив цифр получившегося второго числа
      let secMas = sumAfterSum(resultSecondSum);


      // получаем третье число
      prodreadNum = profread(allNumSum, allNumDate[0], allNumDate[1]);

      // массив цифр получившегося третьего числа
      let thSumMas = sumAfterSum(prodreadNum);


      //  сложение цифр secondSum  м/у собой
      let resultfourthSum = sumEachEl(thSumMas);

      // массив цифр получившегося четвертого числа
      let fourthsumMas = sumAfterSum(resultfourthSum);






      if (pop.length < 1) {

         popp = pop.concat(allNumDate, secondSum, secMas, thSumMas, fourthsumMas);
         pop = popp;
         console.log(pop);


         //  функции фильтр - получаем массив из одинаковых цифр
         let samme1 = popp.filter(function (i) {
            if (i == 1) {
               console.log(i);
               return i;
            };


         });

         let samme2 = popp.filter(function (i) {
            if (i == 2) {
               console.log(i);
               return i;
            };


         });

         let samme3 = popp.filter(function (i) {
            if (i == 3) {
               console.log(i);
               return i;
            };


         });

         let samme4 = popp.filter(function (i) {
            if (i == 4) {
               console.log(i.lenght);
               return i;
            };


         });

         let samme5 = popp.filter(function (i) {
            if (i == 5) {
               console.log(i);
               return i;
            };


         });

         let samme6 = popp.filter(function (i) {
            if (i == 6) {
               console.log(i);
               return i;
            };

         });

         let samme7 = popp.filter(function (i) {
            if (i == 7) {
               console.log(i);
               return i;
            };

         });
         let samme8 = popp.filter(function (i) {
            if (i == 8) {
               console.log(i);
               return i;
            };


         });

         let samme9 = popp.filter(function (i) {
            if (i == 9) {
               console.log(i);
               return i;
            };



         });



         //  Добавдение данных в ячейки
         let cell1 = echCel(table1, samme1, '<div style="color:#DFBFD7; ">Характер</div>');

         let cell2 = echCel(table2, samme2, '<div style="color:#DFBFD7; ">Энергия</div>');
         console.log(cell2);
         let cell3 = echCel(table3, samme3, '<div style="color:#DFBFD7; ">Интерес</div>');
         let row1Result = row1.concat(cell1, cell2, cell3);
         eachres1.insertAdjacentHTML("beforeend", ` ${row1Result.length}  <div style="color:#DFBFD7; ">Самооценка</div>`);


         let cell4 = echCel(table4, samme4, '<div style="color:#DFBFD7; ">Здоровье</div>');
         let cell5 = echCel(table5, samme5, '<div style="color:#DFBFD7; ">Логика</div>');
         let cell6 = echCel(table6, samme6, '<div style="color:#DFBFD7; ">Труд</div>');
         let row2Result = row1.concat(cell4, cell5, cell6);
         eachres2.insertAdjacentHTML("beforeend", ` ${row2Result.length} <div style="color:#DFBFD7; "> Работа/быт</div>`);


         let cell7 = echCel(table7, samme7, '<div style="color:#DFBFD7; ">Удача</div>');
         let cell8 = echCel(table8, samme8, '<div style="color:#DFBFD7; ">Долг</div>');
         let cell9 = echCel(table9, samme9, '<div style="color:#DFBFD7; ">Память</div>');
         let row3Result = row1.concat(cell7, cell8, cell9);
         eachres3.insertAdjacentHTML("beforeend", ` ${row3Result.length} <div style="color:#DFBFD7; "> талант</div>`);


         let row4Result = row4.concat(cell1, cell4, cell7);
         let row5Result = row5.concat(cell2, cell5, cell8);
         let row6Result = row6.concat(cell3, cell6, cell9);
         eachres4.insertAdjacentHTML("beforeend", ` ${row4Result.length} <div style="color:#DFBFD7; "> Целеустр-ть</div>`);
         eachres5.insertAdjacentHTML("beforeend", ` ${row5Result.length} <div style="color:#DFBFD7; "> Семья</div>`);
         eachres6.insertAdjacentHTML("beforeend", ` ${row6Result.length} <div style="color:#DFBFD7; "> Стабильнось</div>`);



         let row7Result = row7.concat(cell1, cell5, cell9);
         let row8Result = row8.concat(cell7, cell5, cell3);
         eachres7.insertAdjacentHTML("beforeend", ` ${row8Result.length} / ${row7Result.length} <span style="color:#DFBFD7; "> Темп/Дух</span>`);
      }

      if (pop.length > 1) {
         console.log('jhdfkjs');
      }

      if (i > 1 && table1.innerText && mess) {
         delBtn.classList.add("delred");

      }
      items.forEach(element => {
         console.log(element.innerHTML);
      });

      // items.forEach(element => {
      //    console.log(element.innerHTML);
      // });

   }
   if (input1.value == '') {
      info.classList.remove("hid");
      calcT.classList.add("badcolor");
      input1.classList.add("red1");

   };

   if (input2.value == '') {
      info.classList.remove("hid");
      calcT.classList.add("badcolor");
      input2.classList.add("red2");
   };
   if (input3.value == '') {
      info.classList.remove("hid");
      calcT.classList.add("badcolor");
      input3.classList.add("red3");
   };
   if (input1.value == '' && input2.value == '' && input3.value == '') {
      info.classList.remove("hid");
      calcT.classList.add("badcolor");
   };
   if (input1.value > 31 || input1.value <= 0) {
      date.classList.remove("hid");
      calcT.classList.add("badcolor");
      input1.classList.add("red1");
   };
   if (input2.value > 12 || input2.value <= 0) {
      date.classList.remove("hid");
      calcT.classList.add("badcolor");
      input2.classList.add("red2");
   };

   if (input3.value > 2023) {
      date.classList.remove("hid");
      calcT.classList.add("badcolor");
      input3.classList.add("red3");
   };
   if (input3.value < 1900) {
      date.classList.remove("hid");
      calcT.classList.add("badcolor");
      input3.classList.add("red3");
   };



});

let x = 5;


const line = document.querySelector('.line');
let styleEl = line.clientWidth;
let widthEl = line.style.width;

let res = 1;

let io = function sumOutLog() {
   styleEl = styleEl + 10;
   line.style.width = styleEl + 'px';

   return styleEl;


}

io();
let oiu = 200;


// sumOutLog();
// sumOutLog()

// sumOutLog();
// console.log(y);
line.addEventListener("click", io)
// line.style.width = io;

let mass1 = [1, 5, 7];
let mass2 = [3, 5, 10];
// const sumWithInitial = mass1.reduce(
//    (previousValue, currentValue) => previousValue * currentValue,

// );
const out1 = document.querySelector('.out1');
console.log(out1);


function outmas(masive, outEl) {


   for (let index = 0; index < masive.length; index++) {

      // console.log(mass1[index]);
      // res += mass1[index];

      res = `${outEl.innerHTML}   ${masive[index]} <br>`;

      outEl.innerHTML = res;

   }



}


outmas(mass2, out1);
function outmasBtn() {
   const btn1 = document.querySelector('.button-out1');
   btn1.onclick = "fsdfs"
}

// console.log(sumWithInitial);
// console.log(mass1);
// console.log(mass1[4]());
// function masSum(...arg) {
//    console.log(arguments);
// }

// masSum(3, true, 7)
let massa = [1, 5, 8, "yes"];
massaJ = massa.join(",,");
console.log(typeof (massaJ));
console.log();
if (massa.indexOf(8) == 3) {
   console.log(el);
}
if (massa.includes(8)) {
   console.log(true);
}
let bgNum = [1, 4, 7,
   4, 4, 7
];
let numEe = bgNum.includes((el) => {
   if (el === 4) {
      return el
   }
})
console.log(numEe);

let bgMasa = [
   { name: "borodn", day: "whatday" },
   { name: "den", day: "whday" },
   { name: "Evgen", day: "goodpal" },
]
let c = bgMasa.filter((element) => {
   return element.name.includes("den");

});
let masNames = "";
for (const i of bgMasa) {
   masNames = masNames + i.name + " ";
   console.log(i.name);
}
masNames = masNames.split(" ");
masNames.pop();
console.log(masNames);

console.log(c);

const body = document.getElementsByTagName('body');
console.log(body);

const imgGet = document.querySelector('.imgget');
const srcIm = imgGet.getAttribute('src');
console.log(srcIm);
let p = document.querySelectorAll('p');
console.log(p);
for (const iterator of p) {
   console.log(iterator);
}
p = [...p];

let pM = p.map((item) => {
   console.log(item.innerHTML += 1);
})
let yi = [0, 1, 2];
let xi = [...yi];
xi.push(33)
console.log(yi);
console.log(xi);
console.log(xi === yi);

let mas1 = [1, 19, 29, 09, 05];
let mas2 = [5, 26, 05, 19, 89];
let masres = [1980, 1989, ...mas1, ...mas2];
mas1 = [...mas2]
console.log(masres);
console.log(mas1);

let hi = "hello";
let w = "world";
let hiW = [...hi, ...w];
console.log(hiW);
let hiwRed = hiW.reduce((acc, item) => {
   return acc + item


});
console.log(hiwRed.slice(2));

let objj1 = {
   name1: "Fedor", surname1: "Afanasenko",
   name2: "Vasilii", surname2: "Gersogov",
   ttt: {
      hhh: "ddfss"
   }

};

console.log(objj1);

// objj1 = [...objj1];
// console.log(objj1);
// objj1.forEach(element => {
//    console.log(element);
// });
for (const key in objj1) {
   console.log(objj1[key]);
}
function hey(a, ...b) {

   let c = ""
   c += b.map((item) => {
      return item * 2;

   });

   return c;


}


let sf = hey(10, 30, 40, 50, 5, 6)
console.log(sf);

let [, s1, s2,] = [1, 100, 23, 234234, 324];
let [s3, , s4, s5] = "hell world".split(" ");
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);










