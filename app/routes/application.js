import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let model = this.get('store').findAll('task');
        model.then((data) => {
           console.log("model got data =", data.get('content'));
        });
        return model;
    }
});
