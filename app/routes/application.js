import Ember from 'ember'
import Elm from 'elm-test/elm-modules'

export default Ember.Route.extend({
  setupController(controller, model) {
    controller.set('Elm', Elm)
  }
});
