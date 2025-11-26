import GameOverPortal from '../components/Game/Portal/GameOverPortal/__GameOverPortal'
import PreStartPortal from '../components/Game/Portal/PreStartPortal/__PreStartPortal'
import Timer from '../components/Other/Timer'
import ClueSection from '../components/Game/Clue/_ClueSection'
import CrosswordBoard from '../components/Game/CrosswordBoard'
import PlayerInfo from '../components/Game/PlayerInfo'

import useGameLogic from '../hooks/useGameLogic'

const Game = () => {
    const GameLogic = useGameLogic()

    return (
        <>
            <PreStartPortal currentPlayerId={GameLogic.currentPlayerId} />

            <PlayerInfo
                username={GameLogic.username}
                difficulty={GameLogic.difficulty}
                score={GameLogic.score}
            />

            <Timer
                timer={GameLogic.timer}
            />

            <CrosswordBoard
                activeElementIndex={GameLogic.activeElementIndex}
                setActiveElementIndex={GameLogic.setActiveElementIndex}
                inputWords={GameLogic.inputWords}
                setInputWord={GameLogic.setInputWord}
                crosswordWords={GameLogic.crossword.grid}
            />

            <ClueSection
                clueList={GameLogic.crossword.clue}
            />

            <GameOverPortal
                difficulty={GameLogic.difficulty}
                getNextLevelOfDifficulty={GameLogic.getNextLevelOfDifficulty}
                crosswordStatus={GameLogic.crosswordStatus}
                setCrosswordStatus={GameLogic.setCrosswordStatus}

                clearInputWords={GameLogic.clearInputWords}

                score={GameLogic.score}
                timer={GameLogic.timer}
                calcScore={GameLogic.calcScore}
                resetGame={GameLogic.resetGame}

                currentPlayerId={GameLogic.currentPlayerId}
                updatePlayerDifficulty={GameLogic.updatePlayerDifficulty}
                updatePlayerScore={GameLogic.updatePlayerScore}
            />
        </>
    );
}

export default Game;
