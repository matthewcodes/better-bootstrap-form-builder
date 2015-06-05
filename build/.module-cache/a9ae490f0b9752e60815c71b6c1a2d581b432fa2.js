var InputWithLabel = React.createClass({displayName: "InputWithLabel",
    getInitialState: function() {
      return {'labelText':'Label Text'};
    },
    handleLabelTextChange : function() {
      this.setState({'labelText': React.findDOMNode(this.refs.labelTextInput).value});
    },
    render: function() {

        var popoverContent = (React.createElement("input", {ref: "labelTextInput", onChange: this.handleLabelTextChange}));

        return (

          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-7"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", {for: "exampleInputEmail1"}, this.state.labelText), 
                React.createElement("input", {type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Enter email"})
                  )
            ), 
            React.createElement("div", {className: "col-md-5"}, 
              React.createElement("button", {type: "button", className: "btn btn-default invisibutton", "data-toggle": "popover", title: "Edit Component", "data-html": "true", "data-content": popoverContent}, 
                React.createElement("span", {className: "glyphicon glyphicon-cog", "aria-hidden": "true"})
              )
            )
          )

        );
    }
});


var FormToolbox = React.createClass({displayName: "FormToolbox",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(InputWithLabel, null)
      )
    );
  }
});

React.render(
  React.createElement(FormToolbox, null),
  document.getElementById('toolbox')
);
