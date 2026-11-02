/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Удали меня';
  button.addEventListener('click', () => {
    button.remove();
  });
  document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
  if (!Array.isArray(arr)) return;
  const ul = document.createElement('ul');
  arr.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('mouseover', () => {
      li.setAttribute('title', li.textContent);
    });
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
  const link = document.createElement('a');
  link.href = 'https://tensor.ru/';
  link.textContent = 'tensor';
  let isFirstClick = true;
  link.addEventListener('click', event => {
    if (isFirstClick) {
      event.preventDefault();
      link.textContent = `${link.textContent} ${link.getAttribute('href')}`;
      isFirstClick = false;
    }
  });
  document.body.appendChild(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
  const ul = document.createElement('ul');
  const initialLi = document.createElement('li');
  initialLi.textContent = 'Пункт';
  ul.appendChild(initialLi);
  const button = document.createElement('button');
  button.textContent = 'Добавить пункт';
  function addExclamation() {
    this.textContent += '!';
  }
  initialLi.addEventListener('click', addExclamation);
  button.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.textContent = 'Пункт';
    newLi.addEventListener('click', addExclamation);
    ul.appendChild(newLi);
  });
  document.body.appendChild(ul);
  document.body.appendChild(button);
}
