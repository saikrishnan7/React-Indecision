//End of lecture 26

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

class Option extends React.Component {
    render() {
        return (
            <div>
                Options component here
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add Option component here</button>
            </div>
        );
    }
}

const jsx = (
    <div>
        <h1>Indecision</h1>
        <Header />
        <Action />
        <Option />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));