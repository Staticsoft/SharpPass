import { useState, useEffect } from 'react';

import { passwordsApi } from '../api';
import { apiPasswordToPassword } from '../tools';
import { Password } from '../types';

import { useAuth } from '~/Auth';

export type UsePasswordsHook = () => {
  passwords: Password[];
  getPasswords: () => Promise<void>;
  importPasswords: (passwordsJSON: string) => Promise<void>;
};

export const usePasswords: UsePasswordsHook = () => {
  const [passwords, setPasswords] = useState<Password[]>([]);
  const { token } = useAuth();

  const getPasswords = async () => {
    if (token) {
      const apiPasswords = await passwordsApi.getPasswordsList(token);

      setPasswords(apiPasswords.map(apiPasswordToPassword));
    }
  };

  const importPasswords = async (passwordsJSON: string) => {
    if (token) {
      await passwordsApi.importPasswords(token, passwordsJSON);

      await getPasswords();
    }
  };

  useEffect(() => {
    getPasswords();
  }, [token]);

  return { passwords, getPasswords, importPasswords };
};
