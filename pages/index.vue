<template>
  <div>
    <div class="main">
      <div class="mainVisual hero">
        <div class="text-wrapper">
          <span class="letters">a</span>
          <span class="letters">&nbsp;</span>
          <span class="letters">d</span>
          <span class="letters">e</span>
          <span class="letters">l</span>
          <span class="letters">e</span>
          <span class="letters">c</span>
          <span class="letters">t</span>
          <span class="letters">a</span>
          <span class="letters">b</span>
          <span class="letters">l</span>
          <span class="letters">e</span>
          <span class="letters">&nbsp;</span>
          <span class="letters">j</span>
          <span class="letters">o</span>
          <span class="letters">u</span>
          <span class="letters">r</span>
          <span class="letters">n</span>
          <span class="letters">e</span>
          <span class="letters">y</span>
        </div>
        <picture>
          <source
            :width="settings.mainVisualSp.width"
            :height="settings.mainVisualSp.height"
            :srcset="settings.mainVisualSp.url"
            media="(max-width: 767px)"
          />
          <img
            :width="settings.mainVisualPc.width"
            :height="settings.mainVisualPc.height"
            :src="settings.mainVisualPc.url"
            alt=""
          />
        </picture>
      </div>
    </div>

    <div class="overlay"></div>

    <section id="skill">
      <div>
        <h2>My skill</h2>
        <div class="chart-wrapper">
          <BarChart :chartdata="chartdata" :options="options" />
        </div>
      </div>
    </section>

    <section id="about" class="sectionPrimary">
      <div class="container">
        <h2 class="headingPrimary">about me</h2>
        <div class="profile">
          <div class="profile__upper">
            <div class="profile__text">
              <p class="profile__name">
                <span>{{ settings.name }}</span>
                <span lang="en">{{ settings.nameEnglish }}</span>
              </p>
              <dl class="profile__item">
                <dt class="profile__title">技術スタック</dt>
                <dd>{{ settings.skills }}</dd>
              </dl>
              <dl class="profile__item">
                <dt class="profile__title">趣味</dt>
                <dd>{{ settings.hobby }}</dd>
              </dl>
            </div>
            <figure class="profile__image">
              <img
                :width="settings.profileImage.width"
                :height="settings.profileImage.height"
                :src="settings.profileImage.url"
                :alt="settings.name"
              />
            </figure>
          </div>
          <p class="profile__message">{{ settings.message }}</p>
        </div>
      </div>
    </section>

    <section class="sectionPrimary background--gray">
      <div class="container">
        <h2 class="headingPrimary">works</h2>
        <ol class="row works">
          <li v-for="work in works.contents" :key="work.id" class="works__item">
            <nuxt-link :to="`/works/${work.id}/`" class="works__inner">
              <figure class="works__image">
                <img
                  :width="work.thumbnail.width"
                  :height="work.thumbnail.height"
                  :src="work.thumbnail.url"
                  :alt="work.title"
                />
              </figure>
              <div class="works__text">
                <p class="works__name">{{ work.title }}</p>
                <p class="works__date">
                  <time
                    :datetime="work.release"
                    v-text="
                      $dateFns.format(new Date(work.release), 'yyyy.MM.dd')
                    "
                  />
                </p>
              </div>
            </nuxt-link>
          </li>
        </ol>
        <!-- <ol class="row works">
          <li class="works__item">
            <nuxt-link to="#!" class="works__inner">
              <figure class="works__image">
                <img src="https://placehold.jp/370x229.png" alt="" />
              </figure>
              <div class="works__text">
                <p class="works__name">作品名</p>
                <p class="works__date">
                  <time datetime="2021-12-16">2021.12.16</time>
                </p>
              </div>
            </nuxt-link>
          </li>
          <li class="works__item">
            <nuxt-link to="#!" class="works__inner">
              <figure class="works__image">
                <img src="https://placehold.jp/370x229.png" alt="" />
              </figure>
              <div class="works__text">
                <p class="works__name">作品名</p>
                <p class="works__date">
                  <time datetime="2021-12-16">2021.12.16</time>
                </p>
              </div>
            </nuxt-link>
          </li>
        </ol> -->
        <p class="button-area">
          <nuxt-link to="/works" class="buttonPrimary">view more</nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// import { TimelineMax, Power2 } from 'gsap'
