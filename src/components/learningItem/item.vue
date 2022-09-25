<template>
  <div class="item">
    <a class="title">{{itemTitle}}</a>
      <div class="status">发布于：{{ publishTime }} | 阅读：1.000 | 标签：{{ itemTag }}</div>
      <div ref="itemContent" class="contant">
        <pre v-if="originCode">
          {{ itemContent }}
        </pre>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    itemTitle: {
      type: String,
      default: () => ''
    },
    itemTag: {
      type: String,
      default: () => ''
    },
    originCode: {
      type: Boolean,
      default: () => false
    },
    itemContent: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      publishTime: ''
    }
  },
  created () {
    this.initDate()
  },
  mounted () {
    this.initContent()
  },
  methods: {
    initDate () {
      const date = new Date()
      this.publishTime = `${ date.getFullYear() }/${ date.getMonth() + 1 }/${ date.getDate() }`
    },
    initContent () {
      if (!this.originCode) {
        // const reg = /<blockquote>|<blockquote\/>/i
        const reg = /<blockquote>|<blockquote\/>|<a\s*id="_\d*"><\/a>/ig
        this.itemContent.replace(reg, '')
        this.$refs.itemContent.innerHTML = this.itemContent
      }
    }
  }
  
}
</script>
<style scoped>

</style>