import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  TopicCreateheader: {
    backgroundColor: 'black',
    flexDirection: 'row',
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    flex: 0.8,
    marginBottom: 10,
  },
  TopicCreatepublicarDiv: {
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    flex: 1,
  },
  TopicCreatepublicarText: {
    marginTop: 2.5,
    marginRight: 20,
    color: 'white',
    fontSize: 15,
    fontWeight: '100',
  },
  TopicCreatebackButton: {
    padding: 10,
  },
  TopicCreateUserDiv: {
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 1,
    marginBottom: 30,
    width: width / 1.2,
  },
  TopicCreateimgUser: {
    width: width / 5,
    height: width / 5,
    borderRadius: 50,
  },
  TopicCreatenameUser: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 5,
  },
  TopicCreatetopicComment: {
    backgroundColor: '#D6DADF',
    borderRadius: 10,
    height: height / 2.1,
    width: width / 1.2,
    alignSelf: 'center',
    textAlignVertical: 'top',
    paddingLeft: 20,
    paddingTop: 10,
  },
  TopicCreatetituloTopic: {
    backgroundColor: '#D6DADF',
    borderRadius: 10,
    height: height / 15,
    paddingLeft: 20,
  },
  TopicCreatetituloDiv: {
    backgroundColor: 'skyblue',
    marginBottom: height / 20,
    borderRadius: 10,
    width: width / 1.2,
    alignSelf: 'center',
  },
  TopicCreatecontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flex: 8,
    width,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  TopicCreatemasterView: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flex: 1,
    width,
    alignSelf: 'center',
  },
  TopicCreatescrollView: {
    height: height / 16,
    marginLeft: 10,
  },
  TopicCreatescrollDiv: {
    width: width / 1.2,
    alignSelf: 'center',
    backgroundColor: '#19BB53',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  TopicCreateicon2: {
    marginLeft: 5,
  },
  UserDiv: {
    flexDirection: 'row',
    flex: 0.6,
    marginTop: height / 50,
  },
  imgUser: {
    width: width / 5,
    height: width / 5,
    borderRadius: 50,
  },
  nameUser: {
    fontSize: 18,
    fontWeight: '400',
    paddingTop: 5,
    paddingLeft: 10,
  },
  dataTopic: {
    fontSize: 12,
    fontWeight: '200',
    paddingLeft: 10,
    paddingTop: 0,
  },
  topicDiv: {
    flexDirection: 'column',
    alignContent: 'space-between',
    flex: 1.4,
  },
  topicDivTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  scrollViewDescription: {
    marginTop: 5,
    maxHeight: height / 8,
  },
  imgDescription: {
    alignSelf: 'center',
    width: width / 1.2,
    height: width / 1.2,
    margin: 10,
  },
  topicDescriptionInput: {
    flex: 1,
  },
  deleteButton: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    margin: 10,
    marginBottom: 0,
  },
  saveButton: {
    backgroundColor: '#D8A3E0',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    margin: 10,
    height: width / 12,
    width: width / 4,
    borderRadius: 10,
  },
  saveButtonText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  topicDivDescription: {
    fontSize: 12,
    fontWeight: '400',
    paddingTop: 20,
  },
  topicContainer: {
    flexDirection: 'row',
    flex: 6,
    backgroundColor: '#D6DADF',
    maxHeight: height / 20,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topicDivLikes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  shareIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  commentsBarDiv: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
  },
  commentsListDiv: {
    flex: 5,
    backgroundColor: '#D8A3E0',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  commentsBar: {
    flex: 5,
    backgroundColor: '#D8A3E0',
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  commentsBarText: {
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'flex-start',
    paddingLeft: width / 10,
    paddingTop: 12,
  },
  commentsBarIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  commentsList: {
    flex: 1,
    backgroundColor: '#D6DADF',
  },
  commentIcon: {
    flexDirection: 'row',
  },
  commentItemDiv: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignSelf: 'center',
    width: width / 1.1,
    height: height / 7,
    marginVertical: 5,
    borderRadius: 5,
    paddingTop: 10,
    paddingLeft: 10,
  },
  container: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    width: width / 1.2,
    height,
    alignSelf: 'center',
  },
  containerMaster: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    width,
    height,
  },
  commentContent: {
    flexDirection: 'column',
    alignContent: 'center',
    alignSelf: 'center',
    padding: 15,
  },
  commentDescriptionInput: {
    backgroundColor: 'white',
    height: height / 5,
    width: width / 1.2,
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
  },
});
export default styles;
