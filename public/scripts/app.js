'use strict';

//At the end of lecture 22

console.log('App.js is running');

var app = {
    appTitle: 'Indecision App',
    appSubtitle: 'Put your life in the hands of a computer',
    options: []
};

function getOptionsLength(options) {
    return options.length;
}

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var onRemoveClick = function onRemoveClick() {
    app.options = [];
    renderOptions();
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
};
//JSX - Javascript XML

var appRoot = document.getElementById('app');

var renderOptions = function renderOptions() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.appTitle
        ),
        app.appSubtitle && React.createElement(
            'p',
            null,
            app.appSubtitle
        ),
        React.createElement(
            'p',
            null,
            getOptionsLength(app.options) > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveClick },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderOptions();
