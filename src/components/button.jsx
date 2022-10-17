const Button = ({className, name, click}) => {
    return(
        <button 
            type="button" 
            className={`${className} btn d-block rounded-pill`}
            onClick={click}
        >
            {name}
        </button>
    )
};

export default Button;