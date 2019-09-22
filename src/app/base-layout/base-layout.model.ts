export interface DrawerTranslation {
  search: {
    placeholder: string;
  };
  home: {
    title: string;
  };
  about: {
    title: string;
  };
  getStarted: {
    title: string;
  };
  components: {
    title: string;
    children: {
      accordion: string;
      button: string;
      collapsible: string;
      calendar: string;
      card: string;
      divider: string;
      icon: string;
      modal: string;
      ripple: string;
      table: string;
    };
  };
  forms: {
    title: string;
    children: {
      buttonToggle: string;
      checkbox: string;
      checkboxList: string;
      datePicker: string;
      formPrefix: string;
      formSuffix: string;
      input: string;
      label: string;
      message: string;
      radio: string;
      select: string;
      slider: string;
      switch: string;
      textarea: string;
    };
  };
  layout: {
    title: string;
    children: {
      drawer: string;
      navbar: string;
      tab: string;
    };
  };
  themes: { title: string };
}
