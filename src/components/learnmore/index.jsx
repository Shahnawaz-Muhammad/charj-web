import { IndustryInsightsData } from "../../data/industryInsightsData"

const IndustryInsights = () => {
    return (
        <div className="bg-black py-10  h-full">
            <div className="container mx-auto">
                <div className="grid gap-y-9">
                    <h2 className="text-[32px] md:text-4xl xl:text-[44px] 2xl:text-5xl text-center text-white">LEARN OUR INDUSTRY</h2>
                    <hr className="h-[2px] w-[50px] bg-[#1B1B1B] mx-auto" />
                    <div className="container max-w-[1200px] mx-auto">
                        <div className="flex flex-wrap justify-center">
                            {IndustryInsightsData.map((data, index) =>
                                <div className="w-full md:w-1/2 lg:w-1/3 p-4 text-center" key={index}>
                                    <h4 className="text-2xl text-white leading-6 h-16">{data.name}</h4>
                                    <p className="text-lg` text-grEy-300 text-[#919191] leading-7">{data.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndustryInsights