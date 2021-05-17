<template>
  <!-- Page Content -->
  <!-- This page will hold the enformation needed to create a certain election-->
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">Create An Election</h1>
          <form role="form">
            <div class="form-group">

              <p v-if="res == 'error'" style="color:red">
                Please check your input values
              </p>
              <p v-else-if="res == 'success'" style="color:green">
                Successfully added Election
              </p>

              <label>Post</label>
              <input
                class="form-control"
                id="election_title"
                v-model="election_title"
              />
            </div>

            <div class="form-group">
              <label>Post Code</label>
              <input
                class="form-control"
                id="election_title_code"
                v-model="election_title_code"
              />
            </div>

            <div class="form-group">
              <label>Valid Applicant</label>
              <div class="radio">
                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="any"
                    value="option1"
                    checked
                    @click="showInputElement"
                  />Any Student
                </label>
              </div>
              <div class="radio">
                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="facultySpecific"
                    value="option2"
                    @click="showInputElement"
                  />Faculty Specific
                </label>
              </div>
              <div class="radio">
                <label>
                  <input
                    type="radio"
                    name="optionsRadios"
                    id="courseSpecific"
                    value="option3"
                    @click="showInputElement"
                  />Course Specific
                </label>
              </div>
            </div>

            <div class="form-group" id="facultyInput" hidden>
              <label>Applicant's Faculty</label>
              <select class="form-control" id="faculty" v-model="faculty">
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
                <option value="Law">Law</option>
              </select>
            </div>

            <div class="form-group" id="courseInput" hidden>
              <label>Applicant's Department</label>
              <select class="form-control" id="department" v-model="department">
                <option value="Computer Science">Computer Science</option>
                <option value="BSC Law">BSC Law</option>
                <option value="BSC Fashion and Design">Fashion and Design</option>
              </select>
            </div>

            <div class="form-group">
              <label>Applicant Qualifications</label>
              <textarea
                class="form-control"
                rows="3"
                id="election_credentials"
                v-model="election_credentials"
              ></textarea>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-12">
                  <label>Application Period</label>
                </div>
                <div class="col-md-6">
                  <label>Start</label>
                  <input
                    class="form-control"
                    id="application_start"
                    placeholder="YYYY-MM-DD"
                    v-model="application_start"
                  />
                </div>
                <div class="col-md-6">
                  <label>End</label>
                  <input
                    class="form-control"
                    id="application_end"
                    placeholder="YYYY-MM-DD"
                    v-model="application_end"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-12">
                  <label>Election Period</label>
                </div>
                <div class="col-md-6">
                  <label>Start</label>
                  <input
                    class="form-control"
                    id="election_start"
                    placeholder="YYYY-MM-DD"
                    v-model="election_start"
                  />
                </div>
                <div class="col-md-6">
                  <label>End</label>
                  <input
                    class="form-control"
                    id="election_end"
                    placeholder="YYYY-MM-DD"
                    v-model="election_end"
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Election State</label>
              <select class="form-control" id="state" v-model="state">
                <option value="pre_active" selected>PreActive</option>
                <option value="active">Active</option>
              </select>
            </div>

            <a
              class="btn btn-primary btn-lg"
              v-on:click="postElection()"
            >Submit</a>
          </form>
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
  name: "CreateElection",
  data() {
    return {
      access_token: this.$store.getters.getAccessToken,
      msg: "Welcome to Your Vue.js App",
      application_end: "",
      application_start: "",
      election_credentials: "",
      election_end: "",
      election_start: "",
      election_title: "",
      election_title_code: "",
      department: "",
      faculty: "",
      state: "",
      res: undefined
    };
  },
  methods: {
    /**
     * This method posts the election information
     */
    postElection: function () {
      console.log(
        this.application_end +
          this.application_start +
          this.election_credentials +
          this.election_end +
          this.election_start +
          this.election_title +
          this.election_title_code +
          this.department +
          this.faculty +
          this.state +
          this.access_token
      );
      // const headers = {
      //   "Authorization": "Bearer " + this.$store.getters.getAccessToken,
      //   "Accept": "*/*"
      // };
      this.$axios
        .post(
          "http://127.0.0.1:8002/api/elections",
          {
            application_end: this.application_end,
            application_start: this.application_start,
            election_credentials: this.election_credentials,
            election_end: this.election_end,
            election_start: this.election_start,
            election_title: this.election_title,
            election_title_code: this.election_title_code,
            department: this.department,
            faculty: this.faculty,
            state: this.state,
          },
          {
            headers:{
                Authorization: "Bearer " + this.access_token,
            }
          }
        )
        .then((response) => {
          let info = response["data"];
          this.res = (Object.prototype.hasOwnProperty.call(info, 'Error') == true) ? "error" : "success";
         // console.log(this.res);
          
        })
        .catch((response) => {
          console.log(response);
        });
    },
    /**
     * This method either hides or shows the relevant input element depending on who can apply for certain post
     */
    showInputElement(event) {
      var id = event.target.getAttribute("id");
      console.log(id);
      if (id == "facultySpecific") {
        this.confirmHidden("facultyInput", "courseInput");
      } else if (id == "courseSpecific") {
        this.confirmHidden("courseInput", "facultyInput");
      } else if (id == "any") {
        //document.getElementById("facultyInput").setAttribute("hidden");
        //document.getElementById("courseInput").setAttribute("hidden");
        var facultyInput = document.getElementById("facultyInput");
        var courseInput = document.getElementById("courseInput");
        if (
          facultyInput.getAttribute("hidden") == null ||
          courseInput.getAttribute("hidden") == null
        ) {
          facultyInput.setAttribute("hidden", "hidden");
          courseInput.setAttribute("hidden", "hidden");
        }
      }
    },
    /**
     * This is simply a helper method used by the showInputElement method
     */
    confirmHidden(inputElement, rivalInputElement) {
      var hiddenValue = document
        .getElementById(inputElement)
        .getAttribute("hidden");
      console.log(hiddenValue);
      if (hiddenValue == null) {
        if (
          document.getElementById(rivalInputElement).getAttribute("hidden") ==
          null
        ) {
          document
            .getElementById(rivalInputElement)
            .setAttribute("hidden", "hidden");
        }
        return;
      } else {
        document.getElementById(inputElement).removeAttribute("hidden");

        if (
          document.getElementById(rivalInputElement).getAttribute("hidden") ==
          null
        ) {
          document
            .getElementById(rivalInputElement)
            .setAttribute("hidden", "hidden");
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>