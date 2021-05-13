<template>
  <div class="container login">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <div class="login-panel panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Please Sign In</h3>
          </div>
          <div class="panel-body">
            <form role="form">
              <fieldset>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="E-mail"
                    name="email"
                    type="email"
                    autofocus
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value=""
                    v-model="password"
                  />
                </div>
                <div class="checkbox">
                  <label>
                    <input
                      name="remember"
                      type="checkbox"
                      value="Remember Me"
                    />Remember Me
                  </label>
                </div>
                <!-- Change this to a button or input when using this as a form -->
                <a
                  href="#"
                  class="btn btn-lg btn-success btn-block"
                  v-on:click="sendCredentials()"
                  >Login</a
                >
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      email: "",
      password: "",
      client_id: undefined,
      secret: undefined,
    };
  },
  methods: {
    sendCredentials: function () {
      console.log(this.email + " " + this.password);

      this.$axios
        .post("http://127.0.0.1:8002/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.secret = response["data"]["secret"];
          this.client_id = response["data"]["client_id"];
          this.get_token();
        })
        .catch((response) => {
          console.log(response);
        });
    },

    get_token: function () {
      this.$axios
        .post("http://127.0.0.1:8002/oauth/token", {
          client_id: this.client_id,
          client_secret: this.secret,
          grant_type: "password",
          username: this.email,
          password: this.password,
          scope: "*",
        })
        .then((response) => {
          this.access_token = response["data"]["access_token"];
          this.$store.commit("ADD_ACCESS_TOKEN", this.access_token);
          var token = this.$store.getters.getAccessToken;
          console.log(token);
          //After token has been confirmed and stored redirect user to Home
          this.$router.push({ name: 'Home' })
          
        })
        .catch((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: relative;
  top: 80px;
}
</style>
