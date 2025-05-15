import axiosInstance from "../axios/axiosInstance"

export const newsLetter = async(email)=>{
    const response = await axiosInstance.post('/newsletter/subscribe',{email:email})
    return response
}

export const contact = async(contactData)=>{
    const response = await axiosInstance.post('/enquiries/create-enquiry',contactData)
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

