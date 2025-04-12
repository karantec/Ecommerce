import { create } from "zustand";

export const userStore = create((set) => ({
  fullName: null,
  email: null,
  phone: null,
  localtion: null,
  profileImage: null,

  setProfileData: (profileData) => set({ ...profileData }),
}));