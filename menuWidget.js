// конструктор виджета
function ContextMenu(switchButton) {
    this._$switchButton = switchButton;
    // находим меню внутри кнопки
    this._$menu = switchButton.find('div[data-role="menu"]');
}

// добавляем методы в прототип
ContextMenu.prototype = {
    // при нажатии на кнопку либо прячем, либо показываем меню
    _onSwitchButtonClick: function () {

        if (this._$menu.hasClass('hidden')) { // если она спрятана, то надо показать
            this._showMenu();
        } else {
            this.__hideMenu();
        }


    },

    _showMenu: function () {
        
        this._$menu.removeClass('hidden');
        // для проверки положения кнопки относительно верха окна создаем две переменные
        var buttonOffset = $('button[data-role="show-menu"]')[0].getBoundingClientRect().top;
        var menuHeight = this._$menu.height() + 30;

        // если кнопка слишком высоко, мы покажем меню снизу кнопки
        if (buttonOffset < menuHeight) {
            this._$menu.addClass('go-down');
            this._$menu.css('bottom', -menuHeight);
        }

    },

    _hideMenu: function () {
        this._$menu.addClass('hidden');
    },

    // инициализация, добавляем подписчика на щелчок по нашей кнопке
    init: function () {
        this._$switchButton.on('click', this._onSwitchButtonClick.bind(this));
    }
}


// хватаемся за кнопку
var switchBTN = $('button[data-role="show-menu"]');

// создаем инстанс виджета
var contextMenu = new ContextMenu(switchBTN);
// инициализируем виджет
contextMenu.init()







// [0].getBoundingClientRect().top
