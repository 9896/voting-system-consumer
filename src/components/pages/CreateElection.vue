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
              <label>Post</label>
              <input class="form-control" id="post" />
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
              <select class="form-control" id="faculty">
                <option value="">Science</option>
                <option value="">Arts</option>
                <option value="">Human Resource</option>
              </select>
            </div>

            <div class="form-group" id="courseInput" hidden>
              <label>Applicant's Course</label>
              <select class="form-control" id="course">
                <option value="">Computer Science</option>
                <option value="">Education</option>
                <option value="">Fashion and Design</option>
              </select>
            </div>

            <div class="form-group">
              <label>Applicant Qualifications</label>
              <textarea
                class="form-control"
                rows="3"
                id="qualifications"
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
                    type="date"
                    class="form-control"
                    id="applicationStart"
                  />
                </div>
                <div class="col-md-6">
                  <label>End</label>
                  <input type="date" class="form-control" id="applicationEnd" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Election date</label>
              <input
                type="date"
                class="form-control"
                rows="3"
                id="electionDate"
              />
            </div>

            <div class="form-group">
              <label>Announcement date</label>
              <input
                type="date"
                class="form-control"
                rows="3"
                id="announcementDate"
              />
            </div>

            <input type="submit" class="btn btn-primary" />
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
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
      /**
       * This method either hides or shows the relevant input element depending on who can apply for certain post
       */
    showInputElement(event) {
      var id = event.target.getAttribute("id");
      var hiddenValue;
      console.log(id);
      if (id == "facultySpecific") {
        this.confirmHidden("facultyInput","courseInput");
      } else if (id == "courseSpecific") {
        this.confirmHidden("courseInput", "facultyInput");
      } else if (id == "any") {
        //document.getElementById("facultyInput").setAttribute("hidden");
        //document.getElementById("courseInput").setAttribute("hidden");
        var facultyInput = document.getElementById("facultyInput");
        var courseInput = document.getElementById("courseInput");
        if( facultyInput.getAttribute("hidden") == null || courseInput.getAttribute("hidden") == null){
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
          document.getElementById(rivalInputElement).getAttribute("hidden") == null
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