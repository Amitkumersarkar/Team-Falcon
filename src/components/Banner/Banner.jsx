import './Banner.css';
const Banner = ({ handleAddFreeCredit }) => {
    return (
        <div className='w-11/12 mx-auto p-7 font-bold'>

            <div className='bgg h1'>
                <img className='items-center' src="../../../public/assets/banner-main.png" alt="" />
                <div className='text-5xl font-semibold text-white pt-5'>
                    <h2>Assemble Your Ultimate Team Falcon Cricket Team</h2>
                </div>
                <p className='text-gray-300 text-3xl p-5'>Beyond Boundaries Beyond Limits</p>
                <button className="font-bold mt-2 brr" onClick={handleAddFreeCredit}>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;