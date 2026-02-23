import CookieConsent from "react-cookie-consent";
import { useCookiePopup } from "../../states/CookiePopupLogicState";

const CookiePopup = () => {
    const { setStatus } = useCookiePopup()

    return (
        <CookieConsent
            location="bottom"
            buttonText="Прийняти всі"
            declineButtonText="Тільки необхідні"
            enableDeclineButton
            cookieName="crossword-game-consent"
            style={{ background: "#2B373B", fontSize: "14px" }}
            buttonStyle={{ background: "#4e944f", color: "#fff", borderRadius: "5px" }}
            declineButtonStyle={{ background: "#e1e1e1", color: "#000", borderRadius: "5px" }}
            expires={150}
            onAccept={() => {
                setStatus(true)
            }}
            onDecline={() => {
                setStatus(false)
            }}
        >
            Цей сайт може використовує файли cookie.
            При відмові - ви не зможете продовжити.
        </CookieConsent>
    );
};

export default CookiePopup;