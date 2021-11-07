<template>
  <form v-on:submit.prevent="login">
    <div class="container">
      <label for="email"><b>E-mail</b></label>
      <input type="email" v-model="email" placeholder="Enter e-mail" name="email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" v-model="password" placeholder="Enter password" name="password" required>
        
      <button type="submit" value="login">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
      <br>
      <label>
        Not yet subscribed ? <a href="/registration" rel="noopener">Registration</a>
      </label>
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors"  v-bind:key="error">{{ error }}</li>
        </ul>
      </p>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Login extends Vue {
  private password = ""
  private email = ""
  private errors: string[] = []

  data() {
    return { 
      password : '',
      email : '',
      errors: []
    }
  }

  public login() : void {
    console.log(this.password);
    console.log(this.email);
    //e.preventDefault()
    if (this.password.length > 0) {
      axios.post('http://localhost:9000/api/v1/users/signin', {
          'email': this.email,
          'password': this.password
      })
      .then(response => {
        if (response.data.error) {
          this.errors.push(response.data.error);
        } else {
          this.$emit('loggedIn')
          localStorage.setItem('user', JSON.stringify(response.data))
          this.$router.push('about');
        }
      })
      .catch(function (error) {
          console.error(error.response);
      });
    }
  }
}
</script>

<style scoped lang="scss">

/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password], input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
