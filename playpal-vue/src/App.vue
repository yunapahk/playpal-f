<template>
  <v-app>
    <header>
      <v-app-bar :elevation="2" class="thin-navbar">

        <!-- Hamburger Menu -->
        <v-btn icon @click="drawer = !drawer" class="d-md-none burger-btn">
          🍔
        </v-btn>
        
        <!-- Home button -->
        <router-link :to="{ name: 'Dashboard' }">
          <v-btn color="white">
            <i class="fa-solid fa-house small-icon" style="color: #ffffff;"></i>
          </v-btn>
        </router-link>

        <v-spacer></v-spacer>
        
        <!-- Rest of the buttons - Hidden on small screens -->
        <div class="d-none d-md-flex">
          <router-link :to="{ name: 'Dashboard' }">
            <v-btn color="white" text>Home</v-btn>
          </router-link>
          <router-link :to="{ name: 'create' }">
            <v-btn color="white">
              <i class="fa-solid fa-plus small-icon" style="color: #ffffff;"></i>
            </v-btn>
          </router-link>
        </div>

      </v-app-bar>
      
      <!-- Navigation Drawer for mobile screens -->
      <v-navigation-drawer v-model="drawer" app temporary>
        <v-list>
            <v-list-item>
                <v-list-item-content>
                    <router-link :to="{ name: 'dashboard' }">
                        <v-btn color="white" text class="elevation-0 mt-2">Dashboard</v-btn>
                    </router-link>
                </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>

    </header>

    <div class="content">
      <router-view></router-view>
    </div>
    
    <!-- Footer Component -->
    <Dashboard />
    <Footer />
  </v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from '@/components/Footer.vue';
import DogsView from '@/components/DogsView.vue';
import Dashboard from '@/components/Dashboard.vue';


export default {
  components: {
    DogsView,
    Footer,
    Dashboard
},
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped>

header {
  background-color: #f9f9f9;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.v-app-bar.thin-navbar {
  height: 55px;
  display: flex;
  align-items: center;
  background: linear-gradient(to bottom, rgb(118, 82, 196), rgb(88, 62, 176));
  margin-bottom: 20px;
}


.v-btn {
  padding: 0px 50px 50px 50px;
}

.burger-btn {
  margin-bottom: 8px;
}

router-link {
  text-decoration: none;
  color: #333;  
  padding: 0.5em 1em;
  border-radius: 0.5em;
  transition: background-color 0.2s;
}

router-link:hover {
  background-color: #f5f5f5;
}

router-link.active {
  background-color: #e0e0e0;
}

main {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

.small-icon {
  font-size: 16px;
}
</style>
