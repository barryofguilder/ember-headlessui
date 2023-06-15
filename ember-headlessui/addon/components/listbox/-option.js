import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

import { modifier } from 'ember-modifier';

export default class ListboxOptionComponent extends Component {
  @tracked guid = `${guidFor(this)}-headlessui-listbox-option`;
  @tracked shouldScroll = false;

  constructor() {
    super(...arguments);

    if (this.args.selectedValue && !this.args.multiple) {
      this.shouldScroll = this.args.selectedValue.includes(this.args.value);
    } else {
      this.shouldScroll = false;
    }
  }

  registerOption = modifier((element) => {
    this.args.registerOptionElement(this, element);
  });

  scroll = modifier((element, [shouldScroll, scrollFn]) => {
    if (shouldScroll) {
      scrollFn(element);
    }
  });

  @action
  handleClick(e) {
    e.stopPropagation();
    e.preventDefault();

    this.args.setSelectedOption(this, e);
  }

  get isActive() {
    return this.args.activeOptionGuid == this.guid;
  }

  get isSelected() {
    if (this.args.multiple) {
      let selected = this.args.selectedValue ?? [];
      return selected.includes(this.args.value);
    } else {
      return (
        // allow 0 and null to as possible values
        this.args.selectedValue !== undefined &&
        this.args.selectedValue === this.args.value
      );
    }
  }
}
