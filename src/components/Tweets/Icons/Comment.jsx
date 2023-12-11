import PropType from 'prop-types'

const Comment = ({className}) => {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} strokeWidth={1.6}>
            <path id="comment" d="M12.1092 9.61961L8.03202 13.1428V11.339V10.589H7.28202H5.56048C2.90372 10.589 0.75 8.43526 0.75 5.7785C0.75 3.12174 2.90373 0.968018 5.56048 0.968018H8.88896C11.609 0.968018 13.814 3.17305 13.814 5.89311C13.814 7.32395 13.1918 8.68407 12.1092 9.61961Z" strokeWidth="1.5"/>
        </svg>
    )
}

Comment.propTypes = {
    className: PropType.string,
}

export default Comment