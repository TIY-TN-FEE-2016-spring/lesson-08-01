import Ember from 'ember';

export default Ember.Controller.extend({
  newGame: {
  },

  setHomeTeam(team) {
    this.set(`newGame.homeTeam`, team);
  },

  setAwayTeam(team) {
    this.set(`newGame.awayTeam`, team);
  },

  saveGame(attrs) {
    const game = this.store.createRecord(`game`, attrs);

    game.save().then(() => {
      this.transitionToRoute(`main.index`);
    });
  },
});
