declare module 'og-utils' {
  type FormattedBytes = {
    size: number;
    units: string;
  } 
  
   export let humanizeAmount = (value: number) => string;
   export let humanizeUTC = (time: string, format: string) => string;
   export let createFormData = (value: any) => any;
   export let humanizeBytes = (value: number, decimal?: number) => FormattedBytes;
}
