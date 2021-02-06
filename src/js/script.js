"use strict";
import modal from './modules/modal';
import {openModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {
    const modalTimeoutId = setTimeout(() => openModal('.modal', 'modalTimeoutId'), 50000);
    modal('[data-modal]', '.modal', modalTimeoutId);
});