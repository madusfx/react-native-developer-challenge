import { TextInput } from 'react-native';
import { useTheme } from 'styled-components';

type CustomTextInputProps = {
  placeholder: string;
};

export const CustomTextInput = ({ placeholder }: CustomTextInputProps) => {
  const theme = useTheme();
  return (
    <TextInput
      placeholderTextColor={theme.text}
      style={{ flex: 1, color: theme.text, backgroundColor: 'transparent' }}
      placeholder={placeholder}
    />
  );
};
