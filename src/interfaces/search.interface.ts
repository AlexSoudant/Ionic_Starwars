import { People } from '../interfaces/people.interface';;

export interface Search {
  Peoples: Array<People[]>
  Pages: Number;
  Page: Number;
  // optionnal (for history of people.service)
  Name: String;
}
