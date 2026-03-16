import API from "./axios";

export const getDeals = () => API.get("/deals");

export const createDeal = (data: any) =>
  API.post("/deals", data);

export const updateDeal = (id: string, data: any) =>
  API.put(`/deals/${id}`, data);

export const deleteDeal = (id: string) =>
  API.delete(`/deals/${id}`);