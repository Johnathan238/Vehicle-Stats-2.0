import api from './apiconfig'

export const getVehicles = async () => {
  const response = await api.get('/manufacturers/1/models/1/vehicles')
  return response.data
}

export const addVehicles = async (id, modelInfo, manufacturer_id, model_id) => {
  const response = await api.post(`/manufacturers/${manufacturer_id}/models/${model_id}/vehicles/${id}`, { model: modelInfo})
  return response.data
}

export const editVehicle = async (id, modelInfo) => {
  const response = await api.put(`/manufacturers/1/models/1/vehicles/${id}`, { model: modelInfo })
  return response.data
}

export const deleteVehicles = async (id) => {
  const response = await api.delete(`/manufacturers/1/models/1/vehicles/${id}`)
  return response
}