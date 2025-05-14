import { create } from 'zustand';
import { OrganizationApi } from '../api/api';

// Create a Zustand store for organization details
const useOrganizationStore = create((set) => ({
  // State
  organizationDetails: null, // Changed from [] to null since it's an object, not an array
  loading: false,
  error: null,

  // Actions
  fetchOrganizationDetails: async () => {
    try {
      set({ loading: true, error: null });
      const response = await OrganizationApi.getAllOrganizationDetails();
      console.log(response,"orggg res");
      // Store the entire object directly, no need to use response.data.data || []
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