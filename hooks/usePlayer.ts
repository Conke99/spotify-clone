import { create } from "zustand";

interface PlayerStore {
    ids: string[];
    aciveId?: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
    ids: [],
    aciveId: undefined,
    setId: (id:string) => set({aciveId: id}),
    setIds: (ids: string[]) => set({ids: ids}),
    reset: () => set({ids: [], aciveId: undefined})
}))

export default usePlayer;