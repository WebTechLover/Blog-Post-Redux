import React, { Component, Fragment } from 'react';
import Counter from '../src/container/counterContainer';
import CreatePost from './container/CreatePost';
// import NewPost from './component/NewPost';
import PostList from './container/PostList';
const stylesApp = {
   marginTop: 40
 }
class App extends Component {
   render() {
      return (
        <Fragment> 
            
            <div className="container">
               <div className="row" style={ stylesApp }>
                  <div className="col-md-6">
                     <CreatePost />
                  </div>
                  <div className="col-md-6">
                     <PostList />
                  </div>
               </div>
               <div className="row" style={stylesApp}>
                  <div>
                     <Counter />
                  </div>
               </div>
            </div>
        </Fragment>
      );
   }
}
export default App;