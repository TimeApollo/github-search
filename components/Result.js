import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet, Image, Linking } from 'react-native';

class Result extends React.Component{

    render(){
        const info = this.props.info
        return(
            <View style={styles.result}>
                <TouchableHighlight style={styles.touch} onPress={() => Linking.openURL(info.html_url)}>
                    <View style={styles.touch}>
                        <Text>{info.full_name}</Text>
                        <View style={styles.container}>
                            <Image source={{uri: `${info.owner.avatar_url}`}} style={styles.avatar}/>
                            <Text style={styles.name}>{info.owner.login}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    result: {
        marginTop: '2%',
        backgroundColor: '#BBBBBB',
        height: 80,
    },
    avatar: {
        width: 40,
        height: 40,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        marginLeft: '5%'
    },
    touch: {
        flex: 1
    }
})

export default Result
    