import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface UseCookiePopupState {
    consentStatus: null | boolean,
    setStatus: (status: boolean) => void
}

export const useCookiePopup = create<UseCookiePopupState>()(
    persist(
        (set) => ({
            consentStatus: null,
            setStatus: (status) => set({ consentStatus: status })
        }),
        { name: 'consent' }
    )
)


