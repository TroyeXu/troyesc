<!-- @format -->

<template>
  <div class="w100 abr-buttons">
    <div class="buttons fo2">
      <a @click="linkUrl('/')">
        <!-- <img src="./statics/image/casino-index.svg" class="mlogo" /> -->
      </a>
      <div v-if="isLogin" class="header_right fo2">
        <div class="header_user fd6">
          <div class="header-s1">{{account}}</div>
          <div class="header-s2">
            <span>{{money}}</span>
          </div>
        </div>
        <a class="m-btn01 fl5" @click="signOut()">logout</a>
      </div>
    </div>
  </div>
</template>


<script>
/** @format */
import { throttle } from 'quasar'
import utils from 'troyemixin'
import { removeLocalStorage } from '@troyexu/yl-fn'
export default {
  props: {
    isLogin: {
      type: Boolean,
      default: true,
    },
    account: {
      type: String,
      default: 'troye123',
    },
    money: {
      type: String,
      default: '$1000',
    },
  },
  methods: {
    signOut: throttle(function () {
      alert('logout')
      this.$emit('logout')
    }, 500),
  },
}
</script>

<style lang="scss">
@import './assert/css/styleAll.scss';

/*選單登出*/
.outbox {
  width: 100%;
  padding: 0% 5% 0%;
  border-top: #b7a380 1px solid;
  position: fixed;
  bottom: 50px;
  background-color: #151515;
}

.m-btn01 {
  padding: 5px 10px;
  color: #fff;
  background-color: #b7a380;
  font-size: 0.9rem;
  letter-spacing: 1px;
  border-radius: 3px;
}

.m-btn01:active {
  background-color: #5e5346;
}

/*header*/
.w100 {
  width: 100%;
}
.abr-buttons {
  position: fixed;
  z-index: 92;
}

.buttons {
  width: 100%;
  height: 49px;
  color: #fff;
  position: absolute;
  z-index: 92;
  top: 0;
  padding: 0 19px;
  background-color: #151515;
}

.mlogo {
  height: 28px;
}

.header_right {
  height: 100%;
  position: relative;
}

.header_user {
  height: 100%;
  margin-right: 12px;
}

.header-s1 {
  color: #7b6a56;
  font-size: 0.9rem;
  margin-bottom: 3px;
}

.header-s2 {
  color: #f7d9b7;
  font-size: 1rem;
}

.menuicon {
  width: 28px;
  height: 28px;
  position: absolute;
  z-index: 90;
  top: 12px;
  right: 0px;
  -webkit-transition: all 0.3s;
  transition: all 0.5s;
}

.menuicon.on {
  width: 28px;
  height: 28px;
  background: none;
  position: absolute;
  z-index: 90;
  top: 12px;
  right: 0px;
  -webkit-transition: all 0.3s;
  transition: all 0.5s;
}

.menuicon .eee1,
.menuicon .eee2 {
  display: none;
}
.menuicon.on .eee1,
.menuicon.on .eee2 {
  display: flex;
}

.eee1 {
  width: 28px;
  height: 2px;
  background-color: #fff;
  animation-name: oxxo;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  position: absolute;
}

.eee2 {
  width: 28px;
  height: 2px;
  background-color: #fff;
  animation-name: oxxo2;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes oxxo {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes oxxo2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
</style>