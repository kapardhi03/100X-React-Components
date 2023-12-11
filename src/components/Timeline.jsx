import PropTypes from 'prop-types'
import TweetComponent from "./Tweets/TweetComponent"
import tweetPropTypes from '../prop-types/TweetPropTypes.js'

export default function Timeline ({tweets = []}){

    const tweetComponents = tweets.map(
        tweet => <TweetComponent key={tweet.id} tweet={tweet}/>
    )

    return (
        <main>
            <section>
                {tweetComponents}
            </section>
        </main>
    )
}

Timeline.propTypes = {
    tweets: PropTypes.arrayOf(
        tweetPropTypes
    )
}
