import PropTypes from 'prop-types';
const MyFirstComponent = ({ usera, x }) => {
    return (
        <div className="test-component">
            <h2>Test Component</h2>
            <h3>{usera.name}</h3>
            <p> Text x = { x }</p>
        </div>
    );
};
MyFirstComponent.defaultProps = {
    x: 0,
};
MyFirstComponent.propTypes = {
    x: PropTypes.number.isRequired,
}

export default MyFirstComponent;