abstract class Department {
  static fiscalYear = 2021;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return {
      name: name,
    };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.reports = reports;
    this.lastReport = reports[0];
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Omar"]);

it.addEmployee("Omar");
it.addEmployee("Max");

// accounting.employees[2] = "Anna";

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Your End Report";

accounting.addReport("Something went wrong...");

console.log(accounting.mostRecentReport);

accounting.addEmployee("Manu");

accounting.printReports();

accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
