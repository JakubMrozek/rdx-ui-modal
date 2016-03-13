# rdx-ui-modal

Modal window for react redux app.

## Install

```
npm install rdx-ui-modal
```

## Usage

```javascript
import {Modal, Link, reducer} from 'rdx-ui-modal'

//1. import default styles
import from 'rdx-ui-modal/styles/modal.scss'

//2. create component
<div>
  <Modal name='componentId' title='My title'>
    Lorem ipsum set dolorem
  </Modal>

  <Link name='componentId'>Open window</Link>
</div>

//3. register reducer
import {combineReducers} from 'redux'
import {reducer as modal} from 'rdx-ui-modal'

...
const appReducer = combineReducers({
  modal
})

...

```

## License

MIT
