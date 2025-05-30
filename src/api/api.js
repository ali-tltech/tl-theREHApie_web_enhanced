import axiosInstance from "../axios/axiosInstance"

export const newsLetter = async(email)=>{
    const response = await axiosInstance.post('/newsletter/subscribe',{email:email})
    return response
}

export const contact = async(contactData)=>{
    const response = await axiosInstance.post('/enquiries/create-enquiry',contactData)
    return response
}

export const blog =async()=>{
  const response = await axiosInstance.get("/blog/get-all-blogs")  
  return response
}
export const blogById =async(id)=>{  
  const response = await axiosInstance.get(`/blog/get-blog/${id}`)  
  return response
}
export const termsAndConditions =async()=>{  
  const response = await axiosInstance.get(`/document/get-terms`)  
  return response
}
export const privacyPolicy =async()=>{  
  const response = await axiosInstance.get(`/document/get-privacy`)  
  return response
}
export const seo =async(pageTitle)=>{  
  const response = await axiosInstance.get(`/seo/get-seo/${pageTitle}`)  
  return response
}
export const SocialApi = {
    getAllSocials: () => axiosInstance.get("/social/get-social"),
  };

 
export const OrganizationApi = {
    getAllOrganizationDetails: () => axiosInstance.get("/organization/get-details"),
  };


export const faqsApi = {
    getAllfaqs: () => axiosInstance.get("/faqs/get-faqs"),
  };

export const TestimonialApi = {
    getAllTestimonials: () => axiosInstance.get("/testimonial/getAll-testimonials"),
  };


export const getAllServices =async()=>{
  const response = await axiosInstance.get("/service/get-all-services")  
  return response
}
export const serviceByTitle =async(title)=>{  
  const response = await axiosInstance.get(`/service/get-service-by-title/${title}`)  
  return response
}