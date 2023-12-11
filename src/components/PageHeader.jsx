import PropType from "prop-types";
import ArrowLeft from "../assets/images/arrow-left.svg";

function PageHeader ({title, callback, children, subtitle}) {

    return (
        <div className="py-4 px-4 w-full flex justify-between items-center">
            <button onClick={callback}>
                <img alt="move-back" src={ArrowLeft} className="mr-5" />
            </button>
            <div className="flex flex-grow justify-start">
                <div className="flex-col">
                    <div className="font-bold">{title}</div>
                    <div className="text-neutral-400 text-xs">{subtitle}</div>
                </div>
            </div>
            {children}
        </div>
    )
}

PageHeader.propTypes = {
    title: PropType.string.isRequired,
    callback: PropType.func.isRequired,
    children: PropType.node,
    subtitle: PropType.string,
}

export default PageHeader