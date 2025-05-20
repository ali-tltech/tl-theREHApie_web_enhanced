import { create } from 'zustand';
import { faqsApi } from '../api/api';

const useFaqsStore = create((set) => ({
  // State
  faqs: [],
  loading: false,
  error: null,
  
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
  }
})); 

export default useFaqsStore;