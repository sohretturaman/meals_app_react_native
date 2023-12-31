import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AllCategoryScreen from './src/screens/AllCategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CategoryDetails from './src/screens/CategoryDetails';
import MealDetails from './src/screens/MealDetails';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from './src/screens/FavouriteScreen';
import CustomDrawer from './src/components/CustomDrawer';
import FavMealContextProvider from './src/store/context/Contex';
import {Provider} from 'react-redux';
import Store from './src/store/redux/Store';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerRouter = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerStyle: {backgroundColor: '#714209'},
        headerTintColor: 'white',
        drawerActiveTintColor: 'black',
        drawerActiveBackgroundColor: '#C29A5D',
        drawerInactiveTintColor: 'white',
        headerRight: () => {
          <TouchableOpacity>
            <Text style={{color: 'white'}}>FAV</Text>
          </TouchableOpacity>;
        },
      }}>
      <Drawer.Screen
        name="CategoriesAll"
        component={AllCategoryScreen}
        options={{title: 'Categories'}}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        // options={{ drawerIcon: () => <Text style={{color: 'white'}}>#</Text> }}
      />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      {/*<FavMealContextProvider>*/}
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
              headerStyle: {backgroundColor: '#714209'},
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerRouter}
              options={{title: 'Categories', headerShown: false}}
            />
            <Stack.Screen
              name="CategoryDetails"
              component={CategoryDetails}
              // options={{title: 'Meals Overview'}}
            />
            <Stack.Screen name="mealDetails" component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavMealContextProvider>*/}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
