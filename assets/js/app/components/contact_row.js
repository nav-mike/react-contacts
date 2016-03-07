$(document).ready({
  window.ContactRow = React.createClass({
    render: function(){
      return(
        <tr>
          <td>{this.props.contact.get("id")}</td>
          <td>{this.props.contact.get("name")}</td>
          <td>{this.props.contact.get("value")}</td>
          <td>{this.props.contact.get("title")}</td>
          <td>
            <button
              className="btn btn-warning"
              data-id={this.props.contact.get("id")}>Show</button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              data-id={this.props.contact.get("id")}>Delete</button>
          </td>
        </tr>
      );
    }
  });
});
