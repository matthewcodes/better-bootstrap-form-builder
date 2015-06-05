var InputWithLabel = React.createClass({displayName: "InputWithLabel",
    getInitialState: function() {
      return {'labelText':'Label Text'};
    },
    handleLabelTextChange : function() {
      this.setState({'labelText': React.findDOMNode(this.refs.labelTextInput).value});
    },
    render: function() {

         var popoverContent = "hello";

        return (

          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-7"}, 
              React.createElement("div", {className: "form-group"}, 
                React.createElement("label", {for: "exampleInputEmail1"}, this.state.labelText), 
                React.createElement("input", {type: "email", className: "form-control", id: "exampleInputEmail1", placeholder: "Enter email"})
              )
            ), 
            React.createElement("div", {className: "col-md-5"}, 
              React.createElement("button", {className: "btn btn-default invisibutton", type: "button", "data-toggle": "collapse", "data-target": "#collapseExample", "aria-expanded": "false", "aria-controls": "collapseExample"}, 
                React.createElement("span", {className: "glyphicon glyphicon-cog", "aria-hidden": "true"})
              ), 
              React.createElement("div", {className: "collapse", id: "collapseExample"}, 
                React.createElement("div", {className: "well"}, 
                  React.createElement("div", {className: "form-group"}, 
                    React.createElement("label", {for: "EditlabelTextInput"}, "Enter value for label text:"), 
                    React.createElement("input", {type: "email", className: "form-control", id: "EditlabelTextInput", onChange: this.handleLabelTextChange})
                  )
                )
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
