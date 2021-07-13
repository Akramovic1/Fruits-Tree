class Oval {
  constructor() {
    this.shape = "oval";
  }
  getShape() {
    return this.shape;
  }
}
class NonOval {
  constructor() {
    this.shape = "Non Oval";
  }
  getShape() {
    return this.shape;
  }
}
class Tiny {
  constructor() {
    this.size = "Tiny";
  }
  getSize() {
    return this.size;
  }
}
class NonTiny {
  constructor() {
    this.size = "Non Tiny";
  }
  getSize() {
    return this.size;
  }
}
class Fruit {
  constructor() {
    this.weight = null;
    this.left = null;
    this.right = null;
    this.name = null;
    this.magnified = false;
    this.sub = null;
  }
  getName() {
    return null;
  }
  setWeight(weight) {
    this.weight = weight;
  }
  getWeight() {
    return this.weight;
  }
}

function Classes(bases) {
  class Bases {
    constructor() {
      bases.forEach((base) => Object.assign(this, new base()));
    }
  }
  bases.forEach((base) => {
    Object.getOwnPropertyNames(base.prototype)
      .filter((prop) => prop != "constructor")
      .forEach((prop) => (Bases.prototype[prop] = base.prototype[prop]));
  });
  return Bases;
}

class Apple extends Classes([Fruit, Oval, NonTiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Apple";
    var f = new Fruit();
  }
  getName() {
    return this.name;
  }
}
class Avocado extends Classes([Fruit, NonOval, NonTiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Avocado";
  }
  getName() {
    return this.name;
  }
}
class Apricots extends Classes([Fruit, Oval, Tiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Apricots";
  }
  getName() {
    return this.name;
  }
}
class Banana extends Classes([Fruit, NonOval, NonTiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Banana";
  }
  getName() {
    return this.name;
  }
}
class Berry extends Classes([Fruit, Oval, Tiny]) {
  constructor() {
    super();
    this.sub = "Berry";
  }
}
class Blackberries extends Berry {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Blackberries";
  }
  getName() {
    return this.name;
  }
}
class Elderberries extends Berry {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Elderberries";
  }
  getName() {
    return this.name;
  }
}
class Gooseberries extends Berry {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Gooseberries";
  }
  getName() {
    return this.name;
  }
}
class Blueberries extends Berry {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Blueberries";
  }
  getName() {
    return this.name;
  }
}
class Strawberries extends Classes([Fruit, Oval, Tiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Strawberries";
  }
  getName() {
    return this.name;
  }
}
class Grapes extends Classes([Fruit, Oval, Tiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Grapes";
  }
  getName() {
    return this.name;
  }
}
class Cherries extends Classes([Fruit, Oval, Tiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Cherries";
  }
  getName() {
    return this.name;
  }
}
class Lemon extends Classes([Fruit, Oval, Tiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Lemon";
  }
  getName() {
    return this.name;
  }
}
class Orange extends Classes([Fruit, Oval, NonTiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Orange";
  }
  getName() {
    return this.name;
  }
}
class Mango extends Classes([Fruit, NonOval, NonTiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Mango";
  }
  getName() {
    return this.name;
  }
}
class Pear extends Classes([Fruit, NonOval, NonTiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Pear";
  }
  getName() {
    return this.name;
  }
}
class Watermelon extends Classes([Fruit, Oval, NonTiny]) {
  constructor(weight) {
    super();
    this.weight = weight;
    this.name = "Watermelon";
  }
  getName() {
    return this.name;
  }
}
class BST {
  constructor() {
    this.bst = new SimpleBST();
  }
  insert(newNode) {
    return this.bst.insert(newNode);
  }
  iterate() {
    return this.bst.iterate();
  }

