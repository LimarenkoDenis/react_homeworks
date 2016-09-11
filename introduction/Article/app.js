(function() {
    var Article = React.createClass({
        render: function() {
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.author}</h2>
                    <p>{this.props.body}</p>
                </div>
            );
        }
    });

    ReactDOM.render(
        <div>
            <Article title="Title" author="Bob Author" body="lorem ipson and text" />
        </div>,
        document.getElementById("content")
    );
})()