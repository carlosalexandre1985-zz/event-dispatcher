export class EventDispatcher {
  constructor() {
    var eventTarget = document.createDocumentFragment();

    ["addEventListener", "dispatchEvent", "removeEventListener"].map(function(method){
      this[method] = eventTarget[method].bind(eventTarget);
    }.bind(this));
  }
}
