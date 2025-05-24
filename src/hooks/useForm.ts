import { useState } from 'react';

// para definir os tipos suportados pelo form
type ValidFormType = 'email' | 'senha';
type FormType = 'email' | 'senha' | false;

// Interface para os tipos de validação
// Interface para os tipos de validação
interface ValidationTypes {
  [key: string]: {
    regex: RegExp;
    message: string;
    requirements?: {
      regex: RegExp;
      message: string;
    }[];
  };
}

// Interface para o retorno do hook
interface UseFormReturn {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  validate: () => boolean;
}

const types: ValidationTypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  senha: {
    // Regex principal para validação de senha
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
    message:
      'A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula e um número',
    // Requisitos específicos para mensagens de erro detalhadas
    requirements: [
      {
        regex: /^(?=.*[a-z]).+$/,
        message: 'Sua senha deve conter pelo menos uma letra minúscula',
      },
      {
        regex: /^(?=.*[A-Z]).+$/,
        message: 'Sua senha deve conter pelo menos uma letra maiúscula',
      },
      {
        regex: /^(?=.*\d).+$/,
        message: 'Sua senha deve conter pelo menos um número',
      },
    ],
  },
};

export function useForm(type: FormType): UseFormReturn {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  function validate(value: string): boolean {
    // Se o tipo for false, não validamos
    if (type === false) return true;

    // Se o campo estiver vazio
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    }

    // TypeGuard: verifica se o tipo é um dos tipos válidos
    function isValidType(t: FormType): t is ValidFormType {
      return t !== false;
    }

    // Se tivermos um tipo válido, valida com a regex
    if (isValidType(type)) {
      if (!types[type].regex.test(value)) {
        // Para senha, verificar qual critério específico está falhando
        if (type === 'senha' && types.senha.requirements) {
          for (const requirement of types.senha.requirements) {
            if (!requirement.regex.test(value)) {
              setError(requirement.message);
              return false;
            }
          }
        }

        // Se chegou aqui, usa a mensagem padrão
        setError(types[type].message);
        return false;
      }
    }

    // Se veio até aqui é porque está correto!
    setError(null);
    return true;
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (error) validate(event.target.value);
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
}
