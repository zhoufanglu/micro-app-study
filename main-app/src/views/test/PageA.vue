<template>
  <div
    class="p-page-A"
    name1="1"
    name2="2"
    name3="3"
  >
    <n-button
      type="primary"
      :loading="loading"
      @click="getUserTest"
      >点击请求
    </n-button>
    <br />
    <br />
    <n-button
      type="primary"
      @click="setPiniaSize"
      >设置Pinia窗口大小</n-button
    >
    {{ clientWidth }}-{{ clientHeight }}
    <div name="ccc"></div>

    <n-radio
      :checked="true"
      value="Definitely Maybe"
      name="basic-demo"
    >
      Definitely Maybe
    </n-radio>

    Page-A
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { useWindowStore } from '@/store/modules/window'
import api from '@/request/api'

/** ********************pinia********************** */
const windowStore = useWindowStore()

const { clientWidth, clientHeight } = toRefs(windowStore)

const setPiniaSize = () => {
  windowStore.setClientWidth(window.innerWidth)
  windowStore.setClientHeight(window.innerHeight)
  window.$message.success('设置成功')
  console.log(41, clientWidth)
}

const loading = ref(false)
const getUserTest = async () => {
  try {
    loading.value = true
    const res = await api.user.test()
    console.log(res)
  } catch (e) {
    console.log('error', e)
  } finally {
    loading.value = false
    // close loading
  }
}
</script>

<style
  scoped
  lang="scss"
>
.p-page-A {
}
</style>
