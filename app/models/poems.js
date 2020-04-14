export default class Poems {
  constructor(data) {
    this.poemsArray = data;
  }

  poemsTemplate() {
    let template = ""
    for (let i = 0; i < this.poemsArray.length; i++) {
      template += `
      <div class="card border-secondary shadow">
          <img class="card-img-top mt-3 px-2" src="assets/img/${this.poemsArray[i].img}" alt="Card image cap">
          <div class="card-body">
              <h4 class="card-title text-center">${this.poemsArray[i].title}</h4>
              <!-- Button trigger modal -->
              <div class="d-flex justify-content-center pt-2">
                  <button type="button" class="btn btn-outline-dark shadow px-4" data-toggle="modal"
                      data-target="#${this.poemsArray[i].id}">
                      Read
                  </button>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="${this.poemsArray[i].id}" tabindex="-1" role="dialog"
                  aria-labelledby="${this.poemsArray[i].title}" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h5 class="modal-title">${this.poemsArray[i].title}</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div class="modal-body">
                              <p class="text-left">
                              ${this.poemsArray[i].poem}
                              </p>
                          </div>
                          <div class="modal-footer">
                              <a href="https://www.amazon.com/Desert-Idaho-Inspired-Nature-Philosophy-ebook-dp-B07MGPR5ZM/dp/B07MGPR5ZM/ref=mt_kindle?_encoding=UTF8&me=&qid="
                                  target="_blank">
                                  <button type="button" class="btn btn-warning shadow amazon-btn px-3">
                                      Buy on<i class="ml-2 fab fa-1x fa-amazon"></i>
                                  </button>
                              </a>
                              <a class="btn btn-warning shadow"
                                  href="https://commerce.coinbase.com/checkout/14e93c6a-bdd0-4eff-befb-8a869b2d26bf"
                                  target="_blank" role="button">
                                  Donate
                                  <i class="ml-1 fab fa-bitcoin"></i>
                              </a>
                              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                                  <input type="hidden" name="cmd" value="_s-xclick">
                                  <input type="hidden" name="hosted_button_id" value="G6TKWMTHUUZZ2">
                                  <input type="image"
                                      src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                                      name="submit" alt="PayPal - The safer, easier way to pay online!">
                                  <img alt="" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1"
                                      height="1">
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      `
    }
    return template
  }

}