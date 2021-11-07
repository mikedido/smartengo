<template>
  <form v-on:submit.prevent="register">
      <div class="container">
          <label for="username"><b>Username</b></label>
          <input type="text" v-model="username" placeholder="Enter username" name="username" required>
          
          <label for="email"><b>E-mail</b></label>
          <input type="email" v-model="email" placeholder="Enter e-mail" name="email" required>

          <label for="psw"><b>Password</b></label>
          <input type="password" v-model="password" placeholder="Enter password" name="psw" required>

          <label for="psw"><b>Confirm password</b></label>
          <input type="password" v-model="confirmPassword" placeholder="Enter password" name="cpsw" required>

          <button type="submit">Create Account</button>
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
export default class Register extends Vue {
  //@Prop() private msg!: string;
  private username = ""
  private email = ""
  private password = ""
  private confirmPassword = ""
  private errors: string[] = []

  data() {
    return {
      username: '',
      email : '',
      password : '',
      confirmPassword : '',
      errors : []
    }
  }

  public register() : void {
    console.log('sdsds');
    this.errors = [];

    if ((this.password === this.confirmPassword && this.password.length > 8 ) && (this.validEmail(this.email))) {
      axios.post('http://localhost:9000/api/v1/users/signup', {
        email: this.email,
        username: this.username,
        confirmPassword: this.confirmPassword,
        password : this.password
      })
      .then(response => {
        if (response.data.error) {
          this.errors.push(response.data.error);
        } else {
          localStorage.setItem('user', JSON.stringify(response.data))
          this.$router.push('about');
        }
      })
      .catch(error => this.errors.push(error));
    } else {
      if (this.password !== this.confirmPassword) {
        this.password = "";
        this.confirmPassword = "";

        this.errors.push("Passwords do not match");

      } else if (this.password.length < 8) {
        this.password = "";
        this.confirmPassword = "";

        this.errors.push("Passwords must be longer than 8 caractere");

      } else if (!this.validEmail(this.email)) {
        
        this.errors.push('Email not valid format or not match');
      }
    }
  }
  
  public validEmail(email:string) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
