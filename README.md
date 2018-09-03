# event-dispatcher

EventDispatcher class was created in order to be extended. It enables the **addEventListener**,  ** removeEventListener** and **dispatchEvent** methods in your class.

## Example
````javascript
import { EventDispatcher } from './EventDispatcher';

export class Controller extends EventDispatcher {
	remoteMethod() {
		this.dispatchEvent(new CustomEvent("beforeRemoteCall");
		
		Rest.post(url, callback(data) {
				this.dispatchEvent(new CustomEvent("afterRemoteCall", {detail: data});  
		 });
	}
}
````

### Instalation

```bash
npm install --save event-dispatcher
```
