import PropTypes from 'prop-types'

import TweetActionButton from "./TweetActionButton.jsx";

export default function TweetActions ({stats, handlers}) {

    const {likes, comments, retweets, views, isLiked, isRetweeted} = stats;
    const [likeHandler, retweetHandler] = handlers;

    return (
        <div className="flex w-full justify-between my-4">

            <TweetActionButton iconName={'comment'} iconValue={comments} primaryColor={'twitter-blue'}/>

            <TweetActionButton iconName={'retweet'} iconValue={retweets} isActive={isRetweeted} primaryColor={'green-success'} onClick={retweetHandler}/>

            <TweetActionButton iconName={'heart'} iconValue={likes} isActive={isLiked} primaryColor={'red-like'} onClick={likeHandler} toFill={true}/>

            <TweetActionButton iconName={'stats'} iconValue={views} primaryColor={'twitter-blue'} toFill={true}/>

            <TweetActionButton iconName={'share'} primaryColor={'twitter-blue'} toFill={true}/>

        </div>
    )
}

TweetActions.propTypes = {
    stats: PropTypes.exact({
        likes: PropTypes.number.isRequired,
        isLiked: PropTypes.bool.isRequired,
        comments: PropTypes.number.isRequired,
        retweets: PropTypes.number.isRequired,
        isRetweeted: PropTypes.bool.isRequired,
        views: PropTypes.string.isRequired,
    }).isRequired,
    handlers: PropTypes.arrayOf(PropTypes.func).isRequired,
}
