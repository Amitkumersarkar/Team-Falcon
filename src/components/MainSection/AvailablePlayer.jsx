import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import './AvailablePlayer.css';
const AvailablePlayer = ({ handleIsActiveState, isActive }) => {
    return (
        <div className='w-10/12 mx-auto'>
            {/* Top Bar with Title and Buttons */}
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Available Players</h1>
                <div className='flex p-5 gap-5'>
                    <div
                        onClick={() => handleIsActiveState("available")}
                        className={`${isActive.available ? "btn active" : "btn"} font-semibold text-xl`}
                    >
                        Available
                    </div>
                    <div
                        onClick={() => handleIsActiveState("selected")}
                        className={`${isActive.available ? "btn" : "btn active"} font-semibold text-xl`}
                    >
                        Selected
                    </div>
                </div>
            </div>

            {/* Player List Section */}
            <div className='mt-5'>
                {isActive.available ? <Available /> : <Selected />}
            </div>
        </div>
    );
};

export default AvailablePlayer;
