import { Translations } from './types';

// Słownik tłumaczeń (Translation Dictionary)
export const CONTENT: Record<'PL' | 'EN', Translations> = {
  PL: {
    nav: {
      about: 'O MARCE',
      shop: 'SKLEP',
      download: 'POBIERZ',
      newsletter: 'NEWSLETTER',
      contact: 'KONTAKT',
    },
    hero: {
      joinForum: '> [ DOŁĄCZ DO FORUM ]',
      subtitle: '// SYSTEM ONLINE. WITAJ UŻYTKOWNIKU.',
    },
    about: {
      title: 'mod_about.exe',
      content: [
        '> Inicjowanie protokołu tożsamości...',
        '> DEEKAY to nie tylko marka. To ruch oporu przeciwko przeciętności.',
        '> Tworzymy cyfrowe artefakty dla tych, którzy widzą kod za rzeczywistością.',
        '> STATUS: OPERACYJNY.'
      ],
    },
    shop: {
      title: 'mod_shop.exe',
      buy: '[ KUP TERAZ ]',
      price: 'CENA',
    },
    download: {
      title: 'mod_downloads.exe',
      file1: 'DEEKAY_WALLPAPER_PACK_V1.zip',
      file2: 'SYSTEM_MANIFESTO.pdf',
      desc: 'Pliki zweryfikowane. Brak wirusów.',
    },
    newsletter: {
      title: 'mod_comm_link.exe',
      placeholder: 'WPROWADŹ_ADRES_EMAIL...',
      button: '[ ЗATWIERDŹ ]',
    },
    donation: {
      title: '// SYSTEM_SUPPORT',
      button: '[ ☕ POSTAW KAWĘ ]',
    },
    footer: {
      rights: 'WSZELKIE PRAWA ZASTRZEŻONE.',
    },
  },
  EN: {
    nav: {
      about: 'ABOUT',
      shop: 'SHOP',
      download: 'DOWNLOADS',
      newsletter: 'NEWSLETTER',
      contact: 'CONTACT',
    },
    hero: {
      joinForum: '> [ JOIN FORUM ]',
      subtitle: '// SYSTEM ONLINE. WELCOME USER.',
    },
    about: {
      title: 'mod_about.exe',
      content: [
        '> Initializing identity protocol...',
        '> DEEKAY is not just a brand. It is a resistance against mediocrity.',
        '> We create digital artifacts for those who see the code behind reality.',
        '> STATUS: OPERATIONAL.'
      ],
    },
    shop: {
      title: 'mod_shop.exe',
      buy: '[ BUY NOW ]',
      price: 'PRICE',
    },
    download: {
      title: 'mod_downloads.exe',
      file1: 'DEEKAY_WALLPAPER_PACK_V1.zip',
      file2: 'SYSTEM_MANIFESTO.pdf',
      desc: 'Files verified. No viruses detected.',
    },
    newsletter: {
      title: 'mod_comm_link.exe',
      placeholder: 'ENTER_EMAIL_ADDRESS...',
      button: '[ EXECUTE ]',
    },
    donation: {
      title: '// SYSTEM_SUPPORT',
      button: '[ ☕ BUY COFFEE ]',
    },
    footer: {
      rights: 'ALL RIGHTS RESERVED.',
    },
  },
};