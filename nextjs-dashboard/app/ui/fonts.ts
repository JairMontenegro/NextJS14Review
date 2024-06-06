import { Montserrat, Lusitana } from 'next/font/google'; // to upload any font from google fonts

export const montserrat = Montserrat({ subsets: ['latin'] }); // in a curly braces we can set a a subset or any specification to font it means weight subset and other.
export const lusitana = Lusitana({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});
