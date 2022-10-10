<template>
  <div class="ad-outer">
      <component :is="'script'" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1537305666483956" crossorigin="anonymous"></component>
      <ins class="adsbygoogle ad-inner"
          style="display:block;min-width:400px;max-width:970px;width:100%;height:90px"
          data-ad-client="ca-pub-1537305666483956"
          data-ad-slot="6738174565"
          ></ins>
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
  display: flex;
  justify-content: center;
}
</style>