import { createServer, Response } from 'miragejs';
import lists from '../data/lists.json';
import listsUpdate from '../data/lists-update.json'
import listDetailsRefreshed from '../data/listDetails.refreshed.json';
import entityTypeDetails from '../data/entityTypeDetails.json';
import exportStarted from '../data/exportStarted.json';
import entityTypes from '../data/entityTypes.json';

interface IParams {
  urlPrefix?: string;
  environment?: string;
}
export const startMirage = ({
  urlPrefix = 'https://test.c',
  environment = 'test'
}: IParams) => {
  return createServer({
    environment,

    routes() {
      this.urlPrefix = urlPrefix;
      this.namespace = '';

      this.post('workflows/import', () => new Response(201, { id: 'd8b47696-4903-47f7-aeab-76c0f48616f4' }));
    },
  });
};
