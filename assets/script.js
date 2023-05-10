var title = 'Here are the topics we learned through Prework:';

console.log(title);

var topics = ['HTML' , 'CSS', 'Git', 'JavaScript']

function listTopics() {
    for (i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  };
};

listTopics();

function selectTopic() {
    let topic = topics[Math.floor(Math.random() * topics.length)]
    if (topic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (topic === 'Git') {
      console.log("Let's study Git!");
    } else if (topic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }


function topicChooser() {
    console.log('Which topic should we study first?');
    selectTopic();

}

topicChooser();