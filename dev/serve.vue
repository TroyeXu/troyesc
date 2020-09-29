<script>
import Vue from 'vue'
import Sc from '@/sc.vue'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Sc,
  },
})
</script>

<template>
  <div id="app">
    <sc />
  </div>
</template>


<style lang="scss">
/*--
	reset
--*/
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
fieldset,
img {
  border: 0;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}
ol,
ul {
  list-style: none;
}
caption,
th {
  text-align: left;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
q:before,
q:after {
  content: '';
}
abbr,
acronym {
  border: 0;
}

a {
  outline: none; /* for Firefox */
  hlbr: expression(this.onFocus=this.blur()); /* for IE */
  text-decoration: none;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

/* remember to define focus styles! */
:focus {
  outline: 0;
}

/* remember to highlight inserts somehow! */
ins {
  text-decoration: none;
}
del {
  text-decoration: line-through;
}

/* tables still need 'cellspacing="0"' in the markup */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  font-size: 16px;
}

body {
  -webkit-tap-highlight-color: transparent; /*手機版點擊透明藍色拿掉*/
  font-family: 'PingFang SC', 'Lantinghei SC', 'Microsoft YaHei', 'HanHei SC',
    'Helvetica Neue', 'Open Sans', Arial, 'Hiragino Sans GB', '微软雅黑',
    STHeiti, 'WenQuanYi Micro Hei', SimSun, sans-serif;
  -webkit-text-size-adjust: 100%; /*移除ios文字亂改大小*/
}
</style>