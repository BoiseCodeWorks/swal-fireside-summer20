<template>
  <div class="QuestionComponent col-4">
    <div class="card text-center">
      <i class="fa fa-times" aria-hidden="true" @click="deleteQuestion(questionProp.id)"></i>
      {{questionProp}}
      <div class="card-header">{{questionProp.Time}} Seconds</div>
      <div class="card-body">
        <h5 class="card-title">{{questionProp.Points}} Points</h5>
        <p class="card-text">{{questionProp.Description}}</p>
        <button class="btn btn-primary">Option1</button>
        <button class="btn btn-secondary">Option2</button>
        <button class="btn btn-info">Option3</button>
        <button class="btn btn-success">Option4</button>
      </div>
      <div class="card-footer text-muted">2 days ago</div>
    </div>
  </div>
</template>


<script>
import NotificationService from "../NotificationService.js";
export default {
  name: "QuestionComponent",
  components: {},
  data() {
    return {};
  },
  props: ["questionProp"],
  computed: {},
  methods: {
    async deleteQuestion(id) {
      if (await NotificationService.confirmAction()) {
        this.$store.dispatch("deleteQuestion", id);
      }
    }
  }
};
</script>


<style scoped>
</style>