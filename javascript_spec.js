describe('quotes', function() {
  it('sees no difference between single and double quotes', function() {
    expect('abc').toBe("abc");
  });
});

describe('undefined', function() {
  it('sees an uninitialized variable as equal to undefined', function() {
    var a;
    expect(a).toBe(undefined);
  });
});

describe('basic math', function() {
  it('can add two numbers', function() {
    expect(3 + 2).toBe(5);
  });

  it('can multiply two numbers', function() {
    expect(3 * 2).toBe(6);
  });

  it('subtract one number from another', function() {
    expect(2 - 1).toBe(1);
  });

  it('can divide two numbers', function() {
    expect(3/2).toBe(1.5);
  });

  it('can determine the remainder', function() {
    expect(6 % 4).toBe(2);
  });

  it('two numbers are equal even if one appears to be a float', function() {
    expect(2.0 == 2).toBeTruthy();
  });
});

describe('Math', function() {
  it('can use sqrt to find the square root of a number', function() {
    expect(Math.sqrt(9)).toBe(3);
  });

  it('can use pow to find the result of one number to the power of another number', function() {
    expect(Math.pow(3, 2)).toBe(9);
  });
});

describe('math conversions', function() {
  describe('isNaN', function() {
    it('can determine if a value is a number', function() {
      expect(isNaN(42)).toBeFalsy();
    });

    it('converts a string to a number to determine if it is a number', function() {
      expect(isNaN('2')).toBeFalsy();
    });

    it('sees a non-numeric string as not a number', function() {
      expect(isNaN('abc')).toBeTruthy();
      expect(isNaN('abc')).toBe(true);
    });

    it("equality", function() {
      expect(2).toBe(2.0);
      expect('2' == 2).toBeTruthy();
    });

    it('sees a partially numeric string as not a number', function() {
      expect(isNaN('a44')).toBeTruthy();
      expect(isNaN('44a')).toBeTruthy();
    });
  });

  describe('parseInt', function() {
    it('can parse a numeric string to a number', function() {
      expect(parseInt('100', 10)).toBe(100);
    });

    it('parses a partially numeric string to NaN if it starts with a non-numeric string', function() {
      expect(isNaN(parseInt('a100', 10))).toBeTruthy();
    });

    it('parses a partially numeric string to the numeric value if it ends with a string', function() {
      expect(parseInt('100a', 10)).toBe(100);
    });
  });

  describe('parseFloat', function() {
    it('can parse a fractional number in decimal format from a string to a number', function() {
      expect(parseFloat('3.5', 10)).toBe(3.5);
    });

    it('parses to NaN if the string begins with a non-numeric string', function() {
      expect(isNaN(parseFloat('a100.5', 10))).toBeTruthy();
    });

    it('parses a string that begins with a numeric string and ends with a non-numeric string to a number', function() {
      expect(parseFloat('99.9%', 10)).toBe(99.9);
    });
  });
});

describe('strings', function() {
  it('can convert a number to a string with toString or with concatenation', function() {
    expect((42).toString()).toBe('' + 42);
  });
});

describe('variables', function() {
  it('can add two variables', function() {
    var a = 10,
        b = 20;

    expect(a + b).toBe(30);
  });
});

describe('scope', function() {
  it('overwrites the value of a variable outside of a block from code within a block', function() {
    var a = 10;
    {
      var a = 100;
    }
    expect(a).toBe(100);
  });

  it('overwrites the value of a variable outside of an inline function', function() {
    var x;
    (function() {
      x = 5;
    })();
    expect(x).toBe(5);
  });
});

describe('functions', function() {
  it('can assign functions to a variable', function() {
    var hi = function() {
      return 'hi'
    };

    expect(typeof(hi)).toBe('function');
    expect(hi()).toBe('hi');
  });

  it('can use a function as an argument to another function', function() {
    var hi = function() {
      return 'hi'
    };
    var run = function(fn) {
      return fn();
    };

    expect(run(hi)).toBe('hi');
  });

  it('can return a function from another function', function() {
    var hi = function() {
      return function() {
        return 'hi';
      }
    };
    expect(typeof(hi)).toBe('function');
    expect(typeof(hi())).toBe('function');
    expect(hi()()).toBe('hi');
  });

  it('allows anonymous functions', function() {
    expect(typeof(function() {})).toBe('function');
  });

  it('allows functions to be stored in data structures', function() {
    var instance = new Object();
    instance.fn = function() {
      return 'hi';
    };
    expect(typeof(instance.fn)).toBe('function');
    expect(instance.fn()).toBe('hi');
  });
});

