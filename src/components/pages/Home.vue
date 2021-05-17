<template>
  <div class="wrapper" id="app">
    <!-- Sidebar  -->
    <nav id="sidebar">
      <div class="sidebar-header top">
        <h3 v-if="(this.$store.getters.getUser.state == 'admin')">Admin Panel</h3>
        <h3 v-else>Student's Panel</h3>
        <strong>BS</strong>
      </div>

      <ul class="list-unstyled components">
        <!-- <li class="active">
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <i class="fas fa-home"></i>
            Home
          </a>
          <ul class="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-briefcase"></i>
            About
          </a>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <i class="fas fa-copy"></i>
            Pages
          </a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li> -->

        <li>
          <router-link to="/createElection" v-if="(this.$store.getters.getUser.state == 'admin')">
            <i class="fa fa-plus"></i> Create Election
          </router-link>
        </li>
        <li>
          <router-link to="/preActiveElections">
            <i class="fa fa-hourglass-start"></i> PreActive Elections
          </router-link>
        </li>
        <li>
          <router-link to="/activeElections">
            <i class="fa fa-hourglass-half"></i> Active Elections
          </router-link>
        </li>
        <li>
          <router-link to="/postActiveElections">
            <i class="fa fa-hourglass-end"></i> PostActive Elections
          </router-link>
        </li>
        <li>
          <!--
            Note that the v-if esures that the route is only visible to an admin and not students Further modification
            is required to further secure the route as well
           -->
          <router-link to="/participationRequests" v-if="(this.$store.getters.getUser.state == 'admin')">
            <i class="fa fa-envelope"></i> Participation Requests
            <span class="badge badge-primary vb" style="background-color: blue"
              >23</span
            >
          </router-link>
        </li>
      </ul>
    </nav>
    <!-- Page Content -->
    <div id="content" style="width: 100%">
      <!-- We'll fill this with dummy content -->

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>
          {{userName}}
        <p class="logout" v-on:click="logOut()">
        <router-link :to="{name: 'Login'}">
            Log out
        </router-link>
        </p>
        </div>
      </nav>

      <p></p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import $ from "jquery";

// import Vue from 'vue'

// import Echo from 'laravel-echo'
// Vue.prototype.Echo = Echo

// import Pusher from 'pusher'
// Vue.prototype.Pusher = Pusher

// this.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: 'thekey1',
//   cluster: 'mt1',//don't seem necessary(dsn)~
//   forceTLS: false,//true,dsnsss~
//   wsHost: 'http://127.0.0.1:8002', //added
//   wsPort: 6001,//added
//   disableStats: true,//added
//   //scheme: process.env.MIX_PUSHER_SCHEME//added
//   });

export default {
  name: "Home",

  data: function () {
    return {
      access_token: this.$store.getters.getAccessToken,
      userName: this.$store.getters.getUser.email,
      users_data: undefined
    };
  },
  methods: {
    // redirectToLogin(){
    //   this.$router.push({ name: 'Login' });
    // },
    logOut: function(){
      this.$store.commit("ADD_USER", undefined);
      this.$store.commit("ADD_ACCESS_TOKEN", false);
    },
   
    get_users_data: function () {
      this.$axios
        .get("http://127.0.0.1:8002/api/users", {
          headers: {
            Authorization: "Bearer " + this.access_token,
          },
        })
        .then((response) => {
          this.user_data = response["data"];
          return this.user_data;
        })
        .catch((response) => {
          console.log(response);
        });
        console.log(this.user_data)
    },
  },
  mounted() {
   
  },
};

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  position: relative;
  top: -59px;
}

.components li{
margin-bottom:25px ;
}

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}
/* sidebar background color */
#sidebar {
  max-width: 250px;
  min-height: 100vh;
  color: white;
  background-color: #4e73df;
}

#sidebar a {
  color: white;
}

.sidebar-header.top {
  padding: 30px;
}

.logout {
  text-align: left;
}

.sidebar li {
  margin-top: 10px;
  border: 1px solid grey;
}

.sidebar li:first-child {
  margin-top: 0;
}

/* Shrinking the sidebar from 250px to 80px and center aligining its content*/
#sidebar.active {
  min-width: 80px;
  max-width: 80px;
  text-align: center;
}

/* Toggling the sidebar header content, hide the big heading [h3] and showing the small heading [strong] and vice versa*/
#sidebar .sidebar-header strong {
  display: none;
}
#sidebar.active .sidebar-header h3 {
  display: none;
}
#sidebar.active .sidebar-header strong {
  display: block;
}

#sidebar ul li a {
  text-align: left;
}

#sidebar.active ul li a {
  padding: 20px 10px;
  text-align: center;
  font-size: 0.85em;
}

#sidebar.active ul li a i {
  margin-right: 0;
  display: block;
  font-size: 1.8em;
  margin-bottom: 5px;
}

/* Same dropdown links padding*/
#sidebar.active ul ul a {
  padding: 10px !important;
}

/* Changing the arrow position to bottom center position, 
   translateX(50%) works with right: 50% 
   to accurately  center the arrow */
#sidebar.active .dropdown-toggle::after {
  top: auto;
  bottom: 10px;
  right: 50%;
  -webkit-transform: translateX(50%);
  -ms-transform: translateX(50%);
  transform: translateX(50%);
}

@media (max-width: 768px) {
  /* 80px and its content aligned to centre. Pushing it off the screen with the
       negative left margin
    */
  #sidebar.active {
    min-width: 80px;
    max-width: 80px;
    text-align: center;
    margin-left: -80px !important;
  }

  /* Reappearing the sidebar on toggle button click */
  #sidebar {
    margin-left: 0;
  }

  /* Toggling the sidebar header content, 
       hide the big heading [h3] and showing the small heading [strong] and vice versa
    */
  #sidebar .sidebar-header strong {
    display: none;
  }
  #sidebar.active .sidebar-header h3 {
    display: none;
  }
  #sidebar.active .sidebar-header strong {
    display: block;
  }

  /* Downsize the navigation links font size */
  #sidebar.active ul li a {
    padding: 20px 10px;
    font-size: 0.85em;
  }

  #sidebar.active ul li a i {
    margin-right: 0;
    display: block;
    font-size: 1.8em;
    margin-bottom: 5px;
  }

  /* Adjust the dropdown links padding*/
  #sidebar.active ul ul a {
    padding: 10px !important;
  }

  /* Changing the arrow position to bottom center position, 
      translateX(50%) works with right: 50% 
      to accurately  center the arrow */
  .dropdown-toggle::after {
    top: auto;
    bottom: 10px;
    right: 50%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
  }
}
</style>
