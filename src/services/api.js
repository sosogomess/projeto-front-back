import axios from 'axios';

// Base URL da sua API - usa variável de ambiente ou fallback
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Criar instância do axios com configurações padrão
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 segundos de timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para tratar erros globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na API:', error);
    return Promise.reject(error);
  }
);

// Serviços para Hair Tones
export const hairTonesAPI = {
  // Buscar todas as cores
  getAll: async () => {
    try {
      const response = await api.get('/hairtones');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar cores:', error);
      throw error;
    }
  },

  // Buscar cor por ID
  getById: async (id) => {
    try {
      const response = await api.get(`/hairtones/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar cor ${id}:`, error);
      throw error;
    }
  },

  // Buscar cores por categoria
  getByCategory: async (category) => {
    try {
      const response = await api.get(`/hairtones?category=${category}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar cores da categoria ${category}:`, error);
      throw error;
    }
  },

  // Buscar cores por nome
  searchByName: async (name) => {
    try {
      const response = await api.get(`/hairtones?search=${name}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar cores com nome ${name}:`, error);
      throw error;
    }
  },

  // Criar nova cor (se sua API suportar)
  create: async (colorData) => {
    try {
      const response = await api.post('/hairtones', colorData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar cor:', error);
      throw error;
    }
  },

  // Atualizar cor (se sua API suportar)
  update: async (id, colorData) => {
    try {
      const response = await api.put(`/hairtones/${id}`, colorData);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar cor ${id}:`, error);
      throw error;
    }
  },

  // Deletar cor (se sua API suportar)
  delete: async (id) => {
    try {
      const response = await api.delete(`/hairtones/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao deletar cor ${id}:`, error);
      throw error;
    }
  }
};

export default api;