import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

export const View = styled(SafeAreaView)`
  flex: 1;
  padding: 48px 16px;
  background-color: ${({ theme }) => theme.background};
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled(AntDesign)`
  color: ${({ theme }) => theme.icon};
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-left: 24px;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  padding-right: 16px;
`;

export const ThemeView = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.iconBackground};
  border-radius: 8px;
  padding: 6px;
  width: 40px;
  elevation: 6;
`;

export const SunButton = styled(Feather)`
  color: ${({ theme }) => theme.icon};
`;

export const MoonButton = styled(Entypo)`
  color: ${({ theme }) => theme.icon};
`;
