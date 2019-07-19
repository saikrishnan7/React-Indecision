//At the end of lecture 17

console.log('App.js is running');

const app = {
    appTitle : 'Indecision App',
    appSubtitle : 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

//JSX - Javascript XML
const template = (
    <div>
        <h1>{app.appTitle}</h1> 
        {app.appSubtitle && <p>{app.appSubtitle}</p>}
        <p>{getOptionsLength(app.options) > 0 ? 'Here are your options' : 'No Options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

function getLocation(location) {
    if(location) {
        return <p>location: {location}</p>;
    }
}

const user = {
    age : 2,
    profession : 'Child'
};

let count = 0;

const addOne = () => {
    count++; 
    renderCounterApp(); 
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();