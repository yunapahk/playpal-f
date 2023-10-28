<template>
  <div class="auth-container">
    <!-- Toggle between Signup and Login using title-text -->
    <div class="title-text">
      <div class="title login" :class="{ active: !showSignup }" @click="showSignup = false">Welcome Back</div>
      <div class="title signup" :class="{ active: showSignup }" @click="showSignup = true">Hey New Pal</div>
    </div>

    <!-- Login Form -->
    <div v-if="!showSignup" class="form-container login-form">
      <h1>Login Form</h1>
      <form action="/login" method="post">
        <div class="input-group">
          <input type="text" name="username" placeholder="username" required />
        </div>
        <div class="input-group">
          <input type="password" name="password" placeholder="password" required />
        </div>
        <input type="submit" value="Login" class="submit-button" />
        <div class="signup-link">Create an account? <a @click="showSignup = true">Signup now</a></div>
      </form>
    </div>

    <!-- Signup Form -->
    <div v-if="showSignup" class="form-container signup-form">
      <h3>Signup Form</h3>
      <form action="/signup" method="post" @submit.prevent="handleSignupSubmit">
        <div class="input-group">
          <input type="text" name="username" id="username" placeholder="username" required />
        </div>
        <div class="input-group">
          <input type="password" name="password" id="password" placeholder="password" required />
        </div>
        <input type="submit" value="Signup" class="submit-button" />
        <div class="signup-link">Already have an account? <a @click="showSignup = false">Login now</a></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSignup: false,
    };
  },
  methods: {
    handleSignupSubmit() {
      setTimeout(() => {
        this.showSignup = false;
      }, 1000);
    }
  }
};
</script>

<style scoped>
.title-text {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.title {
  margin: 0 15px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.title.login.active {
  color: #007BFF;
}

.title.signup.active {
  color: #FF5733; 
}

.form-container.login-form h1, .form-container.signup-form h3 {
  text-align: center;
}

.signup-link {
  text-align: center;
  margin-top: 10px;
}
</style>
