import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h3>Welcome {this.props.loggedInUser.username} </h3>
            </div>
        )
    }
}

export default Profile;