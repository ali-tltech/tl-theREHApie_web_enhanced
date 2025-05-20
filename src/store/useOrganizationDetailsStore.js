import { create } from 'zustand';
import { OrganizationApi } from '../api/api';


const useOrganizationStore = create((set) => ({
  // State
  organizationDetails: null,
  loading: false,
  error: null,

  // Actions
  fetchOrganizationDetails: async () => {
    try {
      set({ loading: true, error: null });
      const response = await OrganizationApi.getAllOrganizationDetails();
      set({ 
        organizationDetails: response.data.data || null, 
        loading: false 
      });
    } catch (error) {
      console.error("Error Fetching Organization Details:", error);
      set({ 
        error: error.response?.data?.message || "Failed to Fetch Organization Details", 
        loading: false 
      });
    }
  },

  // Reset state
  reset: () => {
    set({ organizationDetails: null, loading: false, error: null });
  }
}));

export default useOrganizationStore;