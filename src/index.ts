class Tracker {
  public options: Record<string, any>;
  public name: string;
  constructor(name: string, options: Record<string, any>) {
    this.name = name;
    this.options = options;
  }
}

export default Tracker;
