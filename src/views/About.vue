<template>
  <div class="overlay-wrapper">
    <div class="overlay-1"></div>
    <div class="overlay-2"></div>
    <div class="overlay-3"></div>
  </div>
  <div class="about-overlay"></div>
  <div class="about-wrapper">
    <div class="about-section about-section-bio">
      <div class="img-wrapper">
        <img src="../assets/my_portrait.png" alt="my portrait" />
      </div>
      <div class="general-content">
        <div class="about-section-title">Web developer / Designer</div>
        <div>
          Hi, my name is Tuan Doan. I have always wanted to see the impact of my
          work. And it should be something meaningful and helpful. Instantly I
          am hooked by programming. It provided everything I needed: the
          challenges, the thrill and rewarding feelings. Although I graduated
          with a computer science certificate in Finland, landed a programming
          job, having been working for a few years, I am still learning. There
          are new technologies and updates every day to keep up with.
        </div>
      </div>
    </div>
    <div class="about-section about-section-skill">
      <div class="general-content">
        <div class="about-section-title">Skills</div>
        <div class="skills">
          <div class="skill">
            <div class="skill-title">HTML, CSS, JS</div>
            <div class="skill-bar">
              <div class="skill-progress skill-9"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">React</div>
            <div class="skill-bar">
              <div class="skill-progress skill-9"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">Svelte, VueJS</div>
            <div class="skill-bar">
              <div class="skill-progress skill-8"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">GSAP, SCSS, MUI, Bootstrap</div>
            <div class="skill-bar">
              <div class="skill-progress skill-8"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">Jest</div>
            <div class="skill-bar">
              <div class="skill-progress skill-7"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">MongoDB, S3 Bucket</div>
            <div class="skill-bar">
              <div class="skill-progress skill-7"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">Git, Trello, Jira</div>
            <div class="skill-bar">
              <div class="skill-progress skill-8"></div>
            </div>
          </div>
          <div class="skill">
            <div class="skill-title">Figma, Xd, Illustrator</div>
            <div class="skill-bar">
              <div class="skill-progress skill-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-section about-section-contact">
      <div class="general-content">
        <div class="about-section-title">Contact</div>
        <div class="contact">
          <div class="contact-item">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/00100+Kamppi/@60.1668825,24.9287911,15.5z/data=!4m5!3m4!1s0x46920a34cdd2ff11:0x81fb47b59afa1bfc!8m2!3d60.16758!4d24.9302261"
            >
              <i class="fas fa-home"></i>
              <span>Address: <span>Lönnrotinkatu, Helsinki</span></span>
            </a>
          </div>
          <div class="contact-item">
            <a href="mailto:tuan.doan2193@gmail.com">
              <i class="far fa-envelope"></i>
              <span>Email: <span>tuan.doan2193@gmail.com</span></span>
            </a>
          </div>
          <div class="contact-item">
            <a href="tel:+358504756336">
              <i class="fas fa-mobile-alt"></i>
              <span>Phone: <span>0504756336</span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from "gsap";
export default {
  name: "About",
  mounted() {
    const tlOverlay = gsap.timeline();
    const tlAboutSections = gsap.timeline();
    tlOverlay
      .to(".overlay-1", {
        duration: 0.4,
        y: -1000,
        opacity: 0,
      })
      .to(".overlay-2", {
        duration: 0.4,
        y: -1000,
        opacity: 0,
      })
      .to(".overlay-3", {
        duration: 0.4,
        y: -1000,
        opacity: 0,
      });
    tlAboutSections
      .from(".about-section-bio", {
        duration: 0.5,
        y: 100,
        opacity: 0,
        delay: 1.2,
      })
      .from(".about-section-skill", {
        duration: 0.5,
        y: 100,
        opacity: 0,
      })
      .from(".about-section-contact", {
        duration: 0.5,
        y: 100,
        opacity: 0,
      });
  },
};
</script>
<style lang="scss" scoped>
.about-overlay {
  background: url("../assets/aboutBg.svg");
  width: 100%;
  height: 100%;
  position: absolute;
  max-width: 1440px;
  top: 10%;
  filter: grayscale(1);
}
.about-wrapper {
  width: 100%;
  padding: 30% 5% 5% 5%;
  box-sizing: border-box;

  @media screen and (min-width: 576px) {
    padding: 20% 5% 5% 5%;
  }
  @media screen and (min-width: 768px) {
    padding: 15% 5% 5% 5%;
  }
  @media screen and (min-width: 992px) {
    padding: 10% 5% 5% 5%;
  }

  .about-section {
    width: 100%;
    margin-top: 20px;
    padding: 0 2%;

    box-sizing: border-box;
    background: linear-gradient(180deg, #000, rgba(20, 20, 20, 0.6));
    position: relative;
    border-bottom: 4px solid #008c76ff;
    .img-wrapper {
      box-sizing: border-box;
      width: 100%;
      position: relative;
      padding-bottom: 70px;
      img {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100%;
      }
    }

    .general-content {
      box-sizing: border-box;
      width: 100%;
      font-size: 16px;
      line-height: 25px;
      padding: 20px;
      @media screen and (min-width: 992px) {
        padding: 10px 50px 50px 50px;
      }

      .about-section-title {
        text-align: center;
        padding: 20px 20px 40px 20px;
        font-size: 16px;
        line-height: 29px;
        text-transform: uppercase;
        letter-spacing: 3px;
      }

      .skills {
        width: 100%;
        display: flex;
        flex-direction: column;

        .skill {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 20px;

          .skill-title {
            width: 100%;
            flex: 0 0 100%;
            box-sizing: border-box;
            line-height: 18px;
            margin-bottom: 10px;
            @media screen and (min-width: 1200px) {
              width: 30%;
              flex: 0 0 30%;
              padding-right: 20px;
              margin-bottom: unset;
            }
          }

          .skill-bar {
            width: 100%;
            flex: 0 0 100%;
            box-sizing: border-box;
            background: #000;
            height: 18px;
            @media screen and (min-width: 1200px) {
              width: 70%;
              flex: 0 0 70%;
            }

            .skill-progress {
              background: #008c76ff;
              height: 100%;
            }
            .skill-7 {
              width: 70%;
            }
            .skill-8 {
              width: 80%;
            }
            .skill-9 {
              width: 90%;
            }
            .skill-10 {
              width: 100%;
            }
          }
        }
      }

      .contact {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        padding: 0 20px;
        box-sizing: border-box;

        .contact-item {
          flex: 0 0 100%;
          display: -webkit-flex;
          display: flex;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-align-items: center;
          align-items: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 600;
          font-size: 12px;
          margin-bottom: 20px;

          a {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-decoration: none;
            transition: all 0.3s ease-out;
            &:hover {
              color: #008c76ff;
            }

            i {
              font-size: 25px;
              padding-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
