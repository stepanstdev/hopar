/* 1.
 Ստեղծեք հտեևյալ class-ները՝

 - Shape (abstract)
 - Square extends Shape
 - Triangle extends Shape
 - List

 Shape, Square, Triangle class-ների նկարագրություն:
 պետք է ունենա 3 մեթոդ՝
 - perimeter  - հաշվում և վերադարձնում է պարագիծը
 - sidesCount  - վերադարձնում է կողմերի քանակը
 - draw  - Square-ի դեպում "Square!" console-ում տպում է, իսկ Triangle-ի դեպքում՝ "Triangle!"


 List-ի նկարագրություն։

 - պետք է լինի generic
 - ունի private property` "values" անունով
 - constructor-ին հնարավոր է փոխանցել "values"-ի համար նախնական արժեք, բայց կարելի է նաև չփոխանցել
 
 List-ը ունի հետևյալ մեթոդները`
 - add(data) - data-ն 1 արժեք է (1 item, array չի), ավելացնում է "data"-ն "values"-ի մեջ և վերադարձնում "values"-ը
 - remove(data) - data-ն 1 արժեք է (values-ի item-ներից մեկը, կամ նույն տիպի item, որը չկա values-ում) եթե "data"-ն կա "values"-ի մեջ՝ ջնջում է այն "values"-ից և վերադարձնում "true", հակառակ դեպքում ուղղակի վերադարձնում է "false"
 - from(data) - data-ն array է՝ value-ի item-ների տիպից, այն static է։ Կանչվելուց վերադարձնում է նոր List` տրված "data"-ն վերագրելով նոր List-ի "values"-ին
 - getValues() - վերադարձնում է "values"-ը

 (optional - կարող եք այս մեկը բաց թողնել)
 - filter(predicate) - predicate-ը ֆունկցիա է, որը ստանում է 1 արգումենտ և վերադարձնում boolean: filter-ը վերադարձնում է array՝ կազմված "values"-ի բոլոր այն item-ից, որոնց համար predicate-ը կանչելիս վեչադարձնում է true
 
 predicate-ի մասին - արգումենտը նույն տիպի է ինչ որ "values"-ի item-ներից յուրաքանչյուրը
                     predicate-ը filter մեթոդին փոխանցում ենք դրսից՝ filter-ի կանչի ժամանակ



  Օրինակ՝
    const shapes = new List<Shape>();

    shapes.add(new Square(4));
    shapes.add(new Square(5))
    shapes.add(new Triangle(3, 4, 5));
    shapes.add(new Triangle(7, 4, 8));

    // 1
    shapes.getValues().forEach(shape => {
        console.log('Shape:', shape.draw(), 'sides:', shape.sidesCount(), 'perimeter:', shape.perimeter());
    });

    // 2
    const squares = shapes.filter((item) => item.sidesCount() === 4);
    console.log(squares);

    // 3
    const newShapes = List.from([
        new Square(6),
        new Triangle(3, 4, 5),
    ]);
    console.log(newShapes);

    output:

    // 1
    'Square!'
    'sides: 4 perimeter: 16'
    'Square!'
    'sides: 4 perimeter: 25'
    'Triangle!'
    'sides: 3 perimeter: 12'
    'Triangle!'
    'sides: 3 perimeter: 19'

    // 2
    Array` որը կպարունակի 2 Square օբյեկտները

    // 3
    List օբյեկտը, որը իր մեջ պարունակում է 57-59 տողերը item-ները (values-ի մեջ)
*/


/* 2.
    Ստեղծեք interface` IWithIdentity անունով, որը ունի 1 property՝ "id" անունով, որը պետք է լինի թիվ
    Ստեղխեք 3 class`

    - User implemnents IWithIdentity - User-ը պետք է ունենա name property (string) և todoList property` իր todo-ների list-ը պահելու համար, որը MyList տիպի է
    - Todo implemnents IWithIdentity - Todo-ն պետք է ունենա title property, որի տիպը string է
    - MyList<T> - պետք է լինի generic, բայց MyList-ին փոխանցվող generic տիպերը պետք է IWithIdentity implement անեն
                  constructor-ին հնարավոր է փոխանցել սկզբնական արժեք՝ values-ի համար

    MyList`
        property-ներ
            - values: array է՝ T (generic) տիպի item-ներով․ values-ում կարող են լինել միայն չկրկնվող id-ներով item-ներ
        method-ներ
            - add(data) - եթե values-ում դեռ չկա data.id-ով օբկյեկտ՝ ավելացնում է data-ն values-ում, հակառակ դեպքում ոչինչ չի անում։ 2 դեպքում էլ ոչինչ չի վերադարձնում։
            - findById(id) - փնտրում է values-ում տրված id-ով item: Եթե այդպիսին կա՝ վերադարձնում է այդ item-ը, հակառակ դեպքում վերանարձնում է null
            - deleteById(id) - փնտրում է values-ում տրված id-ով item։ Եթե այդպիսին կա՝ ջնջում է այն values-ից և վերադարձնում true, հակառակ դեպքում վերադարձնում է false


    Օրինակ՝ (console-ի output-ը նկարով կցված ա classroom-ում)

    const usersList = new MyList<User>();

    usersList.add({
        id: 1,
        name: 'User 1',
        todoList: new MyList(),
    });

    const user1 = usersList.findById(1);
    if (!!user1) {
        user1.todoList.add({
            id: 1,
            title: 'Wake up',
        });

        user1.todoList.add({
            id: 1,
            title: 'Wake up',
        });

        user1.todoList.add({
            id: 2,
            title: 'Go to Angular class',
        });

        user1.todoList.add({
            id: 3,
            title: 'After the class do homework',
        });

        user1.todoList.add({
            id: 4,
            title: 'Send homework in google classroom',
        });

        user1.todoList.add({
            id: 5,
            title: 'Go to market and buy some food'
        });
    }


    usersList.add({
        id: 2,
        name: 'User2',
        todoList: new MyList(),
    });

    const user2 = usersList.findById(2);
    if (!!user2) {
        user2.todoList.add({
            id: 1,
            title: 'Go to school'
        });

        user2.todoList.add({
            id: 2,
            title: 'Go to work'
        });

        user2.todoList.deleteById(2);
    };

    console.log(usersList);

*/



