class C {
    _length = 0;
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
  }

  // If get exists but no set, the property is automatically readonly
  // If the type of the setter parameter is not specified, it is inferred from the return type of the getter
  // Getters and setters must have the same Member Visibility