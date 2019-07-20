const appRoot = document.getElementById('app');

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

renderVisibilityToggle();