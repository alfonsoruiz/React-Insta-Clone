import React from 'react';

class Likes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes
        }
    }

    render() {
        return(
            <p className="post-likes">Likes {this.state.likes}</p>
        );
    }
}

export default Likes;