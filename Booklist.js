import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import {List, ListItem} from 'react-native-elements';
export default class BookList extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('http://4ea84dff.ngrok.io/actions/book')
        .then(res => res.json())
        .then(data => {
            this.setState({ data: data.data })
        })
    }

    render() {
        return (
            <ScrollView style ={{flex: 1}}>
                {this.state.data.length > 0 ?
                    this.state.data.map((l, i) => (
                        <ListItem
                        key={i}
                        title={l.title}
                        subtitle={l.author}
                        onPress = {() => Alert.alert(i.toString())}
                        />
                    )) 
                : null}
            </ScrollView>
        )
    }
}