(function() {
  var HelloWorld = React.createClass({

    getInitialState: function() {
      return {value: 'stranger'};
    },

    handleChange: function(e) {
      this.setState({
        value: e.target.value
      });
    },

    render: function() {
      return (
        <div>
          <input type="text" onChange={this.handleChange} />
          <p>Hello, {this.state.value}!</p>
        </div>
      );
    }

  });

  ReactDOM.render(
    <div>
      <HelloWorld />
    </div>,
    document.getElementById("content")
  );
})()