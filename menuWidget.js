// конструктор виджета
function ContextMenu(switchButton) {
    this._$switchButton = switchButton;
    // find the menu inside the button
    this._$menu = switchButton.find('div[data-role="menu"]');
}

// add the methods to the prototype
ContextMenu.prototype = {
    // on click of the button we either hide or show the menu
    _onSwitchButtonClick: function () {

        if (this._$menu.hasClass('hidden')) { // if the menu is hidden, we show it
            this._showMenu();
        } else {
            this._hideMenu();
        }


    },

    _showMenu: function () {
        
        this._$menu.removeClass('hidden');
        // to check whether or not the button is too close to the top of the window we create 3 var's
        var menuButtonDistanceStr = this._$menu.css("bottom");
        var buttonOffset = this._$switchButton[0].getBoundingClientRect().top;
        var menuButtonDistance = parseInt(menuButtonDistanceStr, 10);
        var menuHeight = this._$menu.height() + menuButtonDistance;

        // if the button is too far up the window, we show the menu on its bottom side
        if (buttonOffset < menuHeight) {
            this._$menu.addClass('go-down');
            this._$menu.css('bottom', -menuHeight);
        }

    },

    // we hide the menu
    _hideMenu: function () {
        this._$menu.addClass('hidden');
    },

    // initialize, add a listener to the button
    init: function () {
        this._$switchButton.on('click', this._onSwitchButtonClick.bind(this));
    }
}


// grab the button
var switchBTN = $('button[data-role="show-menu"]');

// create a widget instance
var contextMenu = new ContextMenu(switchBTN);
// initialize the widget
contextMenu.init()




