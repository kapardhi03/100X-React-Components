import PropType from 'prop-types'

const Stats = ({className}) => {
    return (
        <svg width="13" height="15" fill="#737373" viewBox="0 0 13 15" xmlns="http://www.w3.org/2000/svg" className={className}>
            <rect x="0.0178833" y="5.71436" width="1.71429" height="9.14287"/>
            <rect x="3.44659" width="1.71429" height="14.8572"/>
            <rect x="6.87512" y="8" width="1.71429" height="6.85715"/>
            <rect x="10.3037" y="3.42847" width="1.71429" height="11.4286"/>
        </svg>

    )
}

Stats.propTypes = {
    className: PropType.string,
}

export default Stats