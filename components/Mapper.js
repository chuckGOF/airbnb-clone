/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Mapper({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({});
	// trasnform the search results object into the {latitude: 42.51, longitude: 13.37} object
	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));

	// console.log(coordinates)

	const center = getCenter(coordinates);

	// console.log((center))

	const viewport = {
		width: "100%",
		height: "100%",
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	};

	return (
		<Map
			mapStyle="mapbox://styles/chuckfg/cl0ib55in004i15p3pdnc5aie"
			mapboxAccessToken={process.env.mapbox_key}
			initialViewState={{
				longitude: viewport.longitude,
				latitude: viewport.latitude,
				zoom: viewport.zoom,
			}}
			style={{ width: viewport.width, height: viewport.height }}
			// {...viewport}
			// onViewportChange={(nextViewport) => setViewport(nextViewport)}
		>
			{searchResults.map((result) => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}
						anchor="bottom"
					>
						<p
							role="img"
							aria-label="push-pin"
							onClick={() => setSelectedLocation(result)}
							className="cursor-pointer text-2xl animate-bounce text-sm"
						>
							📍
						</p>
						<img src="https://links.papareact.com/qd3" alt="📍" />
					</Marker>

					{/* Popup that shows when we click on a Marker */}
					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							latitude={result.lat}
							longitude={result.long}
						>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</Map>
	);
}

export default Mapper;
