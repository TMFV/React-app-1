import PropTypes from 'prop-types';

const UserDetails = ({ user }) => {
    const { firstName, lastName, age } = user;
    return (
        <div className="user-details">
            <h4>User Details</h4>
            <p>First name: { firstName }</p>
            <p>Last name: { lastName }</p>
            <p>Age: { age }</p>
        </div>
    );
};

UserDetails.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        }),
    }


export default UserDetails;
