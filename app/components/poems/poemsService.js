import Poems from "../../models/poems.js";
import Poems1 from "../../../assets/poems/poems1.js";

let _state = {
  poems: {}
}

let _subscribers = {
  poems: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

const _ps1 = new Poems1()


//Public
export default class PoemsService {
  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Poems() {
    return _state.poems
  }

  getPoems() {
    let data = _ps1.poems1()
    _setState('poems', new Poems(data))
  }

}