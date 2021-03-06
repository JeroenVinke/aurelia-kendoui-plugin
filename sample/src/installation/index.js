import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Index {

  constructor(router) {
    this.router = router;
  }

  activate(params) {
    this.params = params;
  }

  attached() {
    let type = this.params.type;

    this.tabstrip.widget.select(this[type]);
  }

  tabChanged(e) {
    this.router.navigateToRoute('installation', {
      type: $(e.item).data('type')
    });
  }
}
