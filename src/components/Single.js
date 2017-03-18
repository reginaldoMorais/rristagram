import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postId);

    return (
      <div className="single-photo">
        <Photo key={i} i={i} post={this.props.posts[i]} {...this.props} />
        <Comments {...this.props} postId={i} />
      </div>
    );
  }
}

export default Single;
