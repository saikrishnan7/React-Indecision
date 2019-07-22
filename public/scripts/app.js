'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//End of lecture 35

var Visibility = function (_React$Component) {
    _inherits(Visibility, _React$Component);

    function Visibility(props) {
        _classCallCheck(this, Visibility);

        var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

        _this.toggleVisibility = _this.toggleVisibility.bind(_this);
        _this.state = {
            visible: true
        };
        return _this;
    }

    _createClass(Visibility, [{
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visible: !prevState.visible
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggleVisibility },
                    this.state.visible ? 'Show Detail' : 'Hide Detail'
                ),
                !this.state.visible && React.createElement(
                    'p',
                    null,
                    'Here is some detail'
                )
            );
        }
    }]);

    return Visibility;
}(React.Component);

/*const appRoot = document.getElementById('app');

let buttonValue = 'Show details';

const getDisplayValue = (text) => {
    return text == 'Show details' ? null : 'Here are some details';
}
const toggle = () => {
    buttonValue = buttonValue == 'Show details' ? 'Hide details' : 'Show details';
    renderVisibilityToggle();
}

const renderVisibilityToggle = () => {
    const templateTwo = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggle}>{buttonValue}</button>
            {
                getDisplayValue(buttonValue) && <p>{getDisplayValue(buttonValue)}</p>
            }
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderVisibilityToggle();*/

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(Visibility, null), appRoot);
