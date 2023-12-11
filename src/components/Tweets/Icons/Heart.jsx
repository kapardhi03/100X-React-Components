import PropType from 'prop-types'

const Heart = ({className}) => {
    return (
        <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path id="heart" d="M8.05375 3.86099L7.42905 3.08432C5.70461 0.940397 2.5458 1.29366 1.25996 3.77424C0.639505 4.97117 0.60862 7.40028 1.17758 8.62702C3.09347 12.7578 6.68184 14.7113 7.36976 15.0559C7.44687 15.0945 7.51695 15.1432 7.5896 15.1897C7.91151 15.3957 8.3226 15.3698 8.6221 15.112C8.67845 15.0635 12.8047 13.2092 14.9299 8.62702C15.4989 7.40029 15.468 4.97117 14.8475 3.77424C13.5617 1.29366 9.87425 0.69782 8.05375 3.86099Z" strokeWidth="1.5" />
        </svg>
    )
}

Heart.propTypes = {
    className: PropType.string,
}

export default Heart