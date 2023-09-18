import PropTypes from 'prop-types'

const SelectedPlayers = ({select, salary}) => {


  return (
        <div className="w-1/3">
         <div>
         <h1 className="text-3xl text-center mt-5 font-medium">Players Added: {select.length}</h1>
         <p className="font-bold">Total salary: {salary}</p>
         </div>
          <div className="mt-5">
            {/* <h4 className="font-bold">Total salary {player.salary}: </h4> */}
          {
          select.map((player, idx) => 
          <div key={idx}>
            <p className="text-center text-xl bg-blue-500 text-white font-medium mb-2">{player.name}</p>
            </div>)
          }
          </div>
        </div>
      
    );
};

SelectedPlayers.propTypes = {
  select: PropTypes.array.isRequired,
  salary: PropTypes.number.isRequired
}
export default SelectedPlayers;