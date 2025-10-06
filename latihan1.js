class FruitBasket {
  constructor() {
    this.fruitsBasket = [];
  }

  addItem(fruit) {
    this.fruitsBasket.push(fruit);
    console.log(`${fruit} ditambahkan ke dalam keranjang.`);
  }

  removeLastItem() {
    this.fruitsBasket.pop();
    console.log("Buah terakhir telah dihapus dari keranjang.");
  }

  getInformation() {
    console.log(`Isi keranjang: ${this.fruitsBasket.join(", ")}`);
  }
}

const basket = new FruitBasket();
basket.addItem("Anggur");
basket.addItem("Pisang");
basket.addItem("Mengkudu");
basket.getInformation();
basket.removeLastItem();
basket.getInformation();