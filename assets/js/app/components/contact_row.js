$(document).ready(function(){
  console.log('start contact row define');
  window.ContactRow = React.createClass({
    render: function(){
      return(
        <tr>
          <td>{this.props.contact.get("id")}</td>
          <td>{this.props.contact.get("name")}</td>
          <td>{this.props.contact.get("value")}</td>
          <td>{this.props.contact.get("title")}</td>
          <td>
            <window.ContactsEdit parent={this.props.parent} />
          </td>
          <td>
            <window.ContactsDelete parent={this.props.parent} />
          </td>
        </tr>
      );
    }
  });
});
