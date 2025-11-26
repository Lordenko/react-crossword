import { ClueProps } from "../../../types"

import HorisontalClue from "./HorisontalClue"
import VerticalClue from "./VerticalClue"

const ClueSection = (props: ClueProps) => {
    return (
        <div className="mt-8 w-80 sm:w-96 mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <HorisontalClue clueList={props.clueList.Horizontal} />
                <VerticalClue clueList={props.clueList.Vertical} />
            </div>
        </div>
    )
}

export default ClueSection