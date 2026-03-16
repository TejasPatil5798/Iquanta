import API from "./axios";

export const getContacts = () => API.get("/contacts");

export const createContact = (data: any) =>
  API.post("/contacts", data);

export const updateContact = (id: string, data: any) =>
  API.put(`/contacts/${id}`, data);

export const deleteContact = (id: string) =>
  API.delete(`/contacts/${id}`);