import {useContext} from "react";
import {TweetServicesContext} from "../context/TweetServicesContext.jsx";

const useTweetServices = () => useContext(TweetServicesContext);
export {useTweetServices};
