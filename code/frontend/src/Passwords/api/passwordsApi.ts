export interface ApiPasswordsData {
  id: string;
  created: string;
  modified: string;
  login: string;
  site: string;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  digits: boolean;
  length: number;
  counter: number;
  version: number;
}

export class PasswordsApi {
  getPasswordsList = async (token?: string | null): Promise<ApiPasswordsData[]> => {
    if (!token) return [];

    const response = await fetch('http://localhost:5001/passwords', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
    });

    const passwords = await response.json();
    return passwords.results as ApiPasswordsData[];
  };
}

export const passwordsApi = new PasswordsApi();