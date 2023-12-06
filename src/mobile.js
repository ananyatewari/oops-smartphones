// Progression 1 SmartPhone

class SmartPhone {
  constructor (ram, batteryPower, price){
    this.ram = ram
    this.batteryPower = batteryPower
    this.price = price
  }
  displayFeatures() {
    return this.ram +'\n'+this.batteryPower+'\n'+this.price;
  }
  remainingAmount(priceIHave) {
    this.price = this.price - priceIHave;
  }
}

// Progression 2 AndroidPhone

class AndroidPhone extends SmartPhone {
  constructor(modelName, ram, batteryPower, price) {
    super(ram, batteryPower, price);
    this.modelName = modelName;
  }
  displayFeatures() {
    return this.modelName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
  }
  remainingAmount(priceIHave) {
    let remainingPrice = priceIHave - this.price
    this.price = remainingPrice;
    return remainingPrice <= 0 ? "Customer has no more amount" : `Customer has remaining Rs.${remainingPrice} after buying the android phone`
  }
}

// Progression 3 IPhone

class IPhone extends SmartPhone {
  constructor(seriesName, ram, batteryPower, price) {
    super(ram, batteryPower, price)
    this.seriesName = seriesName;
  }
  displayFeatures() {
    return this.seriesName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
  }
  remainingAmount(priceIHave) {
    const initialPrice = this.price
    let remainingPrice = priceIHave - initialPrice
    this.price = remainingPrice;

    return priceIHave < initialPrice ?  "Customer can't able to buy a phone due to insufficient amount" : remainingPrice <= 0 ? 'Customer has no more amount' : 
    `Customer has remaining Rs.${remainingPrice} after buying an iphone` 
    // "Customer has remaining Rs." + remainingPrice + "after buying an iphone"
  }
}

// Progression 4  Progression 1 MobileCampus

class MobileCampus {
  constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
    this.NoOfMobiles = NoOfMobiles;
    this.NoOfAndroidMobiles = NoOfAndroidMobiles;
    this.NoOfIPhoneMobiles = NoOfIPhoneMobiles;
  }
  changeMobileAvailabilityNumber(count,type) {
    this.NoOfMobiles = this.NoOfMobiles - count
    if(type == "android"){
      this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
      return "Available android mobiles are " + this.NoOfAndroidMobiles;
    }
    else if (type == "iphone"){
      this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
      return "Available iphone mobiles are " + this.NoOfIPhoneMobiles;
    }
  }
}
