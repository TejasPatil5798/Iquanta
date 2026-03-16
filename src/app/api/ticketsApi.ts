import API from "./axios";

export const getTickets = () => API.get("/tickets");

export const createTicket = (data: any) =>
  API.post("/tickets", data);

export const updateTicket = (id: string, data: any) =>
  API.put(`/tickets/${id}`, data);

export const deleteTicket = (id: string) =>
  API.delete(`/tickets/${id}`);