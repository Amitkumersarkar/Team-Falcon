import './Navbar.css';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto border-b-1 p-5'>
            <div>
                <img src="../../../public/assets/logo.png" alt="" />
            </div>
            <div className='flex justify-around gap-5 text-xl font-bold '>
                <a className='hover:text-pink-700' href="">Home</a>
                <a className='hover:text-pink-700' href="">About</a>
                <a className='hover:text-pink-700' href="">Teams</a>
                <a className='hover:text-pink-700' href="">Schedules</a>
                <div className='flex gap-5'>
                    <p >$0 M</p>
                    <img className='w-6 h-6' src="../../../public/assets/coins.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Navbar;