import PropTypes from 'prop-types'

function Button({
                    size = "md",
                    variant = "default",
                    disabled = false,
                    circular = false,
                    position = "",
                    width = "full",
                    onClick = () => {
                    },
                    children,
                }) {
    // states of button
    const baseStyles = (circular ? "p-4 h-auto" : "py-2 px-6 backdrop-blur-xl")
        +
        " font-bold text-center flex justify-center items-center shadow-md  rounded-full";

    const widthStyle = width === "full" ? "w-full" : "";

    // font-bold, padding etc
    const sizeStyle = {
        sm: "text-sm h-5",
        md: "text-md h-7",
        lg: "text-lg h-9",
        xl: "h-11",
    } // sm, md, lg

    const variantStyle = {
        primary: "bg-twitter-blue hover:bg-twitter-blue-hover",
        default: "bg-neutral-50 hover:bg-neutral-200 text-black disabled:bg-neutral-50",
        outline: "bg-inherit border border-sign-up-border text-twitter-blue",
        none: "bg-inherit"
    }; // bg-blue-500

    const disabledStyle = "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed"; // disabled styles

    const classes = `${baseStyles} ${widthStyle} ${sizeStyle[size] ?? ""} ${variantStyle[variant]} ${disabledStyle} ${position}`;

    return (
        <button type="button" className={classes} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']).isRequired,
    variant: PropTypes.oneOf(['primary', 'default', 'outline', 'none']).isRequired,
    width: PropTypes.string,
    circular: PropTypes.bool,
    position: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
}

export default Button