import { gsap } from 'gsap'
import BarChart from '@/components/BarChart.vue'
import Data from '@/data/bar.json'

export default {
  components: {
    BarChart,
    // gsap,
  },
  async asyncData({ $microcms }) {
    const settings = await $microcms.get({
      endpoint: 'settings',
    })

    const works = await $microcms.get({
      endpoint: 'works',
      queries: { limit: 2 },
    })
    return {
      settings,
      works,
    }
  },
  data() {
    return {
      chartdata: {
        labels: Data.data.map((data) => data.subject),
        datasets: [
          {
            label: ['Data One'],
            backgroundColor: '#00FF00',
            data: Data.data.map((data) => data.rate),
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 5,
              },
            },
          ],
        },
      },
    }
  },

  mounted() {
    // const timeline = new TimelineMax()
    // var timeline = gsap.timeline({ ease: 'power2.out', duration: 1 })
    // timeline
    gsap
      .timeline({
        defaults: { ease: 'Power2.easeInOut', duration: 1 }, // timelineのプロパティ
      })
      .fromTo('.hero', 1, { height: '0%' }, { height: '80%' })
      .addLabel('up')
      .fromTo('.hero', 1, { width: '100%' }, { width: '70%' }, 'up+=0.2')
      .fromTo('.overlay', 1, { x: '-100%' }, { x: '0%' }, 'up+=0.2')
      .fromTo(
        '.header-title',
        0.5,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, ease: 'back.out(1.7)' },
        'up+=0.5'
      )
      .fromTo(
        '.sns',
        0.5,
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0 },
        'up+=0.8'
      )
      .staggerFromTo(
        '.letters',
        0.5,
        { x: '1em', y: '1.2em', rotateZ: 180 },
        { x: 0, y: 0, rotateZ: 0 },
        0.05,
        'up+=0.2'
      )
  },
}
</script>

<style lang="scss" scoped>
.mainVisual {
  img {
    width: 100%;
  }
}
// .chart-wrapper {
//   width: 50vw;
//   height: 50vh;
// }
.profile {
  &__upper {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 0.5em;

    @include mq() {
      flex-direction: row-reverse;
      justify-content: space-between;
      margin-bottom: 2em;
    }
  }

  &__text {
    @include mq() {
    }
  }

  &__name {
    font-size: fz(24);
    font-weight: bold;
    margin-bottom: 0.5em;

    @include mq() {
      font-size: fz(28);
      margin-bottom: 0.857em;
    }

    [lang='en'] {
      font-size: fz(18);

      &::before {
        content: '/';
        margin: 0 0.5em;
      }
    }
  }

  &__item {
    margin-bottom: 0.5em;

    @include mq() {
      margin-bottom: 1em;
    }
  }

  &__title {
    font-size: fz(18);
    font-weight: bold;
    margin-bottom: 0.222em;

    @include mq() {
      margin-bottom: 0.444em;
    }
  }

  &__image {
    width: 100%;
    margin-bottom: 1.75em;

    @include mq() {
      width: 40%;
      margin: 0 2em 0 0;
    }

    img {
      width: 100%;
    }
  }

  &__message {
    white-space: pre-wrap;
  }
}

.works {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &__item {
    width: 100%;

    @include mq() {
      width: calc((100% - 2.5em) / 2);
    }
  }

  &__item + &__item {
    margin-top: 1.5em;

    @include mq() {
      margin: 0;
    }
  }

  &__inner {
    display: block;
  }

  &__image {
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }

  &__name {
    font-weight: bold;
  }

  &__date {
    font-size: fz(14);
  }
}

.main {
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero {
  position: relative;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-wrapper {
  position: absolute;
  top: 40%;
  left: -10%;
  color: #ffc288;
  font-size: 48px;
  text-transform: uppercase;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  z-index: -1;
}

.letters {
  display: inline-block;
}
</style>
