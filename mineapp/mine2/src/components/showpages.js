import React, { Component } from "react";
import AUX from "./../HOC/AUX";
import fire from "./../config/firebase";

class ShowPages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: [],
      content: [],
      status: [],
      pages: ""
    };
  }

  onDelete = title => {
    alert(title);
    console.log("Clicked on delete");
  };

  componentDidMount() {
    const rootRef = fire.database().ref();
    const page = rootRef.child("pages").orderByKey();
    console.log(page);
    this.setState({ pages: page });
    // page.once("value", snap => {
    //   this.setState({ pages: snap });
    //   //   snap.forEach(child => {
    //   //     console.log(child.val());
    //   //   });
    // });
    // page.once("value", snap => {
    //   snap.forEach(child => {
    //     this.setState({
    //       key: this.state.status.concat([child.key]),
    //       title: this.state.title.concat([child.val().title]),
    //       content: this.state.content.concat([child.val().content]),
    //       status: this.state.status.concat([child.val().status])
    //       //   content: this.state.content.concat([child.val().content])
    //     });

    // const pageList = this.state.key.map((dataList, index) => (
    //   <tr>
    //     <td>{this.state.title[index]}</td>
    //     <td>{this.state.content[index]}</td>
    //     <td>
    //       {this.state.status[index] == "on_Hold" ? "On Hold" : "Published"}
    //     </td>
    //     <td> Ashitosh </td>
    //     <td>
    //       <button onChange={this.onDelete(this.state.title[index])}>
    //         Delete
    //       </button>
    //       <button>Edit</button>
    //     </td>
    //   </tr>
    // ));

    // this.setState({
    //   pages: pageList
    // });
    //   });
    // });
  }
  render() {
    console.log(this.state);
    return (
      <AUX>
        <form>
          <h1> My pages</h1>
          <table>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Status</th>
              <th>Auther</th>
              <th>Action</th>
            </tr>

            {console.log(this.state.pages)}
            {this.state.pages.once("value", snap => {
              snap.forEach(child => {
                console.log(child.val());
              });
            })}
            {/* {this.state.pages.once("value", snap => {
              snap.forEach(child => {
                console.log(child.val());
              });
            })} */}

            {/* {this.state.key.map((dataList, index) => (
              <tr>
                <td>{this.state.title[index]}</td>
                <td>{this.state.content[index]}</td>
                <td>
                  {this.state.status[index] == "on_Hold"
                    ? "On Hold"
                    : "Published"}
                </td>
                <td> Ashitosh </td>
                <td>
                  <button onChange={this.onDelete(this.state.title[index])}>
                    Delete
                  </button>
                  <button>Edit</button>
                </td>
              </tr>
            ))} */}
          </table>
        </form>
      </AUX>
    );
  }
}

export default ShowPages;
