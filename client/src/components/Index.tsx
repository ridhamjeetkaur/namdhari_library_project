import React from "react";
// import '../style/index.css'
const Index:React.FC = () =>{

    return(
        <React.Fragment>
            <body className="flex flex-col min-h-screen lg:flex-row">

    {/* <!-- Left Sidebar --> */}
    <aside className="bg-white w-full lg:w-64 p-4 lg:p-6 shadow-lg lg:shadow-xl rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none flex flex-col items-center lg:items-start z-20">
        {/* <!-- Logo --> */}
        <div className="mb-8 mt-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-blue-800">Book<span className="text-blue-500">Base</span></h1>
        </div>

        {/* <!-- Navigation --> */}
        <nav className="w-full">
            <ul className="space-y-3">
                <li><a href="#" className="sidebar-link active">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                    Discover
                </a></li>
                <li><a href="#" className="sidebar-link">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></svg>
                    Category
                </a></li>
                <li><a href="#" className="sidebar-link">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>
                    My Library
                </a></li>
                <li><a href="#" className="sidebar-link">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
                    Download
                </a></li>
                <li><a href="#" className="sidebar-link">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg>
                    Audio Books
                </a></li>
                <li><a href="#" className="sidebar-link">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                    Favourite
                </a></li>
            </ul>
        </nav>

        <div className="w-full mt-auto pt-6 border-t border-gray-200">
            <ul className="space-y-3">
                <li><a href="#" className="sidebar-link">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.09-.75-1.7-.92L14.8 2.8c-.09-.23-.3-.39-.55-.39h-4c-.25 0-.46.16-.55.39L9.3 5.3c-.61.17-1.18.52-1.7.92l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.09.75 1.7.92l.3 2.5c.09.23.3.39.55.39h4c.25 0 .46-.16.55-.39l.3-2.5c.61-.17 1.18-.52 1.7-.92l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>
                    Settings
                </a></li>
                <li><a href="#" className="sidebar-link">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.35 1.7-.93 2.35z"></path></svg>
                    Support
                </a></li>
                <li><a href="#" className="sidebar-link">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
                    Logout
                </a></li>
            </ul>
        </div>
    </aside>

    {/* <!-- Main Content Area --> */}
    <div className="flex-grow flex flex-col lg:flex-row p-4 md:p-6 lg:p-8">
        <div className="flex-grow lg:mr-8">
            {/* <!-- Top Header for Main Content --> */}
            <header className="bg-white rounded-xl shadow-md p-4 mb-6 flex items-center justify-between z-10 relative">
                <div className="flex-grow relative">
                    <input type="text" placeholder="Search your favourite books"
                           className="w-full p-3 pl-10 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800" />
                    <svg className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <div className="flex items-center ml-4 space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 4.36 6 6.93 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
                    </button>
                    <div className="flex items-center space-x-2">
                        <img src="https://placehold.co/40x40/cbd5e0/333?text=B" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-blue-400"/>
                        <span className="font-semibold text-gray-800 hidden md:block">Balogun</span>
                    </div>
                </div>
            </header>

            {/* <!-- Recommended Section --> */}
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Recommended</h2>
                    <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 flex items-center">
                        See All
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
                <div className="flex overflow-x-auto pb-4 space-x-4 scroll-container">
                    {/* <!-- Book Card 1 --> */}
                    <div className="flex-shrink-0 w-48 bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/fcd34d/333?text=Book+1" alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">The Psychology of Money</h3>
                        <p className="text-gray-600 text-sm truncate">Morgan Housel</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.8</span>
                        </div>
                    </div>
                    {/* <!-- Book Card 2 --> */}
                    <div className="flex-shrink-0 w-48 bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/ffd700/333?text=Book+2" alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">How Innovation Works</h3>
                        <p className="text-gray-600 text-sm truncate">Matt Ridley</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.7</span>
                        </div>
                    </div>
                    {/* <!-- Book Card 3 --> */}
                    <div className="flex-shrink-0 w-48 bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/a0e0ff/333?text=Book+3" alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">Company of One</h3>
                        <p className="text-gray-600 text-sm truncate">Paul Jarvis</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.9</span>
                        </div>
                    </div>
                    {/* <!-- Book Card 4 --> */}
                    <div className="flex-shrink-0 w-48 bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/c0c0c0/333?text=Book+4" alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">Stupore E Tremori</h3>
                        <p className="text-gray-600 text-sm truncate">Amelie Nothomb</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.6</span>
                        </div>
                    </div>
                    {/* <!-- Book Card 5 --> */}
                    <div className="flex-shrink-0 w-48 bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/e0e0e0/333?text=Book+5" alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">The Art of War</h3>
                        <p className="text-gray-600 text-sm truncate">Sun Tzu</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.5</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Categories Section --> */}
            <section className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
                    <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
                    </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                    <button className="category-btn active">All</button>
                    <button className="category-btn">Sci-Fi</button>
                    <button className="category-btn">Fantasy</button>
                    <button className="category-btn">Drama</button>
                    <button className="category-btn">Business</button>
                    <button className="category-btn">Education</button>
                    <button className="category-btn">Geography</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* <!-- Category Book Card 1 --> */}
                    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/f97316/fff?text=The+Bees" alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">The Bees</h3>
                        <p className="text-gray-600 text-sm truncate">Laline Paull</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.8</span>
                        </div>
                    </div>
                    {/* <!-- Category Book Card 2 --> */}
                    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/a78bfa/333?text=Real+Help" alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">Real Help</h3>
                        <p className="text-gray-600 text-sm truncate">Ayodeji Awosika</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.7</span>
                        </div>
                    </div>
                    {/* <!-- Category Book Card 3 --> */}
                    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/f97316/fff?text=Fact+of+Body" alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">The Fact of a Body</h3>
                        <p className="text-gray-600 text-sm truncate">Alex Marzano-Lesnevich</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.8</span>
                        </div>
                    </div>
                    {/* <!-- Category Book Card 4 --> */}
                    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/60a5fa/333?text=The+Room" alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">The Room</h3>
                        <p className="text-gray-600 text-sm truncate">Jonas Karlsson</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.6</span>
                        </div>
                    </div>
                    {/* <!-- Category Book Card 5 --> */}
                    <div className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                        <img src="https://placehold.co/120x180/fca5a5/333?text=Through+the..." alt="Book Cover" className="rounded-lg mb-3 mx-auto shadow-sm"/>
                        <h3 className="font-semibold text-gray-900 text-md truncate mb-1">Through the...</h3>
                        <p className="text-gray-600 text-sm truncate">Cate Emond</p>
                        <div className="flex items-center justify-center mt-2 text-yellow-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <span className="ml-1 text-gray-700 text-sm">4.5</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* <!-- Right Book Detail View (Fixed on larger screens) --> */}
        <div className="w-full lg:w-96 bg-blue-800 text-white p-6 rounded-xl shadow-xl flex-shrink-0 mt-8 lg:mt-0">
            <div className="flex justify-end mb-4">
                <button className="p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 4.36 6 6.93 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
                </button>
            </div>
            <div className="flex justify-center mb-6">
                <img src="https://placehold.co/200x300/a0e0ff/333?text=Company+of+One" alt="Company of One Book Cover" className="rounded-lg shadow-lg border-2 border-blue-500"/>
            </div>
            <h3 className="text-2xl font-bold mb-2">Company of One</h3>
            <p className="text-blue-200 text-lg mb-4">Paul Jarvis</p>
            <div className="flex items-center mb-6">
                <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                <span className="text-yellow-400 font-semibold text-xl">4.8</span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center mb-6">
                <div>
                    <p className="text-blue-300 text-sm">Pages</p>
                    <p className="font-bold text-lg">320</p>
                </div>
                <div>
                    <p className="text-blue-300 text-sm">Ratings</p>
                    <p className="font-bold text-lg">643</p>
                </div>
                <div>
                    <p className="text-blue-300 text-sm">Reviews</p>
                    <p className="font-bold text-lg">110</p>
                </div>
            </div>

            <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Company of One offers a refreshingly original business strategy that's focused on building a sustainable, fulfilling, and impactful business. Why? Because staying small provides one with the freedom to pursue more meaningful pleasures in life—and avoid the headaches that...
            </p>

            <button className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                Read Now
            </button>
        </div>
    </div>

   
</body>

        </React.Fragment>
    )
}

export default Index;