import './Navbar.css';

const Navbar = ({ credit }) => {
    return (
        <div className='w-11/12 mx-auto border-b p-5'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                {/* Logo */}
                <div>
                    <img className='w-28' src="/assets/logo.png" alt="Logo" />
                </div>

                {/* Menu Items */}
                <div className='flex flex-col md:flex-row items-center gap-5 text-lg font-bold'>
                    <a className='hover:text-pink-700' href="#">Home</a>
                    <a className='hover:text-pink-700' href="#">About</a>
                    <a className='hover:text-pink-700' href="#">Teams</a>
                    <a className='hover:text-pink-700' href="#">Schedules</a>

                    {/* Credit section */}
                    <div className='flex items-center gap-2 mt-2 md:mt-0'>
                        <p>${credit} M</p>
                        <img className='w-6 h-6' src="/assets/coins.png" alt="Coins" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
