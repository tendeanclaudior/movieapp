import {useState} from 'react';

export const useForm = initialValue => {
  // Menggunakan useState untuk membuat state dengan nilai awal dari initialValue
  const [values, setValues] = useState(initialValue);

  // Mengembalikan array yang berisi state (values) dan fungsi untuk mengubah state
  return [
    values,
    (formType, formValue) => {
      // Memproses perubahan state berdasarkan formType
      if (formType === 'reset') {
        // Jika formType adalah 'reset', reset nilai state menjadi initialValue
        return setValues(initialValue);
      }
      // Jika formType bukan 'reset', update nilai state sesuai dengan formType dan formValue
      return setValues({...values, [formType]: formValue});
    },
  ];
};
