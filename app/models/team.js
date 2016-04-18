import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  city: attr(),

  awayGames: hasMany(`game`, { inverse: `awayTeam` }),
  homeGames: hasMany(`game`, { inverse: `homeTeam` }),
});
