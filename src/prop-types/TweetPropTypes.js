import PropTypes from 'prop-types'

const tweetPropTypes = PropTypes.exact(
    {
      id: PropTypes.number.isRequired,
      user: PropTypes.exact({
        userName: PropTypes.string.isRequired,
        userHandle: PropTypes.string.isRequired,
        userAvatarPath: PropTypes.string.isRequired,
      }).isRequired,
      isLiked: PropTypes.bool.isRequired,
      isRetweeted: PropTypes.bool.isRequired,
      timestamp: PropTypes.number.isRequired,
      tweetContent: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      retweets: PropTypes.number.isRequired,
      views: PropTypes.string.isRequired,
    }
  )

export default tweetPropTypes;
