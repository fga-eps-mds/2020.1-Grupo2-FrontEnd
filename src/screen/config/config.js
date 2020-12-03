import React, { useState } from 'react';
import {
    View,
    Switch,
    Text,
} from 'react-native';
import Header from './header';
import styles from './styles';

export default function Config({ navigation }){
    const [commentIsEnabled, setCommentIsEnabled] = useState(false);
    const [topicIsEnabled, setTopicIsEnabled] = useState(false);
    const [likeIsEnabled, setLikeIsEnabled] = useState(false);
    const commentToggleSwitch = () => setCommentIsEnabled(previousState => !previousState);
    const topicToggleSwitch = () => setTopicIsEnabled(previousState => !previousState);
    const likeToggleSwitch = () => setLikeIsEnabled(previousState => !previousState);

    return(
        <View style={styles.containerView}>
            <Header/>
            <View style={styles.notificationContainer}>
                <View style={styles.notification}>
                    <Text style={styles.notificationText}>Notificação de novo comentário</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={commentIsEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={commentToggleSwitch}
                        value={commentIsEnabled}
                    />
                </View>
                <View style={styles.notification}>
                    <Text style={styles.notificationText}>Notificação de novo tópico</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={topicIsEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={topicToggleSwitch}
                        value={topicIsEnabled}
                    />
                </View>
                <View style={styles.notification}>
                    <Text style={styles.notificationText}>Notificação de likes e dislikes</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={likeIsEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={likeToggleSwitch}
                        value={likeIsEnabled}
                    />
                </View>
            </View>
            
        </View>
    )
}
