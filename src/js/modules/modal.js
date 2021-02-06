function openModal(modalSelector, modalTimeoutId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('hide');
    modal.classList.add('show');
    // Останавливаем прокрутку страницы под Модальным окном
    document.body.style.overflow = 'hidden';

    if (modalTimeoutId) {
        clearInterval(modalTimeoutId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    modal.classList.add('hide');
    // Снимаем СТОП и активируем прокрутку страницы под Модальным окном
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimeoutId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach((btn) => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimeoutId));
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.getAttribute('data-close') === '') {
            closeModal(modalSelector);
        }
    });

    // Отслеживаем кнопку ESC, событие keydown
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    // Автоматическая активация окна
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            clearInterval(modalTimeoutId);
            openModal(modalSelector, modalTimeoutId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal, closeModal};