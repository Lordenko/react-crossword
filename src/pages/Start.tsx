import { Link } from "react-router";

const Start = () => {
    return (
        <>
            <Link
                to="/game"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl
            hover:bg-blue-700 active:bg-blue-800 transition duration-200
            shadow-md hover:shadow-lg"
            >
                Start game
            </Link >
        </>

    );
}

export default Start;
