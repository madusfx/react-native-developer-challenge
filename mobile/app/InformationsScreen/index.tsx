import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Colors } from '@/constants/Colors';

import * as S from './styles';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { RootStackParamList } from '../navigation';

const lightTheme = Colors.light;
const darkTheme = Colors.dark;

export default function InformationsScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <S.View>
        <S.HeaderContainer>
          <S.BackButton
            name="arrowleft"
            size={20}
            onPress={() => navigation.navigate('HomeScreen')}
          />
          <S.Text>Filme tal</S.Text>
          <S.Container>
            <S.ThemeView>
              <TouchableOpacity onPress={() => setIsDarkTheme(!isDarkTheme)}>
                {isDarkTheme ? (
                  <S.SunButton name="sun" size={18} />
                ) : (
                  <S.MoonButton name="moon" size={18} />
                )}
              </TouchableOpacity>
            </S.ThemeView>
          </S.Container>
        </S.HeaderContainer>
      </S.View>
    </ThemeProvider>
  );
}
