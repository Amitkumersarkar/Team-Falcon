import Available from '../AvailableSection/Available';
import Selected from '../SelectedSection/Selected';
import './AvailablePlayer.css';
const AvailablePlayer = () => {
    return (
        <div className='flex justify-between w-11/12 mx-auto '>
            <h1 className='text-2xl font-bold'> Available Players </h1>
            <div className='flex gap-6'>
                <Available></Available>
                <div>
                    <Selected></Selected>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayer;