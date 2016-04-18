import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  awayTeam: belongsTo(`team`, { inverse: `awayGames` }),
  homeTeam: belongsTo(`team`, { inverse: `homeGames` }),

  homeScore: attr(`number`),
  awayScore: attr(`number`),
  date: attr(),
});
