import PoemsService from "./poemsService.js";

const _ps = new PoemsService()

function drawPoems() {
  let template = _ps.Poems.poemsTemplate()
  document.querySelector('#poems-cards').innerHTML = template
}

//Public
export default class PoemsController {
  constructor() {
    _ps.addSubscriber('poems', drawPoems)
    _ps.getPoems()
  }

}