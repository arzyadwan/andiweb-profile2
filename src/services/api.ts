import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_API_URL,
});

export const getProjects = async (page = 1, pageSize = 5, tagId: number | null = null, searchTerm = '') => {
  try {
    let filters = '';
    // Filter berdasarkan tag jika ada
    if (tagId) {
      filters += `&filters[tags][id][$eq]=${tagId}`;
    }
    // Filter berdasarkan judul jika ada kata kunci pencarian
    if (searchTerm) {
      filters += `&filters[title][$containsi]=${searchTerm}`;
    }

    const response = await api.get(
      `/projects?populate=*&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}${filters}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { data: [], meta: { pagination: { page: 1, pageCount: 1 } } };
  }
};

export const getTags = async () => {
  try {
    const response = await api.get('/tags');
    return response.data.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
    return [];
  }
};

export const getProjectBySlug = async (slug: string) => {
  try {
    const response = await api.get(`/projects?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0]; 
  } catch (error) {
    console.error(`Error fetching project with slug ${slug}:`, error);
    return null;
  }
};