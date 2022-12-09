import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";

import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
import { Profile } from "./Profile";
import { Post } from "./Post";
import { Create } from "./Create";

const MainTab = createBottomTabNavigator();

const AuthStack = createNativeStackNavigator();
export const Navigation = () => {
  const useRoute = (isAuth) => {
    if (!isAuth) {
      return (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              title: "Login",
            }}
          />
          <AuthStack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Register",
              headerShown: false,
            }}
          />
        </AuthStack.Navigator>
      );
    }
    return (
      <MainTab.Navigator>
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Octicons name="image" size={size} color={color} />
            ),
          }}
          name="Post"
          component={Post}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Octicons name="plus-circle" size={size} color={color} />
            ),
          }}
          name="Create"
          component={Create}
        />
        <MainTab.Screen
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Octicons name="people" size={size} color={color} />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </MainTab.Navigator>
    );
  };
  const routing = useRoute(null);
  return <NavigationContainer>{routing}</NavigationContainer>;
};
