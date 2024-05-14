import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const Main = () => {
  const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";

  return (
    <div className="bg-zinc-800 flex-1 text-white overflow-hidden flex flex-col justify-center items-center md:pt-20 ">
      <h6>Detay Görüntüle: Türkiye</h6>

      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#EEE",
                  },
                  hover: {
                    fill: "rgb(54,197,94)",
                  },
                  pressed: {
                    fill: "rgb(14,127,94)",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Main;
