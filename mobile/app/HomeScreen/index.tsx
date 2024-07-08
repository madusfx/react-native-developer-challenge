import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Colors } from '@/constants/Colors';

import * as S from './styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import GradientOverlay from '@/components/GradientOverlay';
import { CustomTextInput } from '@/components/TextInput';

const lightTheme = Colors.light;
const darkTheme = Colors.dark;

const cardsData = [
  {
    id: '1',
    title: 'Título',
    description:
      'Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição Descrição',
  },
  { id: '2', title: 'Título', description: 'Descrição' },
  { id: '3', title: 'Título', description: 'Descrição' },
  { id: '4', title: 'Título', description: 'Descrição' },
  { id: '5', title: 'Título', description: 'Descrição' },
  { id: '6', title: 'Título', description: 'Descrição' },
  { id: '7', title: 'Título', description: 'Descrição' },
  { id: '8', title: 'Título', description: 'Descrição' },
  { id: '9', title: 'Título', description: 'Descrição' },
  { id: '10', title: 'Título', description: 'Descrição' },
  { id: '11', title: 'Título', description: 'Descrição' },
  { id: '12', title: 'Título', description: 'Descrição' },
];

export default function HomeScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <S.View>
        <S.HeaderContainer>
          <S.FilterContainer>
            <CustomTextInput placeholder="Filtrar..." />
            <S.SearchIcon name="search1" size={18} />
          </S.FilterContainer>
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
        <FlatList
          data={cardsData}
          renderItem={({ item }) => (
            <S.Card onPress={() => navigation.navigate('InformationsScreen')}>
              <S.ImageCard source={require('../../assets/images/image.jpg')}>
                <GradientOverlay />
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.DescriptionCard>{item.description}</S.DescriptionCard>
              </S.ImageCard>
            </S.Card>
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      </S.View>
    </ThemeProvider>
  );
}