// ANSWERS

// 1.
abstract class Shape {
  abstract perimeter(): number;
  abstract sidesCount(): number;
  abstract draw(): void;
}

class Square extends Shape {
  constructor(public size: number) {
    super();
  }

  perimeter(): number {
    return this.sidesCount() * 4;
  }

  sidesCount(): number {
    return 4;
  }

  draw(): void {
    console.log("Square!");
  }
}

class Triangle extends Shape {
  constructor(public a: number, public b: number, public c: number) {
    super();
  }

  perimeter(): number {
    return this.a + this.b + this.c;
  }

  sidesCount(): number {
    return 3;
  }

  draw(): void {
    console.log("Triangle!");
  }
}

class List<T> {
  private values: T[] = [];

  constructor(initialData?: T[]) {
    this.values = initialData || [];
  }

  public add(data: T): T[] {
    this.values.push(data);
    return this.values;
  }

  public remove(data: T): void {
    this.values = this.values.filter((existing) => existing !== data);
  }

  public filter(predicate: (value: T) => boolean): T[] {
    return this.values.filter(predicate);
  }

  public static from<Type>(data: Type[]): List<Type> {
    return new List<Type>(data);
  }

  public getValues(): T[] {
    return this.values;
  }
}

const shapes = new List<Shape>();

shapes.add(new Square(4));
shapes.add(new Square(5));
shapes.add(new Triangle(3, 4, 5));
shapes.add(new Triangle(7, 4, 8));

shapes.getValues().forEach((shape) => {
  shape.draw();
  console.log("sides:", shape.sidesCount(), "perimeter:", shape.perimeter());
});

const squares = shapes.filter((item) => item.sidesCount() === 4);
console.log(squares);

const newShapes = List.from<Shape>([
    new Square(6),
    new Triangle(3, 4, 5),
]);
console.log(newShapes);

// 2.

interface IWithIdentity {
  id: number;
}

class User implements IWithIdentity {
  constructor(public id: number, public name: string, public todoList: MyList<Todo>) {}
}

class Todo implements IWithIdentity {
  constructor(public id: number, public title: string) {}
}

class MyList<T extends IWithIdentity> {
  private values: T[];

  constructor(initialData?: T[]) {
    this.values = initialData || [];
  }

  public add(data: T): void {
    if (!this.values.find((item) => item.id === data.id)) {
      this.values.push(data);
    }
  }

  public findById(id: number): T | null {
    return this.values.find((item) => item.id === id) || null;
  }

  public deleteById(id: number): boolean {
    const lengthBeforeDelete = this.values.length;

    this.values = this.values.filter((item) => item.id === id);
    return lengthBeforeDelete === this.values.length;
  }
}

const usersList = new MyList<User>();

usersList.add({
    id: 1,
    name: 'User 1',
    todoList: new MyList(),
});

const user1 = usersList.findById(1);
if (!!user1) {
    user1.todoList.add({
        id: 1,
        title: 'Wake up',
    });

    user1.todoList.add({
        id: 1,
        title: 'Wake up',
    });

    user1.todoList.add({
        id: 2,
        title: 'Go to Angular class',
    });

    user1.todoList.add({
        id: 3,
        title: 'After the class do homework',
    });

    user1.todoList.add({
        id: 4,
        title: 'Send homework in google classroom',
    });

    user1.todoList.add({
        id: 5,
        title: 'Go to market and buy some food'
    });
}


usersList.add({
    id: 2,
    name: 'User2',
    todoList: new MyList(),
});

const user2 = usersList.findById(2);
if (!!user2) {
    user2.todoList.add({
        id: 1,
        title: 'Go to school'
    });

    user2.todoList.add({
        id: 2,
        title: 'Go to work'
    });

    user2.todoList.deleteById(2);
};

console.log(usersList);
