import PropType from 'prop-types'
import Heart from "./Icons/Heart.jsx";
import Retweet from "./Icons/Retweet.jsx";
import Comment from "./Icons/Comment.jsx";
import Share from "./Icons/Share.jsx";
import Stats from "./Icons/Stats.jsx";

// styles for tailwind inference at build time
// dynamic styles are not like bg-{primary} not loaded by tailwind
// eslint-disable-next-line no-unused-vars
const requiredStyles = {
    'strokes': 'stroke-red-like stroke-green-success stroke-twitter-blue',
    'hover-strokes': 'group-hover:stroke-green-success group-hover:stroke-red-like group-hover:stroke-twitter-blue',
    'text': 'text-green-success text-red-like text-twitter-blue',
    'hover-texts': 'group-hover:text-green-success group-hover:text-red-like group-hover:text-twitter-blue',
    'bg': 'group-hover:bg-red-like-hover group-hover:bg-green-success-hover group-hover:bg-twitter-blue-hover',
    'fill': 'group-hover:fill-red-like group-hover:fill-twitter-blue fill-red-like'
}

const TweetActionButton = ({iconName, iconValue, isActive, primaryColor, toFill, ...rest}) => {

    const baseClassName = "transition-all duration-100";
    const activeClass = isActive ? `stroke-${primaryColor} stroke-[1.6px]` + (toFill ? ` fill-${primaryColor}` : '') : '';
    const notShareClass = !(iconName === 'share') ? "stroke-[#737373]" : '';
    const hoverClass = !(iconName === 'share') ? ` group-hover:stroke-${primaryColor}` : '';
    const fillHoverClass = toFill ? ` group-hover:fill-${primaryColor}` : '';
    const iconClassName = `${activeClass} ${baseClassName} ${notShareClass} ${hoverClass} ${fillHoverClass}`;

    const icons = {
        'heart': <Heart className={iconClassName}/>,
        'retweet': <Retweet className={iconClassName} />,
        'comment': <Comment className={iconClassName} />,
        'share': <Share className={iconClassName} />,
        'stats': <Stats className={iconClassName} />,
    }

    const SvgIcon = icons[iconName];

    return (
        <button className="flex items-center group" {...rest}>
            <div className={`rounded-full group-hover:bg-${primaryColor}-hover w-8 h-8 flex items-center justify-center transition-all`}>
                {SvgIcon}
            </div>
            <div className={`text-sm transition-all duration-100 group-hover:text-${primaryColor} `
                + (isActive ? `text-${primaryColor}` : "text-neutral-500")
                } >
                {iconValue}
            </div>
        </button>

    )
}

TweetActionButton.propTypes = {
    iconName: PropType.string.isRequired,
    iconValue: PropType.oneOfType([PropType.number, PropType.string]),
    isActive: PropType.bool,
    toFill: PropType.bool,
    primaryColor: PropType.string.isRequired,
}

export default TweetActionButton
