
class Calebe {
    constructor (tiktok) {
        this.site = tiktok;
    }

    exibirSite () {
        window.open(this.site)
    }
}
var novoCalebe = new Calebe ("https://www.tiktok.com/foryou");
novoCalebe.exibirSite();