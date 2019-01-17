import React, {Component} from 'react';
import {Platform, Button, Text, View} from 'react-native';


export class MyCallKitScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Button onPress={()=>{}}>make call</Button>
            </View>
        );
    }
}


