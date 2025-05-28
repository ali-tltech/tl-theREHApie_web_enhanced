import { create } from 'zustand';
import { TestimonialApi } from '../api/api';

const useTestimonialStore = create((set) => ({
  // State
  testimonials: [],
  loading: false,
  error: null,
  
  // Actions
  fetchTestimonials: async () => {
    set({ loading: true, error: null });
    
    try {
      const response = await TestimonialApi.getAllTestimonials();
      console.log(response.data.data);
      set({ 
        testimonials: response.data.data,
        loading: false 
      });
      
      return response.data.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      set({ 
        error: error.message || 'Failed to fetch testimonials',
        loading: false 
      });
      return [];
    }
  }
})); 

export default useTestimonialStore;