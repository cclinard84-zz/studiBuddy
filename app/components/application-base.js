import Component from '@ember/component';

export default Component.extend({
  actions: {
    toggleSidebar() {
      this.$("#base-sidebar").sidebar("toggle");
    },
    clickedLink(){
      this.$("#base-sidebar").sidebar("hide");
    },
  }
});
