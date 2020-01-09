import { request } from '../requests.config';
import { requestRoutes } from '../routes.requests';

export interface createLeadDto {
  title: string;
  city: string;
  tags?: string[] | [] | null;
  startDate?: Date | null;
  endDate?: Date | null;
}

export const fetchAllLeads = async () => {
  const response = await request.get(requestRoutes.lead.fetchAll({}));
  console.log('response : ', response);
};

export const createNewLead = async (data: createLeadDto) => {
  const response = await request.post(requestRoutes.lead.create({}), data);
  console.log('create new lead : ', response);
  return response;
};
