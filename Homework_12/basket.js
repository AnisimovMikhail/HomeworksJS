const basket = {};

const products = getProductsObject();

// Главный элемент корзины.
const basketEl = document.querySelector(".basket");
// Обертка списка товаров.
const basketListEl = document.querySelector(".basketList");
// Количество товаров в корзине, в красном кружке, возле иконки корзины.
const basketCounterEl = document.querySelector(".cartIconWrap span");
// Общая сумма товаров в корзине.
const basketTotalValueEl = document.querySelector(".basketTotalValue");
// Кнопка "Очистить корзину".
const basketClear = document.querySelector('.delBtn');

basketClear.addEventListener("click", () => {
    while (basketListEl.firstChild) {
        basketListEl.removeChild(basketListEl.firstChild);
    }
    basketCounterEl.textContent = 0; // сброс счетчика товаров в корзине
    basketTotalValueEl.textContent = 0; // сброс общей стоимости товаров в корзине
});

//Обработчик открытия корзины при клике на ее значок.
document.querySelector(".cartIconWrap").addEventListener("click", () => {
    basketEl.classList.toggle("hidden");
});

/**
 * Обработчик клика на кнопку "Добавить в корзину" с деленированием события.
 * Событие вешается на ближайшего общего для всех кнопок предка.
 */
document.querySelector(".featuredItems").addEventListener("click", (event) => {
    // Получаем кнопку "Add to cart". Используем .closest метод, чтобы получить
    // ее, так как клик может быть на иконку тележки, а не на саму кнопку.
    const addToCartEl = event.target.closest(".addToCart");
    // Проверяем, если клик был не по кнопке с селектором ".addToCart", а также
    // такого селектора не существует среди родителей элемента, значит
    // пользователь кликнул куда-то в другое место, нас этот клик не интересует,
    // ничего не делаем, уходим из функции.
    if (!addToCartEl) {
        return;
    }
    addToBasket(addToCartEl.dataset.id);
    // Перерисовываем корзину.
    renderBasketContent();
});

/**
 * Обработчик кнопки удаления товара.
 */
basketEl.addEventListener("click", (event) => {
    if (!event.target.classList.contains("productRemove")) {
        return;
    }
    // Получаем id удаляемого товара и удаляем его.
    removeFromBasket(event.target.closest(".basketRow").dataset.id);
    renderBasketContent();
});


function addToBasket(id) {
    // Если такого продукта еще не было добавлено в наш объект, который хранит
    // все добавленные товары, то создаем новый объект.
    if (!(id in basket)) {
        // Необходимо скопировать данные из продукта, также добавить количество
        // в новый объект, который будет храниться в корзине.
        basket[id] = {
            id: id,
            name: products[id].name,
            price: products[id].price,
            count: 0,
        };
    }
    // Добавляем в количество +1 к продукту.
    basket[id].count++;
}

/**
 * Функция удаяет продукт из корзины.
 */
function removeFromBasket(id) {
    // Если товара с данным id меньше или равно 1, то убираем вовсе данный товар
    // из объекта, иначе вычитаем из count единицу товара.
    if (basket[id].count <= 1) {
        delete basket[id];
    } else {
        basket[id].count--;
    }
}

/**
 * Функция отрисовывает весь контент корзины.
 */
function renderBasketContent() {
    // Отрисовываем все товары в корзине.
    // Пробегаемся по всем товарам в корзине, для каждого товара создаем
    // разметку и соединяем все товары в одну длинну строку, в которой будут
    // содержаться разметки каждого товара и добавляем всю разметку в корзину.
    basketListEl.innerHTML = Object.values(basket).reduce(
        (acc, product) => acc + getBasketProductMarkup(product),
        ""
    );
    // Ставим новое количество добавленных товаров у значка корзины.
    basketCounterEl.textContent = getTotalBasketCount().toString();
    // Ставим новую общую стоимость товаров в корзине.
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
}

/**
 * Считает и возвращает количество продуктов в корзине.
 */
function getTotalBasketCount() {
    return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

// * Считает и возвращает итоговую цену по всем добавленным продуктам.
function getTotalBasketPrice() {
    return Object.values(basket).reduce(
        (acc, product) => acc + product.price * product.count,
        0
    );
}

//  * Функция возвращает разметку товара в корзине.
function getBasketProductMarkup(product) {
    return `
    <div class="basketRow" data-id="${product.id}">
      <div>${product.name}</div>
      <div>
        <span class="productCount">${product.count}</span> шт.
      </div>
      <div>${product.price} ₽</div>
      <div>
        <span class="productTotalRow">
          ${(product.price * product.count).toFixed(2)} ₽
        </span>
      </div>
      <div><button class="productRemove">-</button></div>
    </div>`;
}