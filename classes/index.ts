class Vehicle {

  constructor(public color: string){}

  protected drive(): void {
    console.log('vroom!');
  }
  protected honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {

  constructor(public wheels:number, color: string){
    super(color);
  }
  protected drive(): void {
    console.log('vroom! other way');
  }

  startDrive():void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'blue');
car.startDrive();
//car.honk(); this doesn't work because is protected.


//Modifiers - Public, Private, Protected

/**
 public -> This method can be called any where, any time.

 private -> This method can be called by other methods in this class.

 protected -> This method can be called by other methods in this class, or by other methods in child classes. We cannot call it directly.
 */


//Fields 

