import PoemsService from "./poemsService.js";

const _ps = new PoemsService()

function drawPoems() {
  let template = _ps.Poems.poemsTemplate()
  window.alert(template)
  document.querySelector('#poems-cards').innerHTML = template
}

//Public
export default class PoemsController {
  constructor() {
    _ps.addSubscriber('poems', drawPoems) 
    _ps.getPoems1()
    // let page = window.location.href || window.location
    // if (page.includes("/page2.html")) {
    //   _ps.getPoems2()
    // }
    // else {
    //   _ps.getPoems1()
    // }
  }
}