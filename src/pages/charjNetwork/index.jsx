import charjNetworkImg from "../../assets/images/charj_network.webp";

function CharjNetwork() {
  return (
    <div className="bg-[#000000] py-32 h-full">
      <div className="container mx-auto">
        <div className="grid gap-y-6">
          <h2 className="text-[32px] md:text-4xl xl:text-[44px] 2xl:text-5xl text-center text-white">
            The Charj Network Has Launched
          </h2>
          <hr className="h-[2px] w-[50px] bg-[#1B1B1B] mx-auto" />
          <div>
            <div className="container mx-auto flex justify-center">
              <div className="w-11/12 lg:w-6/12 ">
                <img src={charjNetworkImg} alt="Image 1" className="mx-auto" />
              </div>
            </div>
            <div className="container mx-auto flex justify-center">
              <p className="w-11/12 lg:w-6/12 text-white text-lg leading-7">
                The Charj Network launch event occured on June 19th 2021
                coinciding with the grand opening celebration of the Pride
                Hartford Travel Center; The First Alternative Fueling Center of
                Its Kind in the World. I am proud to have contributed both the
                12 Tesla Superchargers at this site as well as two 50kW DC
                charginger with both CCS1 and CHAdeMO connectors. We are proud
                to work with ABB and network parther EVConnect at this critical
                infrastructure location which enables compliance with the
                Federal Alternaitive Fuels Corridors Program! See the news reel
                of the launch event at the link.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharjNetwork;
