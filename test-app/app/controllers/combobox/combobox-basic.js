import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';

const PEOPLE = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
  { id: 6, name: 'Alicia Waters', unavailable: false },
  { id: 7, name: 'Marcus Chen', unavailable: false },
  { id: 8, name: 'Priya Sharma', unavailable: false },
  { id: 9, name: 'Oliver Grant', unavailable: true },
  { id: 10, name: 'Sofia Ramirez', unavailable: false },
  { id: 11, name: "James O'Brien", unavailable: false },
  { id: 12, name: 'Yuki Tanaka', unavailable: false },
  { id: 13, name: 'Elena Petrova', unavailable: false },
  { id: 14, name: 'David Kim', unavailable: false },
  { id: 15, name: 'Fatima Al-Hassan', unavailable: false },
  { id: 16, name: 'Lucas Fernandez', unavailable: true },
  { id: 17, name: 'Amara Okafor', unavailable: false },
  { id: 18, name: 'Henrik Larsson', unavailable: false },
  { id: 19, name: 'Mei Lin', unavailable: false },
  { id: 20, name: 'Noah Patel', unavailable: false },
];

export default class ComboboxBasicController extends Controller {
  @tracked selectedPerson = PEOPLE[0];
  @tracked _filter = '';

  get people() {
    return PEOPLE;
  }

  get filteredPeople() {
    return PEOPLE.filter((person) => {
      return person.name.toLowerCase().includes(this._filter.toLowerCase());
    });
  }

  @action
  setSelectedPerson(person) {
    this.selectedPerson = person;
  }

  @action
  clearSelection() {
    this.selectedPerson = null;
    this._filter = '';
  }

  @action
  displayValue(person) {
    if (typeof person === 'object') {
      return person?.name;
    } else {
      return person;
    }
  }

  @action
  applyFilter(event) {
    this._filter = event.target.value;
  }
}
