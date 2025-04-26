import { useState } from 'react';
// import Available from '../Available/Available';
// import Selected from '../Selected/Selected';
import './AvailablePlayer.css';

const AvailablePlayer = ({ players, handleIsActiveState, isActive }) => {
    const [selectedPlayers, setSelectedPlayers] = useState([]); // new state

    // Function to add a player to selectedPlayers
    const handleSelectPlayer = (player) => {
        if (!selectedPlayers.find(p => p.playerId === player.playerId)) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    return (
        <div className='w-10/12 mx-auto'>
            {/* Top Bar with Title and Buttons */}
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>
                    {isActive.available ? "Available Players" : "Selected Players"}
                </h1>
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
            <div className='mt-5 w-11/12 mx-auto'>
                {isActive.available ? (
                    // Available Section
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {players.map(player => (
                            <div key={player.playerId} className="player-card p-4 border rounded-lg shadow-md text-center">
                                <img src={player.image} alt={player.name} className="w-full h-48 object-cover mb-4" />
                                <h3 className="text-lg font-semibold">{player.name}</h3>
                                <p>{player.country}</p>
                                <span className="block my-2">{player.role}</span>
                                <p><strong>Batting:</strong> {player.battingType}</p>
                                <p><strong>Bowling:</strong> {player.bowlingType}</p>
                                <p className="font-bold my-2">Price: {player.biddingPrice}</p>
                                <button
                                    onClick={() => handleSelectPlayer(player)}
                                    className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                                >
                                    Choose Player
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Selected Section
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {selectedPlayers.length > 0 ? (
                            selectedPlayers.map(player => (
                                <div key={player.playerId} className="player-card p-4 border rounded-lg shadow-md text-center">
                                    <img src={player.image} alt={player.name} className="w-full h-48 object-cover mb-4" />
                                    <h3 className="text-lg font-semibold">{player.name}</h3>
                                    <p>{player.country}</p>
                                    <span className="block my-2">{player.role}</span>
                                    <p><strong>Batting:</strong> {player.battingType}</p>
                                    <p><strong>Bowling:</strong> {player.bowlingType}</p>
                                    <p className="font-bold my-2">Price: {player.biddingPrice}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-white text-2xl font-bold ">No players selected yet.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AvailablePlayer;