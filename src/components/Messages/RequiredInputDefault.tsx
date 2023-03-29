import React from 'react';
import { GoAlert } from 'react-icons/go';

interface Props {
  message?: string;
}

const RequiredInputDefault = ({ message }: Props) => {
  return (
    <p className="mt-2 animate-animeLeft font-poppins text-sm font-semibold text-red-600 flex items-center gap-2">
      <GoAlert size="20px" className="text-red-500" />
      {message ? message : 'Este campo é requirido'}
    </p>
  );
};

export default RequiredInputDefault;
