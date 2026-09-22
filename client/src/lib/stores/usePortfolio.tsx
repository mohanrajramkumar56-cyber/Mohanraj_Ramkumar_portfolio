import { create } from "zustand";
import { useTheme } from "./useTheme";

type ModalType = "projects" | "certificates" | "about" | "skills" | "contact" | "funfacts" | "resume" | "hobbies" | null;

interface PortfolioState {
  activeModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
}

export const usePortfolio = create<PortfolioState>((set) => ({
  activeModal: null,
  
  openModal: (modal) => {
    set({ activeModal: modal });
  },
  
  closeModal: () => {
    set({ activeModal: null });
  }
}));
