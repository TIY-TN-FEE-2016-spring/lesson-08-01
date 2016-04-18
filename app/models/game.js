import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  awayTeam: belongsTo(`team`),
  homeTeam: belongsTo(`team`),

  homeScore: attr(`number`),
  awayScore: attr(`number`),
  date: attr(`date`),
});
