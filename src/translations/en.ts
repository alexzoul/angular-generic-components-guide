import { Translations } from 'src/app/translation.model';

export const translations: Translations = {
  drawer: {
    search: { placeholder: 'Search' },
    home: { title: 'Home' },
    about: { title: 'About' },
    getStarted: { title: 'Getting Started' },
    components: {
      title: 'Components',
      children: {
        accordion: 'Accordion',
        button: 'Button',
        calendar: 'Calendar',
        card: 'Card',
        collapsible: 'Collapsible',
        icon: 'Icon',
        modal: 'Modal',
        ripple: 'Ripple'
      }
    },
    forms: {
      title: 'Forms',
      children: {
        buttonToggle: 'Button Toggle',
        checkbox: 'Checkbox',
        datePicker: 'Date Picker',
        input: 'Input',
        label: 'Label',
        message: 'Form Message',
        radio: 'Radio',
        select: 'Select',
        slider: 'Slider',
        switch: 'Switch',
        textarea: 'Textarea'
      }
    },
    layout: {
      title: 'Layout',
      children: {
        drawer: 'Drawer',
        navbar: 'Navbar',
        tab: 'Tab'
      }
    },
    themes: { title: 'Themes' }
  }
};

