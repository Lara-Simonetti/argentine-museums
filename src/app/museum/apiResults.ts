import { Museum } from "./museum";

export class ApiResults {
  count: number;
  next: string;
  previous: null;
  results: Array<Museum>;

  constructor(count: number, next: string, previous: null, results: Array<Museum>) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}