describe('objects', function() {
  it('allows objects to be created with new', function() {
    expect(typeof(new Object())).toBe('object');
  });

  it('allows objects to be created with {}', function() {
    expect(typeof({})).toBe('object');
  });

  it('allows nested objects', function() {
    var person = {
      name: 'Bob',
      address: {
        city: 'Chicago'
      }
    };

    expect(typeof(person)).toBe('object');
    expect(typeof(person.address)).toBe('object');
    expect(person.address.city).toBe('Chicago');
  });

  it('allows additional keys to be created on objects on the fly with dot syntax', function() {
    var o = {};
    o.make = 'Ford';
    expect(o.make).toBe('Ford');
  });

  it('allows additional keys to be created on objects on the fly with bracket notation', function() {
    var o = {};
    o['make'] = 'Ford';
    expect(o['make']).toBe('Ford');
    expect(o.make).toBe('Ford');
  });
});

describe('arrays', function() {
  it('allows arrays to be created with new', function() {
    var a = new Array(1, 2, 3);
    expect(a.length).toBe(3);
    expect(a[0]).toBe(1);
    expect(a[2]).toBe(3);
  });

  it('has an odd case for new where one numeric value is interpreted as the array size to create not as the first value', function() {
    var a = new Array(9);
    expect(a.length).toBe(9);
    for (var i=0; i < a.length; i++) {
      expect(a[i]).toBe(undefined);
    }
  });

  it('allows arrays to be created with []', function() {
    var a = [1, 2, 3];
    expect(a.length).toBe(3);
    expect(a[0]).toBe(1);
    expect(a[2]).toBe(3);
  });

  it('does not have the odd case when using the array shorthand notation to create an array with one element', function() {
    var a = [42];
    expect(a.length).toBe(1);
    expect(a[0]).toBe(42);
  });

  it('has an oddity where an extra comma in a list of array items will be silently accepted as an undefined at that offset', function() {
    var a = [1, 2, , 3];
    expect(a.length).toBe(4);
    expect(a[2]).toBe(undefined);
  });
});

describe('pass by value', function() {
  var fn;
  beforeEach(function() {
    fn = function(argument) {
      argument = 'abc' + argument;
      return argument;
    };
  });

  it('passes numbers by value', function() {
    var number = 42;
    fn(number);
    expect(number).toBe(42);
  });

  it('passes strings by value', function() {
    var string = 'Tofu';
    fn(string);
    expect(string).toBe('Tofu');
  });
});

describe('pass by reference', function() {
  it('passes objects by reference', function() {
    var fn = function(o) {
      o.location = 'Taos';
    };

    var object = {
      location: 'Chicago'
    };
    fn(object);

    expect(object.location).toBe('Taos');
  });
});

describe('setTimeout', function() {
  it('calls the function (first argument) after the elapsed time in milliseconds (second argument)', function() {
    var spy = jasmine.createSpy('setTimeout');

    setTimeout(function() {
      spy();
    }, 50);

    expect(spy).not.toHaveBeenCalled();

    waitsFor(function() { return spy.callCount > 0; }, 100);
  });
});

describe('closure', function() {
  it('can hide data storage inside a closure', function() {
    var widget = (function() {
      var robot;
      return {
        getRobot: function() { return robot; },
        setRobot: function(r) { robot = r; }
      }
    })();

    expect(widget.getRobot()).toBeUndefined();

    widget.setRobot('abc123');
    expect(widget.getRobot()).toBe('abc123');

    widget.robot = 'xyz';
    expect(widget.getRobot()).not.toBe('xyz');
    expect(widget.getRobot()).toBe('abc123');
  });
});

describe('classes', function() {
  it('functional approach', function() {
    var Animal = function(name) {
      this.name = name;
    };

    var sue = new Animal('sue');
    expect(sue instanceof Animal).toBeTruthy();
  });
});
