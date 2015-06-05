var FormToolbox = React.createClass({displayName: "FormToolbox",
  render: function() {
    return React.createElement("h1", null, "Hello");
  }
});

React.render(
  React.createElement(FormToolbox, null),
  document.getElementById('formToolbox')
)
