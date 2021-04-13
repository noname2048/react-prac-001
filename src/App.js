import logo from 'logo.svg';
import 'App.css';
import React from 'react';
import PropTypes from "prop-types";
import ThemedButton from "ThemedButton";
import Counter from 'Counter'
import Message from 'Message';
import Porfile from "Profile";
import Profile from 'Profile';


class PostDetail extends React.Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  }

  state = {
    postDetail: null,
  }

  componentDidMount() {
    const { postId } = this.props;
    this.requestPost(postId);
  }

  componentDidUpdate(prevProps) {
    const { postId } = this.props;
    if ( postId !== prevProps.postId) {
      this.requestPost(postId);
    }
  }

  requestPost(postId) {
    console.log(`request post #${postId}`)
    // axios (http client) => this.props
    this.setState({
      postDetail: null
    })
    setTimeout(() => {
      this.setState({
        postDetail: `로딩된 post#${postId}`
      })
    }, 3000);
  }

  render() {
    const { postId } = this.props;
    const { postDetail } = this.state;
    return (
      <div>
        포스팅 #{postId}
        <hr />
        { !postDetail && "로딩 중..."}
        { postDetail }
      </div>
    )
  }
}
class App extends React.Component {
  onChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
    console.log("change value", value, this);
  }

  state = {
    postId: 10,
    myquery: "",
    language: ""
  }

  render() {
    return (
      <div>
        <Message />
        <Profile />
        <Counter />
        <Counter color={"green"} />
        <Counter color={"blue"} />
        <input name="myquery" onChange={this.onChange} />
        <input name="language" onChange={this.onChange} />
        <ThemedButton theme="success" label="sayhello"/>
        <PostDetail postId={this.state.postId} />
        <button onClick={() => this.setState({ postId:20 })}>PostId 변경</button>
        {JSON.stringify(this.state)}
      </div>
    )
  }
}

export default App;
