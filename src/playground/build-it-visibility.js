//End of lecture 35

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visible: true
        };
    }
    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Show Detail' : 'Hide Detail'}</button>
                {
                    !this.state.visible && <p>Here is some detail</p>
                }
            </div>
        );
    }
}

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

const appRoot = document.getElementById('app');
ReactDOM.render(<Visibility />, appRoot);