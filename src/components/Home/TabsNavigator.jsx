import PropTypes from 'prop-types'

export default function TabNavigator ({
    tabs=['active'], 
    activeTabIndex = 0,
    setActiveTab = ()=>{},
}) {

    const activeTab = tabs[activeTabIndex]
    const tabComponents = tabs.map((tab, index) => {
        const isActive = tab === activeTab;
        return (
            <button key={tab} onClick={() => setActiveTab(index)} className="flex flex-col items-center justify-center hover:bg-neutral-800 w-2/4 text-center cursor-pointer relative">
                <div className={`flex items-end py-4 text-neutral-${isActive ? "50" : "400"} font-medium text-16`}>
                    {tab}
                </div>
                {isActive && <div className="bg-twitter-blue w-14 rounded-full h-1 absolute bottom-0" />}
            </button>
        );
    });

    return (
        <section className="w-full flex-shrink-0">
            <div className="flex w-full border-b border-neutral-700">
                {tabComponents}
            </div>
        </section>
    )
}

TabNavigator.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeTabIndex: PropTypes.number.isRequired,
    setActiveTab: PropTypes.func.isRequired,
}
