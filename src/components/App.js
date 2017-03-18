import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/photo';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispachToProps = (dispach) => {
  return bindActionCreators(actions, dispach);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
