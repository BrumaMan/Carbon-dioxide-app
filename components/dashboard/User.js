import React from 'react';
import { Pressable } from 'react-native'
import Icons from '@expo/vector-icons/Feather';

const User = ({ navigation }) => {
    return (
        <Pressable>
            <Icons name="user" size={25}></Icons>
        </Pressable>
        
    )
}

export default User