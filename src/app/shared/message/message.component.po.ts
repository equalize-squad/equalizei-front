export class MessageComponentPage {

  private mdCard:HTMLElement;

  constructor(private element:HTMLElement) {
      this.mdCard = <HTMLElement>element.querySelector('md-card');
  }

  isVisible():boolean {
    return this.mdCard != null && this.mdCard != undefined;
  }

  getClass():String {
    return this.mdCard.classList.item(0);
  }

  getTitle():String {
    return this.mdCard.querySelector('md-card-title').innerHTML;
  }

  getContent():String {
    return this.mdCard.querySelector('md-card-content p').innerHTML;
  }
}
