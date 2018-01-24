function ContextMenu(switchButton) {
    this._$switchButton = switchButton;
    this._$menu = switchButton.find('div[data-role="menu"]');



    this._onSwitchButtonClick = function () {

        if (this._$menu.hasClass('hidden')) {

            this._$menu.removeClass('hidden');

            var buttonOffset = $('button[data-role="show-menu"]')[0].getBoundingClientRect().top;
            var menuHeight = this._$menu.height() + 30;

            if (buttonOffset < menuHeight) {
                this._$menu.addClass('go-down');
                this._$menu.css('bottom', -menuHeight);
            }

        } else {
            this._$menu.addClass('hidden');
        }


    };

    this.init = function () {
        this._$switchButton.on('click', this._onSwitchButtonClick.bind(this));
    }
}


var switchBTN = $('button[data-role="show-menu"]');
var contextMenu = new ContextMenu(switchBTN);
contextMenu.init()







// [0].getBoundingClientRect().top