  magnifyByType(type, weight) {
    this.magnifyByTypeNode(this.bst.getRootNode(), type, weight);
    this.magnifiedIter(this.bst.getRootNode());
  }
  magnifiedIter(node) {
    if (node !== null) {
      this.magnifiedIter(node.left);
      node.magnified = false;
      this.magnifiedIter(node.right);
    }
  }
  magnifyByTypeNode(node, type, weight) {
    if (node !== null) {
      this.magnifyByTypeNode(node.left, type, weight);
      if (node.name == type && !node.magnified) {
        var nodeWight = node.weight + weight;
        node.setWeight(nodeWight);
        var fruit = new node.constructor(node.weight);
        this.bst.remove(node.weight);
        fruit.magnified = true;
        this.insert(fruit);
        fruit = null;
      }
      this.magnifyByTypeNode(node.right, type, weight);
    }
  }
  filterByType(type) {
    return this.filterByTypeNode(this.bst.getRootNode(), type);
  }
  filterByTypeNode(node, type) {
    if (node !== null) {
      this.filterByTypeNode(node.left, type);
      if (
        node.name == type ||
        node.size == type ||
        node.shape == type ||
        node.sub == type
      ) {
        console.log(node.constructor.name + " = " + node.weight + "gm");
      }
      this.filterByTypeNode(node.right, type);
    }
  }
  filterByWeight(weight) {
    return this.filterByWeightNode(this.bst.getRootNode(), weight);
  }
  filterByWeightNode(node, weight) {
    if (node != null) {
      if (node.weight > weight) {
        this.filterByWeightNode(node.left, weight);
        console.log(node.constructor.name + " = " + node.weight + "gm");
        this.filterByWeightNode(node.right, weight);
      } else {
        this.filterByWeightNode(node.right, weight);
      }
    }
  }
  getMin(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return console.log(node.constructor.name + " = " + node.weight + "gm");
    }
  }
  findLightest() {
    return this.findLightestNode(this.getMin, this.bst.getRootNode());
  }
  findLightestNode(min, node) {
    min(node);
    return null;
  }
  getMax(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return console.log(node.constructor.name + " = " + node.weight + "gm");
    }
  }
  findHeaviest() {
    return this.findHeaviestNode(this.getMax, this.bst.getRootNode());
  }
  findHeaviestNode(max, node) {
    max(node);
    return null;
  }
}
class SimpleBST {
  constructor() {
    this.root = null;
  }
  insert(newNode) {
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }
  insertNode(node, newNode) {
    if (newNode.weight < node.weight) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
  getRootNode() {
    return this.root;
  }
  min(node) {
    var current = node;
    while (current.left != null) current = current.left;
    return current;
  }
  remove(weight) {
    this.root = this.removeNode(this.root, weight, this.min);
  }
  removeNode(node, weight, min) {
    if (node === null) return null;
    else if (weight < node.weight) {
      node.left = this.removeNode(node.left, weight);
      return node;
    } else if (weight > node.weight) {
      node.right = this.removeNode(node.right, weight);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      var temp = min(node.right);
      node.weight = temp.weight;
      node.right = this.removeNode(node.right, temp.weight);
      return node;
    }
  }
  iterate() {
    return this.iterateNode(this.root);
  }
  iterateNode(node) {
    if (node !== null) {
      this.iterateNode(node.left);
      console.log(node.constructor.name + " = " + node.weight + "gm");
      this.iterateNode(node.right);
    }
  }
}
var tree = new BST();

tree.insert(new Apricots(10));
tree.insert(new Watermelon(15000));
tree.insert(new Avocado(20));
tree.insert(new Avocado(30));
tree.insert(new Avocado(40));
tree.insert(new Orange(50));
tree.insert(new Blackberries(5));
tree.insert(new Blueberries(7));
tree.insert(new Gooseberries(6));

// tree.magnifyByType("Avocado", 50);
// tree.magnifyByType("Orange", 60);
// tree.iterate();
// tree.findHeaviest();
// tree.findLightest();
// tree.filterByType("Berry");
tree.filterByWeight("40");
