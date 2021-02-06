# module-modal-windows
Модуль содержит скрипт для создания модальных окон.


## Подключение модуля
В данном репозитории точкой входа ___Webpack___ является _./src/js/script.js_.
<br /> Импортируем в него модуль со скриптом слайдера:
```javascript
// Точка вхождения Webpack: "./src/js/script.js'
"use strict";
import modal from './modules/modal';
import {openModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {
    const modalTimeoutId = setTimeout(() => openModal('.modal', 'modalTimeoutId'), 50000);
    modal('[data-modal]', '.modal', modalTimeoutId);
});
```
