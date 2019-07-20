'use strict';

var appRoot = document.getElementById('app');

var buttonValue = 'Show details';

var getDisplayValue = function getDisplayValue(text) {
    return text == 'Show details' ? null : 'Here are some details';
};
var toggle = function toggle() {
    buttonValue = buttonValue == 'Show details' ? 'Hide details' : 'Show details';
    renderVisibilityToggle();
};

var renderVisibilityToggle = function renderVisibilityToggle() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            buttonValue
        ),
        getDisplayValue(buttonValue) && React.createElement(
            'p',
            null,
            getDisplayValue(buttonValue)
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderVisibilityToggle();
