import { generatePath } from './requests.config';
import { routeTemplates } from './templates.requests';

export const requestRoutes = {
  lead: {
    create: ({}) => generatePath(routeTemplates.lead.create, {}),
    fetchAll: ({}) => generatePath(routeTemplates.lead.fetchAll, {})
  }
};
