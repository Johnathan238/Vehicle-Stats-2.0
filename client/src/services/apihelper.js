import api from './apiconfig'

export const getVehicles = async () => {
  const response = await api.get('/manufacturers/1/models/1/vehicles')
  return response.data
}

export const addVehicles = async ( modelInfo, manufacturer_id, model_id) => {
  const response = await api.post(`/manufacturers/${manufacturer_id}/models/${model_id}/vehicles/`, { vehicle: modelInfo})
  return response.data
}

export const putVehicle = async (id, vehicleData) => {
  const response = await api.put(`/vehicles/${id}`, { vehicle: vehicleData })
  return response.data;
}

export const showVehicle = async (id) => {
  const response = await api.get(`/manufacturers/1/models/1/vehicles/${id}`)
  return response.data;
}

export const editVehicle = async (  id, modelInfo) => {
  const response = await api.put(`/manufacturers/1/models/1/vehicles/${id}`, { vehicle: modelInfo })
  return response.data
}

export const deleteVehicles = async (id) => {
  const response = await api.delete(`/manufacturers/1/models/1/vehicles/${id}`)
  return response
}

export const getModels = async () => {
  const response = await api.get('/manufacturers/1/models')
  return response.data
}

export const getManufacturers = async () => {
  const response = await api.get('/manufacturers')
  return response.data
}