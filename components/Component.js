import { Text, View } from 'react-native';

export default function CustomFunction({name}){
    return(
        <View>
        <Text>
            Hello {name}
        </Text>
        </View>
    )
}