import api from './api';

// ================================
// SERVIÇOS PARA CORES DE CABELO
// ================================

export const colorService = {
  // Buscar todas as cores
  getAllColors: async () => {
    try {
      const response = await api.get('/colors');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar cores:', error);
      throw error;
    }
  },

  // Buscar cor por ID
  getColorById: async (id) => {
    try {
      const response = await api.get(`/colors/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar cor ${id}:`, error);
      throw error;
    }
  },

  // Buscar cores por categoria
  getColorsByCategory: async (category) => {
    try {
      const response = await api.get(`/colors?category=${category}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar cores da categoria ${category}:`, error);
      throw error;
    }
  },

  // Criar nova cor (admin)
  createColor: async (colorData) => {
    try {
      const response = await api.post('/colors', colorData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar cor:', error);
      throw error;
    }
  },

  // Atualizar cor (admin)
  updateColor: async (id, colorData) => {
    try {
      const response = await api.put(`/colors/${id}`, colorData);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar cor ${id}:`, error);
      throw error;
    }
  },

  // Deletar cor (admin)
  deleteColor: async (id) => {
    try {
      const response = await api.delete(`/colors/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao deletar cor ${id}:`, error);
      throw error;
    }
  },

  // Buscar cores com filtros
  searchColors: async (filters) => {
    try {
      const params = new URLSearchParams(filters).toString();
      const response = await api.get(`/colors/search?${params}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar cores com filtros:', error);
      throw error;
    }
  }
};

// ================================
// SERVIÇOS PARA TÉCNICAS
// ================================

export const techniqueService = {
  // Buscar todas as técnicas
  getAllTechniques: async () => {
    try {
      const response = await api.get('/techniques');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar técnicas:', error);
      throw error;
    }
  },

  // Buscar técnica por ID
  getTechniqueById: async (id) => {
    try {
      const response = await api.get(`/techniques/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar técnica ${id}:`, error);
      throw error;
    }
  }
};

// ================================
// SERVIÇOS PARA FAVORITOS
// ================================

export const favoriteService = {
  // Buscar favoritos do usuário
  getUserFavorites: async () => {
    try {
      const response = await api.get('/favorites');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar favoritos:', error);
      throw error;
    }
  },

  // Adicionar aos favoritos
  addToFavorites: async (itemId, itemType) => {
    try {
      const response = await api.post('/favorites', { itemId, itemType });
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar favorito:', error);
      throw error;
    }
  },

  // Remover dos favoritos
  removeFromFavorites: async (itemId, itemType) => {
    try {
      const response = await api.delete(`/favorites/${itemId}?type=${itemType}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao remover favorito:', error);
      throw error;
    }
  }
};

// ================================
// SERVIÇOS PARA USUÁRIOS
// ================================

export const userService = {
  // Fazer login
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      
      // Salvar token se o login for bem-sucedido
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
      }
      
      return response.data;
    } catch (error) {
      console.error('Erro no login:', error);
      throw error;
    }
  },

  // Fazer logout
  logout: async () => {
    try {
      await api.post('/auth/logout');
      localStorage.removeItem('authToken');
    } catch (error) {
      console.error('Erro no logout:', error);
      localStorage.removeItem('authToken');
    }
  },

  // Registrar usuário
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Erro no registro:', error);
      throw error;
    }
  },

  // Buscar perfil do usuário
  getProfile: async () => {
    try {
      const response = await api.get('/auth/profile');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar perfil:', error);
      throw error;
    }
  }
};

export default { colorService, techniqueService, favoriteService, userService };
