import { create } from "zustand";
import { persist } from 'zustand/middleware';

/**
 * Interface defining the state and actions for the cookie consent popup.
 */
interface UseCookiePopupState {
    /**
     * The current status of the user's cookie consent.
     * - `null`: The user has not made a choice yet.
     * - `true`: The user accepted the cookies.
     * - `false`: The user declined the cookies.
     */
    consentStatus: null | boolean,
    /**
     * Updates the user's cookie consent status.
     * @param status - The boolean value representing the user's choice.
     */
    setStatus: (status: boolean) => void
}

/**
 * A Zustand store hook that manages and persists the user's cookie consent preference.
 * The state is automatically saved to local storage under the key 'consent' using Zustand's `persist` middleware.
 */
export const useCookiePopup = create<UseCookiePopupState>()(
    persist(
        (set) => ({
            consentStatus: null,
            setStatus: (status) => set({ consentStatus: status })
        }),
        { name: 'consent' }
    )
)