import PropTypes from 'prop-types'

const Player = ({player, handleTeamSelect}) => {
    const {name, img, age, country, salary, jersey_no} = player;
  
    return (
           <div className='text-center border-2 border-red-300'>
            <div className='mt-2 mb-4'>
            <img src={img} className='rounded-full w-20 lg:w-1/2 mx-auto ' alt="player image" />
            </div>
           <div className='mb-3 text-xl font-semibold'>
           <p>Name: {name}</p>
           <p>Age: {age}</p>
           <p>Country: {country}</p>
           <p>Salary: {salary}</p>
           <p>Jersey no: {jersey_no}</p>
           </div>
           <button onClick={()=>handleTeamSelect(player)} className='btn px-10 py-3 bg-blue-700 text-white rounded-full mb-2'>Select</button>
           </div>
    );
};


Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleTeamSelect: PropTypes.func.isRequired

}
export default Player;