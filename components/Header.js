import React from "react";
import Image from "next/image";

function Header() {
	return (
        <header>
            <div>
                <Image
                    src='https://links.papareact.com/qd3'
                    alt=''
                    layout="fill"
                    width={40}
                    height={40}
                />
            </div>

            <div></div>

            <div></div>
			<h1>This is the Header</h1>
		</header>
	);
}

export default Header;
