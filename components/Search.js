import React from 'react';
import { FlatList, Text, View, TextInput, StyleSheet } from 'react-native';
import Result from './Result'

class Search extends React.Component{

    state = {
        search: '',
        results: [],
    }

    handleSearch = () => {
        console.log(this.state.search)
        if (!this.state.search) {
            this.setState({results: []})
        }
        // console.log(event)
        const url = `https://api.github.com/search/repositories?q=${this.state.search}`

        fetch(url)
            .then(response => response.json())
            .then(gitJson => {
                this.setState({results: gitJson.items.slice(0,5)})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Search for a Repo</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Github Search Here'
                        onChangeText={(text) => this.setState({search: text}, this.handleSearch)}
                    />
                </View>
                {this.state.results.length ? 
                <FlatList
                    style={styles.results}
                    data={this.state.results}
                    extraData={this.state}
                    renderItem={({item}) => <Result info={item}></Result>}
                    keyExtractor={item => item.id + ''}
                /> :
                null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        width: '90%',
    },
    text: {
        marginTop: '15%'
    },
    inputContainer:{
        borderColor: '#0000FF',
        borderWidth: 3,
        marginTop: '5%',
        height: 50,
    },
    input: {
        height: 44,
        backgroundColor: '#FFFFFF',
    },
    results: {
        marginTop: '3%',
        backgroundColor: '#FFFF',
        flex: 1,
    }
});

export default Search