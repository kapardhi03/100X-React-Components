import PropTypes from 'prop-types'

export default function RoundedSnackBar ({text="Snackbar"}) {
    return (
        <div className="w-full fixed bottom-16 ">
            <div className="text-neutral-50 text-15 w-fit my-3 mx-auto p-4 bg-search-bar-fill rounded-full">
                {text}
            </div>
        </div>
    )
}

RoundedSnackBar.propTypes = {
    text: PropTypes.string.isRequired,
}
