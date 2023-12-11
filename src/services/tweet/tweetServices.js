import dummyTweets from "./dummyTweets.js";

// simple simulation of twitter backend
// have to check for auth token first
// skipping middleware, authentication for now

const tweetServices = () => {

    const tweets = dummyTweets;

    const getCachedTweets = async (tab) => {
        await delay(100);
        return JSON.parse(localStorage.getItem('cachedTweets'+tab));
    }

    // some mechanism to calc diff between cached and new.
    // most likely index
    const getTweets = async (tab)=> {
        await delay(2000);
        localStorage.setItem('cachedTweets'+tab, JSON.stringify(tweets));
        return tweets;
    }

    const getUserTweets = async (userHandle) => {
        await delay(2000);
        return tweets.filter(tweet => tweet.user.userHandle === userHandle);
    }

    const postTweet = async ({user, tweetContent}) => {
        await delay(3000);
        const newTweet = {
                id: Math.floor(Math.random()*10000),
                user,
                isLiked: false,
                isRetweeted: false,
                timestamp: Date.now(),
                tweetContent,
                likes: 0,
                comments: 0,
                retweets: 0,
                views: "0",
            };
        tweets.unshift(newTweet);
    }

    return {
        getCachedTweets,
        getTweets,
        getUserTweets,
        postTweet,
    }
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

export default tweetServices;
