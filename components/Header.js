import Link from 'next/link';
import { useState } from 'react';


const Header = () => {

    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <header className="bg-gray-100">
            <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap md:p-8">
                {/* Logo */}
                <div className="transition duration-500 ease-in-out hover:text-purple-600 transform hover:scale-110">
                    <Link href="/">
                        <a className="text-xl font-bold  hover:text-purple-600 text-black">
                            <img src="cosmetics.svg" className="w-8 mr-3 text-gray-200 hover:border-purple-600" />
                        </a>
                    </Link>
                </div>
                {/* Button Toggle */}
                <button className="transition duration-500 ease-in-out hover:border-purple-600 transform hover:-translate-y-1 flex items-center block px-3 py-2 text-black border border-black rounded md:hidden"
                    onClick={() => toggleExpansion(!isExpanded)}
                >
                    <svg
                        className="w-3 h-3 fill-current hover:"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>       
                </button>

                {/* items list */}
                <ul
                    className={`${
                        isExpanded ? `block` : `hidden`
                    } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
                >
                    {[
                        { title: "Home", route: "/" },
                        { title: "About", route: "/about" },
                        { title: "Services", route: "/services" },
                        { title: "Pricing", route: "/pricing" },
                        { title: "Galery", route: "/galery" },
                        { title: "Contact Me", route: "/contact" }
                    ].map(navigationItem => (
                        <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
                        <Link href={navigationItem.route}>
                            <a className="transition duration-500 ease-in-out hover:text-purple-600 transform hover:scale-110 block text-black">{navigationItem.title}</a>
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;