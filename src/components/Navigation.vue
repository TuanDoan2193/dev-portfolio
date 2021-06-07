<template>
  <div class="navbar">
    <div id="nav-items" class="nav-items">
      <router-link to="/">Home</router-link>
      <router-link to="/works">Works</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "Navigation",
  mounted() {
    gsap.from("#nav-items", {
      y: 50,
      duration: 0.5,
    });
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 50px;
  overflow: hidden;
  width: 100%;
}
.nav-items {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  font-size: 1.2rem;

  @media screen and (min-width: 576px) {
    width: 50%;
  }

  @media screen and (min-width: 992px) {
    width: 30%;
  }
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;

    &.router-link-active {
      color: #008c76ff;
      font-weight: bold;
    }
  }
}
</style>
