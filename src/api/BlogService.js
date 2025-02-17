const BASE_URL = 'https://jewelleryapp.onrender.com/blog';

export const getAllBlogs = async () => {
    try {
        const response = await fetch(`${BASE_URL}/blogs`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw new Error('Failed to fetch blogs');
    }
};

export const getBlogById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/blogs/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching blog:', error);
        throw new Error('Failed to fetch blog details');
    }
};
