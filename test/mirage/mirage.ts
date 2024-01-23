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

      this.get('lists', (schema, request) => {
        const updatedAsOf = request.queryParams.updatedAsOf;

        if (updatedAsOf) {
          return listsUpdate;
        } else {
          return lists;
        }
      });
    },
  });
};
