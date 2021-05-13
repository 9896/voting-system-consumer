<!--This component displays relevant information concerning a particular participant of an election -->
<template>
  <!-- Page Content -->
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">Participant Details</h1>
          <img
            src="../../assets/prof.png"
            class="img-fluid prof"
            alt="..."
            height="auto"
            width="100%"
          />

          <ul class="list-group list-group-flush">
            <li class="list-group-item list-header">
              <span class="lg header">Participant Details</span>
            </li>

            <li class="list-group-item">
              <span class="lg">Name :</span> Pastor Pious
            </li>
            <li class="list-group-item">
              <span class="lg">Vying For :</span> Sanitation and cleanliness
            </li>
            <li class="list-group-item">
              <span class="lg">State of Election :</span> PreActive
            </li>
            <li class="list-group-item">
              <span class="lg">Number of Votes :</span
              ><span
                class="badge badge-primary vb"
                style="background-color: blue"
                >23</span
              >
            </li>
            <li class="list-group-item">
              <span class="lg">Manifesto :</span> Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Est facilis ipsam sunt atque numquam
              fugiat accusamus aperiam quibusdam neque pariatur! Error
              exercitationem explicabo minima ipsum debitis est mollitia
              necessitatibus esse?
            </li>
            <li class="list-group-item">
              <span class="lg">Faculty :</span> Science
            </li>
            <li class="list-group-item">
              <span class="lg">Course :</span> Computer Science
            </li>
            <li class="list-group-item"><span class="lg">Year :</span> III</li>
            <li class="list-group-item">
              <span class="lg">Semester :</span> I
            </li>
          </ul>
          <!-- list group holding vote relevant information -->
        </div>
        <!-- /.col-lg-12 -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </div>
</template>

<script>
export default {
  name: "Participant",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lg {
  width: 130px;
  display: inline-block;
  text-align: right;
  font-weight: bold;
}
.list-header{
text-align: center;

}
.vb {
  background-color: blue;
}

.prof {
  border-radius: 50%;
  border: black solid;
  max-width: 100px;
  margin-bottom: 20px;
  padding: 5px;
}
</style>
