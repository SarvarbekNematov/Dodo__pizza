import axios from 'axios';

interface UserInfo {
  id?: string;
  name?: string;
}

// Asosiy request instance yaratish
export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DODO_LOGIN_URL,
});

// User ma'lumotlarini localStorage-ga saqlash
export const saveUserInfo = (userInfo: UserInfo) => {
  localStorage.setItem('user_info', JSON.stringify(userInfo));
};

// User ma'lumotlarini localStorage-dan olish
export const getUserInfo = (): UserInfo | null => {
  const userInfo = localStorage.getItem('user_info');
  return userInfo ? JSON.parse(userInfo) : null;
};

// Request interceptor - har bir so'rovga token qo'shish uchun
request.interceptors.request.use((config) => {
  // Avval localStorage dan token ni olish
  const token = localStorage.getItem('access_token') || localStorage.getItem('accesToken');
  
  if (token) {
    // Token topilsa, uni headers ga qo'shish
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor - xatoliklarni handle qilish uchun
request.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token muddati tugagan yoki noto'g'ri
      localStorage.removeItem('access_token');
      localStorage.removeItem('accesToken');
      localStorage.removeItem('user_info');
    }
    return Promise.reject(error);
  }
); 