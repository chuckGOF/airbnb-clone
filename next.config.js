/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["links.papareact.com"],
	},
	env: {
		mapbox_key:
			"pk.eyJ1IjoiY2h1Y2tmZyIsImEiOiJjbDBpYXJ4bjEwMHR2M2dxamwza2Y1ZHRxIn0.BE272qw46z9gIU-W_V1Cxg",
	},
};

module.exports = nextConfig;
