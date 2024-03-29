//At the end of lecture 22

console.log('App.js is running');

const app = {
    appTitle : 'Indecision App',
    appSubtitle : 'Put your life in the hands of a computer',
    options: []
};

function getOptionsLength(options) {
    return options.length;
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const onRemoveClick = () => {
    app.options = [];
    renderOptions();
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
};
//JSX - Javascript XML

const appRoot = document.getElementById('app');

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.appTitle}</h1> 
            {app.appSubtitle && <p>{app.appSubtitle}</p>}
            <p>{getOptionsLength(app.options) > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length == 0}onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveClick}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderOptions();


