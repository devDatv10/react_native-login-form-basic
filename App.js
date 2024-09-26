import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "./screens/CartScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Trang chủ",
            tabBarIcon: ({ color }) => <Ionicons name="person" size={20} color={color} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: "Giỏ hàng",
            tabBarIcon: () => <Ionicons name="cart" size={20} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Cài đặt",
            tabBarIcon: () => <Ionicons name="settings" size={20} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
