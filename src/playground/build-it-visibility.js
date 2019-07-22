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

const appRoot = document.getElementById('app');
ReactDOM.render(<Visibility />, appRoot);