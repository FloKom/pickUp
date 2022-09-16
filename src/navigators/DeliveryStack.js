import ClientCart from "../screens/appscreens/ClientCart";
import PaymentSuccess from "../screens/appscreens/DeliveryConfirmed";
import Home from "../screens/appscreens/Home";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PageTitle, Colors} from "../components/styles";
const {secondary, primary} = Colors;
const Stack = createNativeStackNavigator();
export default function DeliveryStack(){
    return(
    <Stack.Navigator screenOptions={({navigation})=>({
        headerShown:true,
        headerTitleAlign: "center",
        headerShadowVisible:false,
        headerStyle:{
            backgroundColor: primary
          },
    })
    }>
        <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
                headerTitle:(props)=><PageTitle stack={true} {...props}/>,
            }}
            />
        <Stack.Screen 
            name="Delivery Confirmed" 
            component={PaymentSuccess}
            options={{
                // title: 'All Packs',
                headerTitle:(props)=><PageTitle stack={true} {...props}/>,
            }}
            />
        <Stack.Screen 
            name="Cart" 
            component={ClientCart}
            options={({ route }) => ({ 
                // title: route.params.name,
                headerTitle:(props)=><PageTitle stack={true} {...props}/>,
            })}
            />
    </Stack.Navigator>
)}