function Navbar({ update }) {

    return (

	<nav className="flex justify-between">

	    <ul className="flex flex-row py-4 px-2 space-x-10 text-gray-600">
		<li className="pr-5" onClick={e => update(e.target.textContent)}>Intro</li>
		<li className="pr-5" onClick={e => update(e.target.textContent)}>Experience</li>
		<li className="pr-5" onClick={e => update(e.target.textContent)}>Skills</li>

	    </ul>


	</nav>


    );
}

export default Navbar;
