<template>
  <div class="home container-fluid">
    <div class="row" @click="getQuestions">
      <div class="col-1">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="col-1">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="col-10 align-self-center">
        <HelloWorld msg="elcome to who wants to win money" />
      </div>
    </div>
    <button class="btn btn-danger" @click="showCreate = !showCreate">Create a Question</button>
    <div class="row">
      <!-- questions go here -->
      <create-component v-if="showCreate" />
      <question-component v-for="q in questions" :key="q.id" :questionProp="q" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import QuestionComponent from "@/components/QuestionComponent";
import CreateComponent from "@/components/CreateComponent";
export default {
  name: "Home",
  data() {
    return {
      showCreate: false
    };
  },
  components: {
    HelloWorld,
    QuestionComponent,
    CreateComponent
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    }
  },
  methods: {
    getQuestions() {
      this.$store.dispatch("getQuestions");
    }
  }
};
</script>
