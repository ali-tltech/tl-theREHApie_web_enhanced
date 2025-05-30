import { create } from 'zustand';
import { faqsApi, HomefaqsApi } from '../api/api';

const useFaqsStore = create((set) => ({
  // State
  faqs: [],
  homeFaqs: [],
  loading: false,
  homeLoading: false,
  error: null,
  homeError: null,
  
  // Actions
  fetchFaqs: async () => {
    set({ loading: true, error: null });
    
    try {
      const response = await faqsApi.getAllfaqs();
      
      const sortedFaqs = response.data.data.sort((a, b) => a.order - b.order);
      
      set({ 
        faqs: sortedFaqs,
        loading: false 
      });
      
      return sortedFaqs;
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      set({ 
        error: error.message || 'Failed to fetch FAQs',
        loading: false 
      });
      return [];
    }
  },

  fetchHomeFaqs: async () => {
    set({ homeLoading: true, homeError: null });
    
    try {
      const response = await HomefaqsApi.getAllfaqs();
      
      const sortedHomeFaqs = response.data.data.sort((a, b) => a.order - b.order);
      
      set({ 
        homeFaqs: sortedHomeFaqs,
        homeLoading: false 
      });
      
      return sortedHomeFaqs;
    } catch (error) {
      console.error('Error fetching Home FAQs:', error);
      set({ 
        homeError: error.message || 'Failed to fetch Home FAQs',
        homeLoading: false 
      });
      return [];
    }
  }
})); 

export default useFaqsStore;