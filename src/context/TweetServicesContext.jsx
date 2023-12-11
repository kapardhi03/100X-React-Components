import {createContext, useState} from "react";
import PropTypes from "prop-types";
import tweetServices from "../services/tweet/tweetServices.js";

export const TweetServicesContext = createContext(null);

function TweetServicesProvider ({children}) {

    const [tweetService, setTweetService] = useState(tweetServices());

    return (
        <TweetServicesContext.Provider value={tweetService}>
            {children}
        </TweetServicesContext.Provider>
    )
}

TweetServicesProvider.propTypes = {
    children: PropTypes.node,
}

export default TweetServicesProvider;
