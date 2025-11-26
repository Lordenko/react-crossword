import { ErrorLayaoutProps } from "../../types/props";

const ErrorLayaout = (props: ErrorLayaoutProps) => {
    return (
        <div className="relative h-svh bg-black overflow-hidden font-montserrat text-white text-[18px] select-none">
            <div className="absolute top-1/2 left-1/2 font-black text-[500px] -translate-x-1/2 translate-y-[1500px] animate-error">
                {props.code}
            </div>

            <div className="flex justify-center items-end h-screen max-w-[1920px] mx-auto animate-cat">
                <img
                    src={require("../../assets/cat.png")}
                    alt="cat"
                    className="flex w-1/2 h-1/2 object-cover md:w-3/5 md:h-3/5 sm:w-2/3 sm:h-2/3 xs:w-3/4 xs:h-3/4 xxs:w-4/5 xxs:h-4/5"
                />
                <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 font-black text-[40px] md:text-[32px] sm:text-[28px] xs:text-[24px] xxs:text-[20px]">
                    ОКАК
                </h1>
            </div>

            <style>{`
                @keyframes catAnim {
                    0% { transform: translateY(50%); }
                    100% { transform: translateY(0); }
                }
                
                @keyframes errorAnim {
                    100% { transform: translate(-50%, -70%); }
                }
                .animate-cat { animation: catAnim 1.5s ease forwards; }
                .animate-error { animation: errorAnim 1.5s ease forwards; }

                @media (max-width: 1024px) {
                    .animate-error { font-size: 350px; }
                }
                
                @media (max-width: 768px) {
                    .animate-error { font-size: 250px; }
                }
                
                @media (max-width: 480px) {
                    .animate-error { font-size: 180px; }
                }
                
                @media (max-width: 320px) {
                    .animate-error { font-size: 140px; }
                }
                
                @media (max-height: 600px) {
                    .animate-error { font-size: 200px; }
                }

                @media (max-height: 400px) {
                    .animate-error { font-size: 120px; }
                }
            `}</style>
        </div>
    );
}

export default ErrorLayaout