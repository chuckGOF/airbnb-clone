import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
	const router = useRouter();
	// console.log(router.query)
	const { location, startDate, endDate, noOfGuests } = router.query;
	const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
	const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
	const range = `${formattedStartDate} - ${formattedEndDate}`;
	return (
		<div>
			<Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

			<main className="flex">
				<section className="flex-grow pt-14 px-6">
					<p className="text-xs">
						300+ Stays - {range} - for {noOfGuests} guests
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">
						Stays in {location}
					</h1>

					<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="button">Cancellation Flexibility</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and beds</p>
						<p className="button">More filters</p>
					</div>

					<div className="flex flex-col">
						{searchResults?.map((item, i) => (
							<InfoCard
								key={i}
								img={item.img}
								location={item.location}
								title={item.title}
								star={item.star}
								description={item.description}
								price={item.price}
								total={item.total}
							/>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Search;

export async function getServerSideProps(context) {
	const response_searchResults = await fetch(
		"https://links.papareact.com/isz"
	);
    const searchResults = await response_searchResults.json();
    // console.log(searchResults)

	return {
		props: {
			searchResults: searchResults,
		},
	};
}
