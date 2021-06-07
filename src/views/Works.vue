<template>
  <div class="overlay-wrapper">
    <div class="overlay-1"></div>
    <div class="overlay-2"></div>
    <div class="overlay-3"></div>
  </div>
  <div class="works-wrapper">
    <div v-for="work in works" :key="work" class="work-wrapper">
      <div class="work">
        <div class="work-img">
          <img :src="require('../assets/' + work.imgUrl)" :alt="work.title" />
          <div class="work-link">
            <a :href="work.siteUrl" v-if="work.siteUrl" target="_blank"
              ><div class="live-link">Live site</div></a
            >
            <a
              :href="work.sourceCodeUrl"
              v-if="work.sourceCodeUrl"
              target="_blank"
            >
              <div class="code-link">
                Source code
              </div>
            </a>
          </div>
        </div>

        <div class="work-title-wrapper">
          <div class="work-title">{{ work.title }}</div>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</template>
<script>
import { ref } from "vue";
import { gsap } from "gsap";
export default {
  name: "Works",
  setup() {
    let works = ref([
      {
        title: "Iso Omena website",
        imgUrl: "isoomena.png",
        siteUrl: "https://isoomena.fi",
        sourceCodeUrl: "",
      },
      {
        title: "Ainoa website",
        imgUrl: "ainoa.png",
        siteUrl: "https://www.ainoatapiola.fi/",
        sourceCodeUrl: "",
      },
      {
        title: "Matkus website",
        imgUrl: "matkus.png",
        siteUrl: "https://www.matkusshoppingcenter.fi/",
        sourceCodeUrl: "",
      },
      {
        title: "Mall of Tripla website",
        imgUrl: "mot.png",
        siteUrl: "https://www.malloftripla.fi/",
        sourceCodeUrl: "",
      },
      {
        title: "Kamppi website",
        imgUrl: "matkus.png",
        siteUrl: "https://kamppi.fi/",
        sourceCodeUrl: "",
      },
      {
        title: "Rioshop website",
        imgUrl: "rioshop.png",
        siteUrl: "https://rioshop.vn/",
        sourceCodeUrl: "",
      },
      {
        title: "Personal CV",
        imgUrl: "personalcv.png",
        siteUrl: "https://tuandoan.netlify.app/",
        sourceCodeUrl: "https://github.com/TuanDoan2193/online-cv",
      },
    ]);

    return { works };
  },
  mounted() {
    const tlOverlay = gsap.timeline();
    const tlWorks = gsap.timeline();
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
    tlWorks.from(".works-wrapper", {
      duration: 0.5,
      y: 100,
      opacity: 0,
      delay: 1.2,
    });
  },
};
</script>
<style lang="scss" scoped>
.works-wrapper {
  padding: 5%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 992px) {
    padding: 5% 10%;
  }

  .work-wrapper {
    width: 100%;
    flex: 0 0 100%;

    @media screen and (min-width: 576px) {
      width: 50%;
      flex: 0 0 50%;
    }
    @media screen and (min-width: 992px) {
      width: 33.3%;
      flex: 0 0 33.3%;
    }

    .work {
      padding: 10px;
      box-sizing: border-box;

      .work-img {
        background: #fff;
        width: 100%;
        padding-top: 100%;
        position: relative;
        box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.1);
        overflow: hidden;

        &:hover {
          .work-link {
            transform: translateY(-99.5%);
          }
        }

        img {
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
        }

        .work-link {
          background: #000;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 0.3s ease-out;
          border-bottom: 5.5px solid #008c76ff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          a {
            color: #fff;
            text-decoration: none;
            div {
              padding: 12px 20px;
              width: 100px;
              border-radius: 25px;
              border: 2px solid #008c76ff;
              margin-bottom: 10px;
              font-size: 16px;
              font-weight: bold;
              text-align: center;
              transition: all 0.3s ease-out;

              &:hover {
                background: #008c76ff;
              }
            }
          }
        }
      }

      .work-title-wrapper {
        padding: 20px;
        box-sizing: border-box;
        background: linear-gradient(180deg, #000, transparent);
        border-bottom: 4px solid #008c76ff;

        .work-title {
          text-align: center;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
