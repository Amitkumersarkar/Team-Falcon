import './Banner.css';
const Banner = ({ handleAddFreeCredit }) => {
    return (
        <div className='w-11/12 mx-auto p-7 font-bold'>

            <div className='bgg hh'>
                <img className='items-center' src="../../../public/assets/banner-main.png" alt="" />

                <div className='pt-5 text-center'>
                    <h2 className='text-2xl sm:text-3xl md:text-5xl font-semibold text-white'>
                        Assemble Your Ultimate Team Falcon Cricket Team
                    </h2>
                    <p className='text-lg sm:text-xl md:text-3xl text-gray-300 p-5'>
                        Beyond Boundaries Beyond Limits
                    </p>
                </div>
                <button
                    className="mt-3 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg text-lg font-semibold"
                    onClick={handleAddFreeCredit}
                >
                    Claim Free Credit
                </button>
            </div>
        </div>
    );
};

export default Banner;
