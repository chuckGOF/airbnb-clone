import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>AirBnB</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h3>This is the body</h3>
			<Header />
		</div>
	);
}
