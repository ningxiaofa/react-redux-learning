import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/user";

class User extends React.Component {
    render() {
        const { user, userActions } = this.props;
        console.log(user);
        const { isFetching, data, error } = user;
        let ret;
        if (isFetching) {
            console.log(isFetching)
            ret = "loading..."
        } else if (data) {
            ret = data.title
        } else {
            ret = error
        }

        return (
            <div className="container text-center">
                <h2>User</h2>
                <p className="lead">{ret}</p>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        userActions.get_user();
                    }}
                >
                    getUser
        </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
