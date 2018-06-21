import React from 'react';


class AddPost extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { name: '', content: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event);
  //   const input = event.target.name;
  //   if (input === 'name') {
  //     this.setState({ [input]: event.target.value });
  //   } else if (input === 'content') {
  //     this.setState({ [input]: event.target.value });
  //   }
  }
  //
  handleSubmit(event) {
    this.props.handleSubmit(event);
  //   console.log(`Submitted: ${this.state.name} ${this.state.content}`);
  //   event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          Name:
        <input type="text"
          name="name"
          placeholder="Your Name"
          value={this.props.nameValue}
          onChange={this.handleChange}
        />
          Ask:
        <input type="text"
          name="content"
          placeholder="I am looking for..."
          value={this.props.contentValue}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddPost;
