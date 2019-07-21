//End of lecture 27

class IndecisionApp extends React.Component
{
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return <p>Put your life in the hands of a computer.</p>;
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option component here
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                Add Option component here
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));