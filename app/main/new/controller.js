import Ember from 'ember';

export default Ember.Controller.extend({
  saveTeam(attrs) {
    const team = this.store.createRecord(`team`, attrs);

    team.save()
      .then(() => {
        this.transitionToRoute(`main.schedule`, team);
      });
  },
});
