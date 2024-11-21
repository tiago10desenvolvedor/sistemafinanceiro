import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState<number | string>('');
  const [formErrors, setFormErrors] = useState<string[]>([]);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if (titleField === '') {
      errors.push('Título vazio!');
    }
    if (valueField <= 0) {
      errors.push('Valor inválido!');
    }

    if (errors.length > 0) {
      setFormErrors(errors);
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: Number(valueField),

      });
      clearFields();
      setFormErrors([]); // Limpar erros após sucesso
    }
  }

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setValueField(isNaN(value) ? '' : value);
  };

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField('');
  }

  return (
    <C.Container>
      {formErrors.length > 0 && (
        <div>
          {formErrors.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>{error}</p>
          ))}
        </div>
      )}
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input 
          type="date" 
          value={dateField} 
          onChange={e => setDateField(e.target.value)} 
          aria-label="Data" 
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={categoryField} onChange={e => setCategoryField(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          {categoryKeys.map((key, index) => (
            <option key={index} value={key}>{categories[key].title}</option>
          ))}
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input 
          type="text" 
          value={titleField} 
          onChange={e => setTitleField(e.target.value)} 
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input 
          type="number" 
          value={valueField} 
          onChange={handleValueChange} 
        />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
}
