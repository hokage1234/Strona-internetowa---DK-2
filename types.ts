export type Language = 'PL' | 'EN';

export interface Translations {
  nav: {
    about: string;
    shop: string;
    download: string;
    newsletter: string;
    contact: string;
  };
  hero: {
    joinForum: string;
    subtitle: string;
  };
  about: {
    title: string;
    content: string[];
  };
  shop: {
    title: string;
    buy: string;
    price: string;
  };
  download: {
    title: string;
    file1: string;
    file2: string;
    desc: string;
  };
  newsletter: {
    title: string;
    placeholder: string;
    button: string;
  };
  donation: {
    title: string;
    button: string;
  };
  footer: {
    rights: string;
  };
}