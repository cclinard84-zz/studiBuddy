import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('sign-up');
  this.route('sign-up-complete');
  this.route('sign-up-failure');
  this.route('class-list');
  this.route('create-group');
  this.route('create-group-success');
  this.route('create-group-failure');
  this.route('join-group');
  this.route('join-group-success');
  this.route('join-group-failure');
});

export default Router;
