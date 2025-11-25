import useResultsLogic from "../hooks/useResultsLogic"


const Results = () => {
    const resultsLogic = useResultsLogic()

    return (
        <div className="w-full max-w-md mx-auto mt-8 space-y-3">
            {
                resultsLogic.name && resultsLogic.renderSoloPlayer(resultsLogic.name) ||
                resultsLogic.players.length >= 1 && resultsLogic.renderMultiplePlayers() ||
                resultsLogic.players.length <= 0 && resultsLogic.renderEmptyPlayerList()
            }
        </div>
    );
}

export default Results;
