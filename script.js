    // Инициализация слайдера
    var slider = document.querySelector('#slider');
    var carousel = new bootstrap.Carousel(slider, {
    interval: 2000, // Интервал между переключением слайдов (в миллисекундах)
    pause: 'hover', // Приостанавливать переключение слайдов при наведении на слайдер
    wrap: true, // Зациклить переключение слайдов
    keyboard: false, // Отключить переключение слайдов клавиатурой
    slide: true // Автоматическое переключение слайдов
});
