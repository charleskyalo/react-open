class MyComponent extends React.Component {


    // write jsx in here .
    render() {
        // return React.createElement("h1", null, "Hello react"); 
        return (
            <div>
                <h1> Hello jsx</h1>
            </div>
        )
    }
}







ReactDOM.render(<MyComponent />, document.getElementById('app'));