const MyThirdComponent = ({children}) => {
    return (
        <div className="third-component">
            <h4>Third Component</h4>
            {children}
        </div>
    );
};

export default MyThirdComponent;