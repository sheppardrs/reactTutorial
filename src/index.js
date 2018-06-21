import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
import './style.scss';
// const $ = require('jquery');
import Clock from './components/clock';
import LoginControl from './components/login_control';
import AddPost from './components/add_post';
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Post(props) {
  return (
    <div className="Post">
      <UserInfo user={props.post.author} />
      <div className="Post-text">
        {props.post.text}
      </div>
      <div className="Post-date">
        {props.post.date.toLocaleString()}
      </div>
    </div>
  );
}

function Posts(props) {
  let i = 0;
  const sorted = props.posts.sort((a, b) => {
    if (a.date < b.date) {
      return (1);
    }
    return (-1);
  });
  // const posts = props.posts.map((post) => {
  const posts = sorted.map((post) => {
    i += 1;
    return <Post key={i} post={post} />;
  });
  return (
    <div className="Posts">
      {posts}
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Welcome name="Shep" />
//       <Welcome name="Fiona" />
//     </div>
//   );
// }

// Hard coded posts
const post1 = {
  date: new Date(),
  text: 'I am looking for a bike.',
  author: {
    name: 'Shep',
    avatarUrl: 'img/Sharity_Logo.png',
  },
};

const post2 = {
  date: new Date(),
  text: 'I am looking for a bike.',
  author: {
    name: 'Bob',
    avatarUrl: 'img/Sharity_Logo.png',
  },
};

const post3 = {
  date: new Date(),
  text: 'I am looking for a bike.',
  author: {
    name: 'Fiona',
    avatarUrl: 'img/Sharity_Logo.png',
  },
};

const posts = [post1, post2, post3];

class PostArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts,
      name: '',
      content: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const input = event.target.name;
    if (input === 'name') {
      this.setState({ [input]: event.target.value });
    } else if (input === 'content') {
      this.setState({ [input]: event.target.value });
    }
  }

  handleSubmit(event) {
    console.log(`Submitted: ${this.state.name} ${this.state.content}`);
    const newpost = {
      date: new Date(),
      text: this.state.content,
      author: {
        name: this.state.name,
        avatarUrl: 'img/Sharity_Logo.png',
      },
    };

    this.setState(prevState => ({
      posts: [...prevState.posts, newpost],
    }));
    this.setState({ name: '', content: '' });
    event.preventDefault();
  }

  render() {
    return (
      <div className="PostArea">
        <AddPost
          nameValue={this.state.name}
          contentValue={this.state.content}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Posts
          posts={this.state.posts}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <LoginControl />
    <PostArea />
    {/* <AddPost />
    <Posts
      posts={posts}
    /> */}
    <Clock show />
  </div>
  ,
  document.getElementById('main'),
);

// setInterval(tick, 1000);

// console.log('starting up!');
