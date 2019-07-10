import React, {Component, Fragment} from "react";

class NewPost extends Component {
	state = {
		title: '',
		body: ''
	  };
	
	  handleInputChange = e => {
		this.setState({
		  [e.target.name]: e.target.value
		});
	  };
	
	  handleSubmit = e => {
		e.preventDefault();
		if (this.state.title.trim() && this.state.body.trim()) {
		  console.log(this.state);
		  this.props.onAddPost(this.state);
		  this.handleReset();
		}
	  };
	
	  handleReset = () => {
		this.setState({
		  title: '',
		  body: ''
		});
	  };
	
	render() {
		return(
			<Fragment>
				<h1 className="mb-5">My Blog In React</h1>
				<form onSubmit={ this.handleSubmit }>
					<div className="form-group">
						<input
						type="text"
						placeholder="Title"
						className="form-control"
						name="title"
						onChange={ this.handleInputChange }
						value={ this.state.title }
						/>
					</div>
					<div className="form-group">
						<textarea
						cols="19"
						rows="8"
						placeholder="Body"
						className="form-control"
						name="body"
						onChange={ this.handleInputChange }
						value={ this.state.body }>
						</textarea>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">Add Post</button>
						<button type="button" className="btn btn-warning ml-3" onClick={ this.handleReset }>
						Reset
						</button>
					</div>
					</form>
			</Fragment>
		);
	}
}
export default NewPost;