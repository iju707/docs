<template>
  <div class="ad-outer">
      <component :is="'script'" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1537305666483956" crossorigin="anonymous"></component>
      <ins class="adsbygoogle ad-inner"
          data-ad-client="ca-pub-1537305666483956"
          data-ad-slot="6991744222"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
      <component :is="'script'">
          (adsbygoogle = window.adsbygoogle || []).push({});
      </component>
  </div>
</template>

<style>
.ad-outer {
  display: flex;
  justify-content: center;
  width: 100%;
}
.ad-inner {
  width: 80%;
  display: flex;
  justify-content: center;
}
</style>